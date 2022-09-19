// Array is list of elements

const arr = [1,2,3,4,5,6,7,8,9,10]
const arrayLength = arr.length;
console.log(arrayLength);

const fruitsName  = ['Apples', 'Bananas', 'Oranges', 'Strawberries']
console.log(fruitsName);

// add fruits
fruitsName.push('Meats')
console.log(fruitsName);

// remove fruits
fruitsName.pop()
console.log(fruitsName);

// first value add 

fruitsName.unshift('Mango');
console.log(fruitsName);

let friendList = ['Md. Shohel Mia', 'Md. Juwel Mia', 'Md. Rubel Mia', 'Md. Shahin Mia', 'Md. Halim'];
for (let i = 0; i<friendList.length; i++){
    let name = friendList[i];
    console.log(name);
}

let myFamilyMember = ['Md. Aminul Houqe', 'Md. Rubel Mia', 'Md. Juwel Mia', 'Md. Shohel Mia'];
let familyMemberIndex = myFamilyMember[2]
myFamilyMember[3]= 'Md. Robin Mia';
console.log(familyMemberIndex);
console.log(myFamilyMember);


// array string

const someName = ['Shahin', 'Halim', 'basir', 'josim'];
console.log(someName)
const nameString = someName.toString();
console.log(nameString)


//Sort the array in ascending order

const playerList = ['Toukir', 'Al-Amin', 'Shahin', 'Robel', 'Hakim', 'Rasel']
playerList.sort();
console.log(playerList);


// reverse the array in decending order
playerList.reverse()
console.log(playerList);