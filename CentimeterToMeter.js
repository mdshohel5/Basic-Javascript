// Centimeter to Meter

function centimeterToMeter(meters){
    const meter = meters / 100;
    return meter;

}

const myCentimeter = 500;
const meters = centimeterToMeter(myCentimeter)
console.log('Meter : ', meters);