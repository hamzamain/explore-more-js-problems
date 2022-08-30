const str = 'hello world';
const isBdIndipendent = true;
const age = 21;

const fatherName = 'Shofiqul Islam';
let money = 5000;
money = 5500;
console.log(money);

const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
console.log(sum, sub, mult, div);

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

console.log(num1 >= num2 && num1 < num2);
console.log(num1 >= num2 || num1 > num2);

if(typeof num1 === 'number'){
    console.log('hello world');
}
else{
    console.log('bye bye world');
}

let i = 7;
while(i < 20){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array.length);
console.log(array[3] = 11);
console.log(array);
array.pop();
array.push(10, 11);

for(let i = 0; i < array.length; i++){
    let element = array[i];
    console.log(element);
}

const array2 = [20, 20, 85, 99, 45, 87, 210, 77, 99];
for(let i = 0; i < array2.length; i++){
    let element = array2[i];
    if(element >= 80){
        console.log(element);
    }
};
 
function multiply(){
    const number1 = 5;
    const number2 = 15;
    const number3 = 10;
    const multi = number1 * number2 * number3;
    return multi;
}

let student = {name: 'habul', id: 121, roll: 20};
student.id = 112;
console.log(student);