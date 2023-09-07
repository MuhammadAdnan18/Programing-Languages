//IT refers to node package manager it is a library from where u can use multiple snippets codes (like presets by just calling those functions)
//we can also create our own packages
//first open terminal and run (npm init) and it willask u question s about the package u want to create and after that the package will be created as: 'pacakge.json'

//however biggest advantege is in using others pacakge whuch are already created to do that we will have to install it first from terminal

//to install(terminal):npm install packagename (eg supervillain) and do the following

const supervillains = require("supervillains");
var names = supervillains.random();
console.log(names);

//just like that u can use functions created by others using npm

/*code from terminal
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (createpacakge)
version: (1.0.0)
description: creating my first npm package
entry point: (useOfNPM.js)
test command:
git repository:
keywords:
author: Adnan
license: (ISC)
About to write to D:\rk(F)\others\Programming Languages\WEB development complete\Node js\createPacakge\package.json:

{
  "name": "createpacakge",
  "version": "1.0.0",
  "description": "creating first \u001b[B\u001b[D\u001b[D\u001b[D\u001b[D\u001b[D\u001b[Dmy first npm pacakge\u001b[D\u001b\u001b[C\u001b[C\u001b[kage",
  "main": "useOfNPM.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Adnan",
  "license": "ISC"
}


Is this OK? (yes)

muham@DESKTOP-F00V9RF MINGW64 /d/rk(F)/others/Programming Languages/WEB development complete/Node js/createPacakge (main)
$ npm install supervillains

added 3 packages, and audited 4 packages in 6s

found 0 vulnerabilities

*/
