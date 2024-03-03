const { readdir } = require("fs/promises");

function splitDirectoryName(directoryName) {
  return {
    exerciseNumber: directoryName.match(/\d+/),
    exerciseName: directoryName.match(/[a-z]+/i),
  };
}

async function getLatestExerciseDirectory() {
  try {
    const files = await readdir("./");
    return files.findLast((file) => /^\d+_\w+$/.test(file));
  } catch (err) {
    console.error(err);
  }
}

async function createExerciseDirectoryName(directoryName) {
  const latestExerciseDirectory = await getLatestExerciseDirectory();
  const latestExerciseNumber = parseInt(latestExerciseDirectory.match(/^\d+/));

  if (latestExerciseDirectory === `${latestExerciseNumber}_${directoryName}`) {
    throw new Error(`Exercise already exists with name "${directoryName}"`);
  }

  return `${latestExerciseNumber + 1}_${directoryName}`;
}

module.exports = { createExerciseDirectoryName, splitDirectoryName };
