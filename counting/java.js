const fizz = document.getElementById("fizzinput").value
const buzz = 5
const fBtn = document.getElementById("fbtn")
const max = 10
fBtn.addEventListener("click", fizzbuzz)
function fizzbuzz (){
    console.log(fizz)
   for (let i = 0; i <= max; i++) {
        if (!(i%fizz) &&!(i%buzz)){
            console.log("Fizzbuzz")
        }

        else if (!(i%buzz)){ 
            console.log("Buzz")
        }
        else if (!(i%fizz)){ 
            console.log("Fizz")}
        else
            console.log(i);
            } 
        }

function yourFunction(array, string){
    if (array.includes(string)){
        array.splice(array.indexOf(string, 2))
    }
    else if (!array.includes(string)){
        array.push(string)
    }
    return array
}

console.log(yourFunction(["Red", "Green"], "Blue"))
console.log(yourFunction(["Red", "Green", "Blue"], "Green"))


// READ CAREFULLY!!


// Complete the function below to accomplish the following:


// Return the string received in the first parameter with the following alterations:
// any letter in the string matching charA (the second parameter in the function) will be replaced with
// charB (the third parameter) and VICE VERSA - meaning letters matching charA will be replaced with charB,
// and letters matching charB will be replaced with charA. See the expected console log comments below.

function doubleSwap(string, charA, charB) { 
    string = string.split("")
    for (let i= 0; i < string.length; i++) {
        if (string[i] === charA){
            string[i] = charB
        }
        else if (string[i] === charB){
            string[i] = charA
        }
    }

    return string.join("")
}






console.log(doubleSwap("this is a string", "i", "s"));
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a"));
console.log(doubleSwap("what is the point of this?", "o", "t"));
console.log(doubleSwap("CghJh%!&hu78UHb(gb!hdsl#dakgf!dal!", "g", "!"));
console.log(doubleSwap("let's do one last test", "l", "e"));

//  this should log the following:


//  thsi si a itrsng
//  maybe another approach is necessary
//  whao is ohe ptino tf ohis?
//  C!hJh%g&hu78UHb(!bghdsl#dak!fgdalg
//  elt's do onl east tlst