/* problem: 1  */
function radianToDegree(radian){
    if(typeof radian !== 'number'){
        return 'invalid input. Plese enter a number.'
    }
    const degreeforPerRadian = 57.2958;
    const inDegree = radian * degreeforPerRadian;
    const degree = parseFloat(inDegree.toFixed(2))
    return degree;
}


/* problem: 2 */
function isJavaScriptFile(String){
    if(typeof String !== 'string'){
        return 'invalid input. Plese inter a String'
    }
    if(String.endsWith('.js') === true){
        return true;
    }
    else{
        return false;
    }
}


/* problem: 3 */
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){      if(typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number'){
    return 'invalid input. plese enter 3 number as input'
}
    const dieselPerLiter = 114;
    const petrolPerLiter = 130;
    const octanePerLiter = 135;
    const totalDieselPrice = dieselPerLiter * dieselQuantity;
    const totalPetrolPrice = petrolPerLiter * petrolQuantity;
    const totalOctanePrice = octanePerLiter * octaneQuantity;
    const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalOilPrice;
}


/* problem: 4 */
function publicBusFare(peopleCount){
    if(typeof peopleCount !== 'number'){
        return 'invalid input. Plese enter a Number'
    }
    const busCarry = 50;
    const microBusCarry = 11;
    const publicBusTicketPrice = 250;
    if(peopleCount >= 50){
        const outOfBus = peopleCount % busCarry;
        if(outOfBus >= 11){
        const outOfMicroBus = outOfBus % microBusCarry;
        const publicBusTicketFare = outOfMicroBus * publicBusTicketPrice;
        return publicBusTicketFare;
        }
        else{
            const publicBusTicketFare = outOfBus * publicBusTicketPrice;
            return publicBusTicketFare;
        }
        
    }
    else if(peopleCount >= 11){
        const outOfMicroBus = peopleCount % microBusCarry;
        const publicBusTicketFare = outOfMicroBus * publicBusTicketPrice;
        return publicBusTicketFare;
    }
    else{
        const publicBusTicketFare = peopleCount * publicBusTicketPrice;
        return publicBusTicketFare;
    }
}


/* problem: 5 */
function isBestFriend(student1, student2){
    if(typeof student1.name !== typeof student2.friend || typeof student1.friend !== typeof student2.name){
        return 'invalid input. Plese enter same typeof input to the Name and Friend propertys'
    }
    if(student1.name === student2.friend && student1.friend === student2.name){
        return true;
    }
    else{
        return false;
    }
}