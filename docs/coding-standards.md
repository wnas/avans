# Coding standards Avans

The front end code will be written, following the following (living) coding standards


## Task runner / grunt

As a task runner we will be using [grunt(https://gruntjs.com/)

## Patternlab

All front end stuff will be built with [patternlab](http://patternlab.io), available to download [here](https://github.com/pattern-lab/edition-node-grunt) (we use the grunt edition).

## Sass / CSS

Css classes will be declared using [BEM](https://en.bem.info/methodology/quick-start/) with Block__Element--modifier. Do not worry about the order or the indentation of your CSS, we will sort that out with CSS comb in Grunt. CSS code will not be indented more than 3 levels
```scss
.foo .bar .bla {
	// allowed
}

.foo .bar .bla .more {
    // not allowed.
}
```
