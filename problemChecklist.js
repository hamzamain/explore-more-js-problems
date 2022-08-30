
//feet to inch
function feetToInch(number){
    //1 feet == 12 inch;
    const feet = 12;
    const inch = number * feet;
    return inch;
}
console.log(feetToInch(5.8));

//centimiter to miter
function centimeterToMeter(number){
    // 1 miter == 100 centimiter;
    const cm = 100;
    const convToMiter = number / cm;
    return convToMiter;
}
console.log(centimeterToMeter(25), 'miter');


function paperRequarment(book1, book2, book3){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const therdBookPage = 300;
    const allBook1TotalPage = book1 * firstBookPage;
    const allBook2TotalPage = book2 * secondBookPage;
    const allTherdBookTotalPage = book3 * therdBookPage;
    const totalPageRequarment = allBook1TotalPage + allBook2TotalPage + allTherdBookTotalPage;
    return totalPageRequarment;
}
const myEntrys = paperRequarment(5, 5, 1);
console.log(myEntrys);

function bestFriends(names){
    let bigarName ='';
    for(let i = 0; i <names.length; i++){
        let name = names[i];
        if(bigarName.length < name.length){
            bigarName = name;
        }
        console.log(name, name.length);
    }
    return bigarName;
}
const names = ['mukter hossen', 'mohammad shorif', 'mehedi hasan haowladar', 'jahidul islam', 'emon das', 'partho nath', ]
const bigarBigarName = bestFriends(names);
console.log(bigarBigarName);

function positivNumber(numbers){
   const positive = [];
   for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if(num >= 0){
        positive.push(num);
    }
    else{
        break;
    }
   }
   return positive;
}
const arrayOfNumber = [12, 25, 0, 1,  52, 63, -9, 1, 0, 00, 1200]
const output = positivNumber(arrayOfNumber);
console.log(output);