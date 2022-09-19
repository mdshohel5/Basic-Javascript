function isEven(number){
    if(number % 2 == 0){
        // console.log("This is Even Number")
        return true;
    }
    else{
        // console.log("This is Odd Number");
        return false;
    }
}
const firstNumber = isEven(33);
const secondNumber = isEven(22);
console.log(firstNumber);
console.log(secondNumber);