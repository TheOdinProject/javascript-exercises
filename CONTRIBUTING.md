# The Odin Project JavaScript Exercises Contributing Guide

Thank you for expressing interest in contributing to The Odin Project (TOP) JavaScript exercises! Before continuing through this guide, be sure you've read our [general contributing guide](https://github.com/TheOdinProject/.github/blob/main/CONTRIBUTING.md), as it contains information that is important for all of our repos.

This contributing guide assumes you have followed the instructions in our general contributing guide to fork and clone our JavaScript exercises repo.

## Table of Contents

- [How to Contribute](#how-to-contribute)
  - [Prerequisites](#prerequisites)
  - [Adding New Exercises](#adding-new-exercises)

## How to Contribute

### Prerequisites

- Node v18.0.0 or higher
- npm v8.5.5 or higher

### Adding New Exercises

> [!IMPORTANT]
> Please do not open a pull request with a new exercise unless you have opened an issue in this repo with your proposal **and** it has been approved by a maintainer.

If a maintainer has approved a new exercise to be added, the new exercise(s) must follow the same format as existing exercises.

To generate a new exercise template, do the following:

1. Be sure to run `npm install` at the root of the `javascript-exercises` directory to install the necessary dependencies.
1. Run the command `npm run generate`.
1. When prompted, enter the name of the new exercise in "camelCase" syntax. This will create a new directory with the necessary files included.
1. Update the `README.md` and `.spec.js` file, as well as the files inside the `solution` directory of the new exercise.
1. Open a pull request with the new exercise.
