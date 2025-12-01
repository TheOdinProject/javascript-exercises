const { readdir } = require("fs/promises");
const { basename, dirname, join } = require("path");

function splitDirectoryName(directoryName) {
  const exerciseDirectoryName = directoryName.endsWith("solution")
    ? basename(dirname(directoryName))
    : basename(directoryName);
  return {
    exerciseNumber: exerciseDirectoryName.match(/\d+/),
    exerciseName: exerciseDirectoryName.match(/[a-z]+/i),
  };
}

async function getDirsWithExercises(path) {
  const ignoredDirs = ["archive", "node_modules", "generators"];
  try {
    const dirs = await readdir(join(process.cwd(), path), {
      withFileTypes: true,
    });
    const exerciseDirs = dirs.filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith(".") &&
        !ignoredDirs.includes(entry.name),
    );
    return exerciseDirs.map((dir) => dir.name);
  } catch {
    return [];
  }
}

async function getLatestExerciseDirectory(path) {
  try {
    const files = await readdir(join(process.cwd(), path));
    return files.findLast((file) => /^\d+_\w+$/.test(file));
  } catch {
    return "0";
  }
}

async function createExerciseDirectoryName(exerciseName, path) {
  const latestExerciseDirectory = await getLatestExerciseDirectory(path);
  const latestExerciseNumber = parseInt(latestExerciseDirectory.match(/^\d+/));

  if (latestExerciseDirectory === `${latestExerciseNumber}_${exerciseName}`) {
    throw new Error(`Exercise already exists with name "${exerciseName}"`);
  }

  return `${latestExerciseNumber + 1}_${exerciseName}`;
}

module.exports = {
  getDirsWithExercises,
  createExerciseDirectoryName,
  splitDirectoryName,
};
