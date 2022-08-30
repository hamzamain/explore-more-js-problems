/* const numbers = [3, 43, 6, 77, 65, 33, 3];
// for(let i = 0; i < number.length; i++){
//     console.log(number[i])
// }
for(const number of numbers){
    console.log(number);
} */
const products = [
    {id:1, name:'Lenovo Yoga', price: 19000},
    {id:2, name:'iphone', price: 19000},
    {id:3, name:'Mack book air LaptoP', price: 19000},
    {id:4, name:'Samsung note 10 phone', price: 19000},
    {id:5, name:'Dell Inspiration laptop', price: 19000},
    {id:6, name:'Nokia old age phone', price: 19000},
    {id:7, name:'ONE phone', price: 19000},
    {id:8, name:'Xiomi note 10 PhOne', price: 19000},
    {id:9, name:'samsung note Laptop', price: 19000},
]

// for(const product of products){
//     console.log(product);
// }
function matchProducts(products, search){
    let foundedItem = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            foundedItem.push(product)
        }
    }
    return foundedItem;
}
const result = matchProducts(products, 'laptop');
console.log(result);