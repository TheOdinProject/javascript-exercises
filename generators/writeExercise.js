const { writeFile } = require("fs/promises");
const { join } = require("path");
const { splitDirectoryName } = require("./helpers");

async function writeExercise(exercisePath) {
  const { exerciseName } = splitDirectoryName(exercisePath);
  const isSolutionFile = exercisePath.includes("/solution");
  const exerciseContent = `const ${exerciseName} = function() {
${isSolutionFile ? "  // Replace this comment with the solution code" : ""}
};

// Do not edit below this line
module.exports = ${exerciseName};
`;

  await writeFile(
    join(
      exercisePath,
      `${exerciseName}${isSolutionFile ? "-solution" : ""}.js`
    ),
    exerciseContent
  );
}

module.exports = { writeExercise };
