function palindrome(){
    var userInput = document.querySelector("#userInput").value;

    let result = document.querySelector("#result");

    let number = userInput.toString();

    let numRev = number.split("").reverse().join("");

    if(number === numRev){
        result.innerHTML = userInput + " is a palindrome";
    } else{
        result.innerHTML = userInput + " is not a palindrome"; 
    }

}