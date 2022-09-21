// Problem -> 1:
// Convert Radian To Degree

function radianToDegree(radianValues){                  // radianToDegree is a function name
    const degree = radianValues * (180.0 / 3.1416);
    return degree;
}

const radian = 500;                                // store value in radian variable
const getDegreeValues = radianToDegree(radian);    // function call
console.log('Degree Values : ', getDegreeValues);  //finally we can get output.


// Problem -> 2:
// Check whether the given file name is a  javaScript file or not
function isJavaScriptFile(str){
    if(str.match(/(\w*).js$/) == null){
        console.log('false');
        console.log('Something is wrong!')
        return false;
    }
    else {
        console.log('true');
        return true;
    }
}
     
isJavaScriptFile('file1.xml');
isJavaScriptFile('file2.js');



// Problem -> 3:
 // Calculate total oil prices   

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    
    const perLiterDiesel = 114; 
    const perLiterPetrol = 130;
    const perLiterOctane = 135;

    const diesel = perLiterDiesel * dieselQuantity;
    const petrol = perLiterPetrol * petrolQuantity;
    const octane = perLiterOctane * octaneQuantity;

    const total = diesel + petrol + octane;
    return total;   
    
}

const totalOilPrice = oilPrice(10,4,5);
console.log(totalOilPrice);

// problem -> 4

function isBestFriend(obj1, obj2){
    if(obj1.name===obj2.friend || obj1.friend===obj2.name){
        return true;
    }
    else{
        return false;
    }

}

const obj1 = {name:'shohel', friend:'basir'};
const obj2 = {name:'rubel', friend:'shohel'}
const myFriends = isBestFriend(obj1, obj2);
console.log(myFriends);



// Problem -> 5:

function publicBusFare(peoples){
    // const reservedBus = 50;
    // const microBus = 11;
    if(peoples >= 50){
        peoples = peoples - 50;
        publicBusFare(peoples);
    }
    else if(peoples >= 11){
        peoples = peoples - 11;
        publicBusFare(peoples);
    }
    else{
        people = peoples * 250;  // people ne
    }

   return people;
    
}

const ticketPrice = publicBusFare(2)
console.log(ticketPrice);

