let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let checkButton = document.getElementById("checkButton");
let restartButton = document.getElementById("restartButton");
let gameResult = document.getElementById("gameResult");
let errMessage = document.getElementById("errMessage");

let num1 = Math.ceil(Math.random()*60)
let num2 = Math.ceil(Math.random()*60)

firstNumber.textContent = num1;
secondNumber.textContent = num2;
let total = num1 + num2;
// console.log(userInput.value);

checkButton.addEventListener("click", function(){

    if (parseInt(userInput.value) === total){
        // console.log(userInput.value)
        gameResult.textContent = "Congratulations! You Got It Right!";
        gameResult.style.backgroundColor = "Green";
        errMessage.textContent = "";
    }else if (userInput.value === ""){
        errMessage.textContent = "Required*"
        errMessage.style.color = "red";
        errMessage.style.fontSize = "12px";
    }
    else{
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "red"; 
        errMessage.textContent = "";
    }
});

restartButton.addEventListener("click", function(){
    num1 = Math.ceil(Math.random()*60)
    num2 = Math.ceil(Math.random()*60)
    firstNumber.textContent = num1;
    secondNumber.textContent = num2;
    total = num1 + num2;
    gameResult.textContent = "";
    firstNumber.textContent = num1;
    secondNumber.textContent = num2;
    userInput.value = "";
    errMessage.textContent = "";

});