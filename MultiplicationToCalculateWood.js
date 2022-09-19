// Multiplication to calculator

function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 5;
    const perTableWood = 10;
    const perBedWood = 30;
    // console.log(perChairWood, perTableWood, perBedWood)
    
    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    // console.log('Total Wood : ', totalWood);

    return totalWood;
}

const totalWood = woodCalculation(8,53,55)
console.log('Total Wood : ', totalWood);