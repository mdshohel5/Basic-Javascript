// Find out the largest name in the array

function bestFriend(names){
    let largeName = names[0];
    for(let i = 0; i < names.length; i++){
        const index = i;
        const name = names[index];
        if(name > largeName){
           largeName = name;
        }
        // console.log(index, name);
        
    }
   return largeName;
}

const myBestFriendsList = ['Md. Shohel Mia', 'Md. juwel Mia', 'Md. Shahin Mia', 'Sourov', 'Md. Shala uddin mia', 'Md. Naeem Mia', 'Md. Kajol'];
const myLargestName = bestFriend(myBestFriendsList)
console.log('Large Name : ', myLargestName);
