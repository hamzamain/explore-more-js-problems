/* function sum(i){
    console.log(i);
    if(i == 1){
        return 1;
    }
    return i + sum(i-1);
}
// console.log(sum(5))
function fectorial(i){
    if(i == 1){
        return 1;
    }
    return i * fectorial(i - 1);
}
console.log(fectorial(7))
 */
/* const student = {
    name: ['kamal', 'jamal', 'haman', 'ramal'],
    roll: {
        first: 0,
        second: 1,
        third: 2,
        last: 3
    },
    act: function sum(number){
        if(number == 1){
            return 1;
        }
        number + sum(number - 1);
        // console.log(number);
        return number;
    }
}
const result = student.act(5);
console.log(result); */


function compare(a, b) {
 if (a == b) {
  return true;
 } else {
  return false;
 }
}
const result = compare(15, "1   5");
console.log(result);