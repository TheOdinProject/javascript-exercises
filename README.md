These are a series of javascript exercises intended to be used alongside the curriculum at 'The Odin Project'  They start very simply, but get more involved as you progress through them.

There will eventually be a suggested order of completion, but at this time since we are still in the process of creating more exercises the order is subject to change and has not yet been specified... In general however there are a couple which make a good "starting point" feel free to at least start with these:

1. Hello World
1. Repeat String
1. Reverse String

## HOW TO USE THESE EXERCISES
Before you start you should have a few things installed on your machine:
1. NodeJS.  To check if you have it type `node -v` in a terminal.  If you get back a number bigger than `6` that means you've got it installed.  Best way to install node is with NVM.  Check link for instructions [here](https://github.com/creationix/nvm#install-script)
2. Jasmine.  Jasmine is a testing framework for Javascript.  Type `jasmine -v` to check for it.  If you need to install it type `npm install -g jasmine` to do so.
3. Clone this repo and get started.

Each exercise includes 3 files, a markdown file with a description of the task, an empty (or mostly empty) javascript file, and a set of tests.  To complete the exercise go to the exercise directory in a terminal and run `jasmine filename.spec.js`.  This should find and run the test file and show you the output.  Upon first running the tests you will find that the tests fail: this is by design!  Your task is to open up the javascript file and write the code needed to get all of the tests to pass. Some of the exercises have test conditions defined in the spec file that are defined as 'xit' compared to 'it'. This is purposeful, and as you test your solution against the first 'it', on success you will change the next 'xit' to an 'it' and test your code again, until all conditions are satisfied.

The first exercise, `helloWorld` will walk you through the process in more depth.

## Solutions

Solutions for these exercises can be found in this repo on the 'solutions' branch.
