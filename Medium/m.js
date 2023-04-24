//  Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. 
// Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
let input = prompt("Tell me about your day?");
if(input === input.toUpperCase()){
    console.log("You are Probably Upset and you are shouting please lower your tone.");
} else if(input === input.toLowerCase()){
        console.log("You are Probably sad and you are whispering please raise your tone.");
}    else{
        console.log("Sounds like regular day since you are talking normally");
}
