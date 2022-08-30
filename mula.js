function mulaPrice(mulaQuantityes){
    const first300Rate = 50;
    const second300Rate = 30;
    const restRate = 15;
    if(mulaQuantityes <= 300){
        const price = first300Rate * mulaQuantityes;
        return price;
    }
    else if(mulaQuantityes <= 600){
        const frist300Price = first300Rate * 300;
        const restmula = mulaQuantityes - 300;
        const restPrice = restmula  * second300Rate;
        const price = frist300Price + restPrice;
        return price;
    }
    else{
        const frist300Price = first300Rate * 300;
        const second300Price = second300Rate * 300;
        const restmula = mulaQuantityes - 600;
        const restPrice = restmula * restRate;
        const price = frist300Price + second300Price + restPrice;
        return price;
    }
}
const mulaPriceIs = mulaPrice(2);
console.log(mulaPriceIs); 