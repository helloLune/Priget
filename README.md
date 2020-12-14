# Priget
![Priget](https://github.com/helloLune/Priget/workflows/Priget/badge.svg)

**Makes your npm-packages private**

# About

Devs can publish private npm-packages only payfully , but if you haven't money here, as variant - 'Priget'

# Featches
- Generate name for your package
- Import package by name and password

# Example of use:

```js
const Priget = require('Priget')

// Get name of package
Priget.name_gen('project-name', 'password') // '1078143' 

// Get package 
const YourPackage = Priget.require('project-name', 'password') // should require npm-package with name '1078143'

```

