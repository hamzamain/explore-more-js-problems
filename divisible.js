function foobar(numbers){
    const outPut = [];
    for(let i = 1; i < numbers; i++){
        let number = i;
        if(number % 3 === 0 && number % 5 ===0){
            console.log('foobar');
        }
        else if(number % 3 === 0){
            console.log('foo')
        }
        else if(number % 5 === 0){
            console.log('bar')
        }
        else{
            console.log(number);
        }
    }
    return outPut;
}
let numbers = foobar(100);
console.log(numbers);