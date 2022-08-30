const shopingCart = [
    {name:'shoe', price: 1200, quantityes:2},
    {name:'shirt', price: 2200, quantityes:5},
    {name:'belt', price: 600, quantityes:3},
    {name:'pant', price: 3700, quantityes:2},
]
// console.log(shopingCart.entries());
// let valuesOf =Array.isArray(shopingCart);
// console.log(Object.keys(shopingCart)
// );

function totalCalculater(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[index];
        let elementCost = element.price * element.quantityes;
        total += elementCost;
        // console.log(element);
    }
    return total;
}
let totalPrice = totalCalculater(shopingCart);
console.log('total price of shoping cart: ', totalPrice);