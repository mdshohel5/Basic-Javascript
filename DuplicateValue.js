// How to remove duplicate value in the array

function duplicateValue(names){
    let unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)===false){
            unique.push(name)
        }

        // console.log(name);
    }
    return unique;
}
const names = ['shohel', 'juwel', 'rubel', 'shahin', 'halim', 'shohel', 'kamal', 'rubel', 'juwel', 'arafat'];
const uniqueName = duplicateValue(names)
console.log(uniqueName)