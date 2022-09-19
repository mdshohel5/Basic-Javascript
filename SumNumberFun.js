// 1 + 2 + 3 + 4 + 5 + 6 + 7 = 29
// 1 + 2 + 3 + 10 + 15 + 21 + 28
function sumNumber(number){
    let sum = 1;
    for(let i = 0; i<number; i++){
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}
const fewNumber = sumNumber(7)
console.log(fewNumber);