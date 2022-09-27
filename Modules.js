/**
 * A module is a piece of program that specifies
 * which other pieces it relies on and which
 * functionality it provides for other modules to use (its interface).
 * The relations between modules are called dependencies.
 */
/**
 * A package is a chunk of code that can be distributed
 * (copied and installed). It may contain one or more
 *  modules and has information about which other packages it depends on
 */

//Evaluating data as scope
//NOTE THIS IS A BAD IDEA SINCE IT BREAKS SOME OF THE
//PROPERTIES THAT SCOPES NORMALLY HAVE
const x = 1;
function evalAndReturn(code) {
  eval(code);
  return x;
}

console.log(evalAndReturn("var x = 2")); //2
console.log(x); //1

//Interpreting data as code using function constructor
//Function constructor takes 2 args, 1st is arg is name and the 2nd is a string
//containing function body

let PlusOne = Function("n", "return n+1;");
console.log(PlusOne(4));
