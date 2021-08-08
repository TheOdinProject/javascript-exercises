These are a series of JavaScript exercises intended to be used alongside the curriculum at 'The Odin Project'. They start simple and easy but get more complex and involved as you progress through them.

There will eventually be a suggested order of completion, but at this time since we are still in the process of creating more exercises the order is subject to change and has not yet been specified. However, there are a few exercises that make a good "starting point". Feel free to at least start with these:

1. Hello World
2. Repeat String
3. Reverse String

## How To Use These Exercises
Before you start you should have a few things installed on your machine:
1. **NPM**. To check if you have NPM installed, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, do NOT follow the instructions in the terminal to install with `apt-get`. (This causes permission issues.) Instead, install Node with NVM by following the instructions [here](https://github.com/TheOdinProject/curriculum/blob/master/foundations/installations/installing_node.md).
2. **A copy of this repository**. Copies of repositories on your machine are called clones. If you need help cloning, you can learn how [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
3. **Jest**. After cloning this repository to your local machine, go into the newly created directory (`cd javascript-exercises`) and run `npm install`. This will install Jest and set up the testing platform based on our preconfigured settings.

Each exercise includes 3 files: a markdown file with a description of the task, an empty (or mostly empty) JavaScript file, and a set of tests. To complete an exercise, you'll need to go to the exercise directory with `cd exerciseName` in the terminal and run `npm test exerciseName.spec.js`. This should run the test file and show you the output. When you first run a test, it will fail. This is by design! You must open the exercise file and write the code needed to get the test to pass. Some of the exercises have test conditions defined in their spec file that are defined as 'test.skip' compared to 'test'. This is purposeful. After you pass your first 'test', you will change the next 'test.skip' to an 'test' and test your code again. You'll do this until all conditions are satisfied. **ALL TESTS MUST PASS AT THE SAME TIME.**

**Note**: Due to the way Jest handles failed tests, it may return an exit code of 1 if any tests fail. NPM will interpret this as an error and you may see some `npm ERR!` messages after Jest runs. You can ignore these, or run your test with `npm test exerciseName.spec.js --silent` to supress the errors.

The first exercise, `helloWorld`, will walk you through the process in-depth.

## Debugging
To debug functions, you can run the tests in the visual code studio debugger terminal (open this by clicking the "Run and Debug" icon on the left or pressing ctrl + shift + D, then clicking JavaScript Debug Terminal). In your code you are able to set breakpoints as you would in the Chrome devtools debugger. You can run `npm test exerciseName.spec.js` to then execute your code up until your breakpoint and step through your code as necessary. 

## Solutions

Solutions for these exercises can be found in this repo on the 'solutions' branch.

## A quick note!

The exercise `generator-exercise` is not actually an exercise; it is a script that generates exercises. It was created to help efficiently write these exercises.
