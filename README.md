# Avans Responsive

The Grunt wrapper around [Pattern Lab Node Core](https://github.com/pattern-lab/patternlab-node), providing tasks to interact with the core library and move supporting frontend assets.

## Packaged Components

Here we have the core of the avans website. This project contains the HTML, CSS and presentational JavaScript needed for avans.nl responsive styla.

## Prerequisites

The Pattern Lab Node - Grunt Edition uses [Node](https://nodejs.org) for core processing, [npm](https://www.npmjs.com/) to manage project dependencies, and [grunt.js](http://gruntjs.com/) to run tasks and interface with the core library. Node version 4 or higher suffices. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation of Node will include npm.

It's also highly recommended that you [install grunt](http://gruntjs.com/getting-started) globally.

## Installing

* [Use npm](#use-npm)

### Download a pre-built package

The fastest way to get started with the Grunt Edition is to [download the pre-built version](https://github.com/pattern-lab/edition-node-grunt/releases) from the [releases page](https://github.com/pattern-lab/edition-node-grunt/releases). The pre-built project comes with the [Base Starterkit for Mustache](https://github.com/pattern-lab/starterkit-mustache-base) installed by default.

**Please note:** Pattern Lab Node uses [npm](https://www.npmjs.com/) to manage project dependencies. To upgrade the Grunt Edition or to install plug-ins you'll need to be familiar with npm.

### Use npm

`npm` is a dependency management and package system which can pull in all of the Grunt Edition's dependencies for you. To accomplish this:

* download or `git clone` this repository to an install location.

* run the following

    ```
    cd install/location
    npm install
    ```

Running `npm install` from a directory containing a `package.json` file will download all dependencies defined within.


## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### List all of the available commands

To list all available commands type:

    grunt patternlab:help

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    grunt

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type:

    grunt patternlab:serve

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.
