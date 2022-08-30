const shopingCart = [
    {name:'shoe', price: 1200},
    {name:'shirt', price: 2200},
    {name:'pant', price: 3700}, 
    {name:'belt', price: 600}
]
// console.log(shopingCart.entries());
let valuesOf =Array.isArray(shopingCart);
console.log(Object.keys(shopingCart)
);

function totalCalculater(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        let index = i;
        let element = array[index].price;
        total += element;
        // console.log(element);
    }
    return total;
}
let totalPrice = totalCalculater(shopingCart);
// console.log('total price of shoping cart: ', totalPrice);