const { mkdir } = require("fs/promises");
const { join } = require("path");
const { camelCase } = require("case-anything");
const {
  createExerciseDirectoryName,
  getDirsWithExercises,
} = require("./generators/helpers");
const { writeReadme } = require("./generators/writeReadme");
const { writeExercise } = require("./generators/writeExercise");
const { writeExerciseSpec } = require("./generators/writeExerciseSpec");

/**
 * @typedef {import('plop').NodePlopAPI} Plop
 * @param {Plop} plop
 */
module.exports = function (plop) {
  const NEW_DIR_OPTION = "<Make new directory>";

  plop.setActionType(
    "createExercise",
    async function ({ pathForExercise, exerciseName }) {
      if (!exerciseName) {
        throw new Error(
          `Invalid exerciseName. Expected: valid string. Actual: "${exerciseName}"`,
        );
      } else if (!pathForExercise.length) {
        throw new Error(
          "The new exercise cannot be placed in the project root",
        );
      }

      const camelExerciseName = camelCase(exerciseName);
      const exerciseDirectoryName = await createExerciseDirectoryName(
        camelExerciseName,
        join(...pathForExercise),
      );
      const basePath = join(
        process.cwd(),
        ...pathForExercise,
        exerciseDirectoryName,
      );
      const solutionPath = join(basePath, "solution");

      await mkdir(basePath, { recursive: true });
      await mkdir(solutionPath);

      await writeReadme(basePath);
      await writeExercise(basePath);
      await writeExercise(solutionPath);
      await writeExerciseSpec(basePath);
      await writeExerciseSpec(solutionPath);
    },
  );

  plop.setGenerator("Basic", {
    description: "Create a basic JavaScript exercise.",
    prompts: async function (inquirer) {
      async function getPathForExercise(dirPath = []) {
        const exerciseDirs = await getDirsWithExercises(dirPath.join("/"));

        // Will only be empty when entering a new dir on a recursive call
        // Recursive call only happens when new dir required which can bypass this question
        const { dir } = exerciseDirs.length
          ? await inquirer.prompt({
              type: "list",
              name: "dir",
              message: "Which directory should this exercise go in?",
              choices: [NEW_DIR_OPTION, ...exerciseDirs],
            })
          : { dir: NEW_DIR_OPTION };

        if (dir === NEW_DIR_OPTION) {
          const { newDirName } = await inquirer.prompt({
            type: "input",
            name: "newDirName",
            message: "What is the name of the new directory?",
          });
          dirPath.push(newDirName);
        } else {
          dirPath.push(dir);
        }

        const { needMoreDirs } = await inquirer.prompt({
          type: "confirm",
          name: "needMoreDirs",
          message: "Does this exercise need to be nested in a subdirectory?",
        });

        return needMoreDirs ? await getPathForExercise(dirPath) : dirPath;
      }

      const pathForExercise = await getPathForExercise();
      const { exerciseName } = await inquirer.prompt({
        type: "input",
        name: "exerciseName",
        message: "What is the name of the new exercise (in camelCase)?",
      });

      return { pathForExercise, exerciseName };
    },
    actions: [{ type: "createExercise" }],
  });
};
