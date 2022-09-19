// function factorial(number){
//     let result = 1;
//     for(let i = number ; i>=1; i--){
//         result = result * i;
//         // console.log(i);
//     }
//     return result;
// }
// const fact = factorial(5);
// console.log('Factorial of 5 : ',fact);

function myFact(number){
    let fact = 1;
    for(let i = 1; i<=number; i++){
        fact  = fact * i;
        console.log(i, fact);
    }
}
myFact(5);