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

checkButton.addEventListener("click", function(){

    if (parseInt(userInput.value) === total){
        gameResult.textContent = "Congratulations! You Got It Right!";
        gameResult.style.color = "Green";
        gameResult.style.fontWeight = "bold"
        errMessage.textContent = "";
    }else if (userInput.value === ""){
        errMessage.textContent = "Required*"
        errMessage.style.color = "red";
        errMessage.style.fontSize = "12px";
    }
    else{
        gameResult.textContent = "Please Try Again!";
        gameResult.style.color = "red"; 
        gameResult.style.fontWeight = "bold"
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