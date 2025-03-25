//esm
import edoardo from './hobbies.js'; //hobbies
import namesFn from './names.js';

//commonjs
//const hobbiesFn = require('./hobbies.js');
//const namesFn = require('./names.js');



const fullName = namesFn('Gaetano', 'Frascolla');
const hobbies = edoardo('read', 'run', 'fun');


function people() {
  return {
    hobbies,
    fullName
  }
}

console.log(people());



