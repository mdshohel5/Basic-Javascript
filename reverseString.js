//Reverse String

function reverseString(someText){
    // for(let i=0; i<someText.length; i++){
    //     const elements = someText[i];
    //     console.log(elements)
    // }
    let reversed = ' ';
    for(let i = someText.length; i>=0; i--){
        const elements = someText[i];
        reversed = reversed + elements;
        console.log(elements, reversed)
        
    }
}

const myString = 'I am a good boy';
const reverse = reverseString(myString)
console.log(reverse);