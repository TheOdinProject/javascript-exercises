const { mkdir } = require("fs/promises");
const { join } = require("path");
const { createExerciseDirectoryName } = require("./generators/helpers");
const { writeReadme } = require("./generators/writeReadme");
const { writeExercise } = require("./generators/writeExercise");
const { writeExerciseSpec } = require("./generators/writeExerciseSpec");

module.exports = function (plop) {
  plop.setActionType("createExercise", async function (answers) {
    const { exerciseName } = answers;
    if (!exerciseName) {
      throw new Error(
        `Invalid exerciseName. Expected: valid string. Actual: "${exerciseName}"`
      );
    }

    const exerciseDirectoryName = await createExerciseDirectoryName(
      exerciseName
    );
    const basePath = join("./", exerciseDirectoryName);
    const solutionPath = join(basePath, "solution");

    await mkdir(basePath);
    await mkdir(solutionPath);
    await writeReadme(basePath);
    await writeExercise(basePath);
    await writeExercise(solutionPath);
    await writeExerciseSpec(basePath);
    await writeExerciseSpec(solutionPath);
  });

  plop.setGenerator("Basic", {
    description: "Create a basic JavaScript exercise.",
    prompts: [
      {
        type: "input",
        name: "exerciseName",
        message: "What is the name of the exercise? (camelCase)",
      },
    ],
    actions: [{ type: "createExercise" }],
  });
};
