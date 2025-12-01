const { writeFile } = require("fs/promises");
const { join } = require("path");
const { splitDirectoryName } = require("./helpers");

async function writeExerciseSpec(exercisePath) {
  const { exerciseName } = splitDirectoryName(exercisePath);
  const isSolutionFile = exercisePath.includes("/solution");
  const trueExerciseName = isSolutionFile
    ? `${exerciseName}-solution`
    : exerciseName;

  const exerciseSpecContent = `const ${exerciseName} = require('./${trueExerciseName}');

describe('${exerciseName}', () => {
  test('First test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(${exerciseName}()).toBe('');
  });

  test${isSolutionFile ? "" : ".skip"}('Second test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(${exerciseName}()).toBe('');
  });
});
`;

  await writeFile(
    join(exercisePath, `${trueExerciseName}.spec.js`),
    exerciseSpecContent
  );
}

module.exports = { writeExerciseSpec };
