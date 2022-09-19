// Minimum Number

const num1 = 1000;
const num2 = 200;

if(num1<num2){
    console.log('First Number is Minimum Number');
}
else{
    console.log('Second Number is Minimum Number');
}

const firstNumber = 1000;
const secondNumber = 40000;
const thirdNumber = 80000;

if(firstNumber < secondNumber && firstNumber < thirdNumber){
    console.log('First Number is Minimum Number');
}
else if(secondNumber < thirdNumber && secondNumber < firstNumber){
    console.log('Second Number is Minimum Number');
}
else{
    console.log('Third Number is Minimum Number');
}