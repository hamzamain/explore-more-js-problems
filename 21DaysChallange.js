const toDo = ['eat', 'sleep', 'think', 'clean mind', 'code', 'exercise', 'pray',];
function days(toDo){
    for(const Do of toDo){
        console.log(Do);
    }
}
// const result = days(toDo);
// console.log(result);
function repetedDays(number){
    for(let i = 1; i <= number; i++ ){
        console.log(i);
        days(toDo);
    }
}
repetedDays(25)