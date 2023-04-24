//  Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to
//  output the value in sentence form. Example output: "3 + 4 = 7"
// take the user input
let x = parseInt(prompt('Enter 1st number: '));
let operator = prompt("Enter operator (+, -, *, /)");
let y = parseInt(prompt("Enter 2nd number:"));


// operator
function add(x,y){
    return x+y 
  }

  function minus(x, y) {
    return x-y 
  }

  function multiply(x, y) {
    return x*y 
  }
  
  function divide(x, y) {
    return x/y 
  }

function conlog(){
if (operator === "+"){
    let result = add (x, y)
    return '${x} ${operator} ${y} = ${result}'
} else if (operator === "-"){
    let result = minus (x, y)
    return '${x} ${operator} ${y} = ${result}'
} else if (operator === "*"){
    let result = multiply (x, y)
    return '${x} ${operator} ${y} = ${result}'
} else;
 (operator === "/");
 let result = divide (x, y)
 return '${x} ${operator} ${y} = ${result}'
}