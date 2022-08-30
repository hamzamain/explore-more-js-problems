const names = ['abul', 'babul', 'kabul', 'cabul', 'babul', 'ebul', 'abul', 'kabul', 'dabul', 'rabul', 'cabul', 'habul', 'abul','rabul', 'ebul', 'habul'];
function removeDuplicate(names){
    const cleanList = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        //cleanList.includes(name) === false
        if(cleanList.includes(name) ){
            console.log(name , 'is Exist in the array');
        }
        else{
            cleanList.push(name);
        }
    }
    return cleanList;
}
let fainalList = removeDuplicate(names);
console.log(fainalList);