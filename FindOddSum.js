// //5,7,8,10,45,30

// function getSumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         // const index = i;
//         // console.log(index);
//         const element = numbers[i];
//         sum = sum + element
//         console.log(element, sum);
       
//     }
//     return sum;

// }

// const myArray = [20,30,49,59, 28,53,224,59,90];
// getSumOfAnArray(myArray)



function findOddNumberOfAnArray(num){
    // console.log(num);
    let myOddValues = []
    for(let i = 0; i<num.length; i++){
        let index = i;
        const element = num[index];
        if(num % 2 !== 0){
            console.log(index,element);
            myOddValues.push(element)
        }
       
    }
  return myOddValues;
} 
const arr = [22,32,33,54,55,89,67,76, 887];
const oddNumber = findOddNumberOfAnArray(arr);