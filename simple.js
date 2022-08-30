function sum(i){
    if(i == 5){
        return 5;
    }
    return i + sum(i + 1);
}
const result = sum (1);
console.log(result);