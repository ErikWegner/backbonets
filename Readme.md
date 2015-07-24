Backbone app written in TypeScript
==================================

This is a TypeScript version of the Backbone tutorial found at http://ewus.de/en/tutorials/backbone.

It also features require.js (www.requirejs.org) to load the modules build by the typescript compiler.

Requirements for building:
--------------------------

- npm: Node Package Manager
- bower: Dependency handling for JavaScript libraries
- tsc: TypeScript compiler


Building preparations:
----------------------

Run the following commands at the root directory of the project

    npm install -g bower
    npm install -g tsc
    bower install


Building
--------

To compile the scripts, run the following commands at the root of the project:

    tsc --module amd -w --sourceMap --outDir js ts/**/*.ts ts/*.ts


tsconfig.json
-------------

This file controls how _Visual Studio Code_ handles TypeScript compiling and formatting.
See https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md for details.
Changing this settings may need a restart of _Visual Studio Code_.

More information is found here: 
http://blogs.msdn.com/b/typescript/archive/2015/04/30/using-typescript-in-visual-studio-code.aspx
