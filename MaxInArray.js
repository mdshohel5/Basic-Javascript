// Find out maximum value in the array


function maxValues(number){
    // console.log(number)
    let largest = number[0]
    for(let i = 0; i < number.length; i++){
        const index = i;
        const elements = number[index];
        // console.log(index, elements);

        if(elements > largest){
            largest = elements;
        }
    }

  return largest;

}

const arr = [123,433,545,354,775,435,678,446];
const largeNumber = maxValues(arr)
console.log(largeNumber);