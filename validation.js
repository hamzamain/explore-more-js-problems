function add(num1 , num2){
    if(num1 !== 'number' || num2 !== 'number'){
        return 'plese enter a number';
    }
    return num1 + num2;
}
const result = add(false , '15');
// console.log(result);
function multiply(num1, num2){
    console.log(num1, num2);
    return num1 * num2;
}
const output = multiply(12*15);
console.log(output);