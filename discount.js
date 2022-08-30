/* function ticketPreice(number){
    let totalPrice = 0;
    for(var i = 1; i <= number; i++){
        totalPrice = totalPrice + 100;
        // console.log(totalPrice);
        if(i === 101){
            break;
        }
    }
    for(var i = 101; i <= number; i++){
        totalPrice = totalPrice + 90;
        if(i === 201){
            break;
        }
    }
    for( var i = 201; i <= number; i++){
        totalPrice = totalPrice + 70;
    }
    return totalPrice;
}
const myNumber = ticketPreice(300);
console.log(myNumber); */



function ticketPreice(ticketQuantitys){
    const first100Per = 100;
    const second100Per = 90;
    const restPer = 70;
    if(ticketQuantitys <= 100){
        const price = ticketQuantitys * first100Per;
        return price;
    }
    else if(ticketQuantitys <= 200){
        const first100Price = first100Per * 100;
        const restTicket = ticketQuantitys - 100;
        const restTicketPrice = restTicket * second100Per;
        const price = first100Price + restTicketPrice;
        return price;
    }
    else{
        const first100Price = first100Per * 100;
        const second100Price = second100Per * 100;
        const restTicket = ticketQuantitys - 200;
        const restTicketPrice = restTicket * restPer;
        const price = first100Price + second100Price + restTicketPrice;
        return price;
    }
}
const price = ticketPreice(300);
console.log(price);