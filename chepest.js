const phones = [
    {name: 'Samsung', camera: 108, storage: '32gb', price: 42000, color: 'silver'},
    {name: 'walton', camera: 20, storage: '32gb', price: 15000, color: 'silver'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 120000, color: 'silver'},
    {name: 'xaomi', camera: 64, storage: '32gb', price: 54000, color: 'silver'},
    {name: 'oppo', camera: 68, storage: '32gb', price: 21000, color: 'silver'},
    {name: 'nokia', camera: 40, storage: '32gb', price: 12000, color: 'silver'},
    {name: 'HTC', camera: 60, storage: '32gb', price: 40000, color: 'silver'},
    {name: 'realme', camera: 50, storage: '32gb', price: 24000, color: 'silver'},
    {name: 'penasoni', camera: 200, storage: '32gb', price: 88000, color: 'silver'}
];
function cheapestPhone(phones){
    let cheapest = phones [0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
function highestPhone(phones){
    let highest = phones[0];
    for(let i = 0; i < phones.length; i++){
        var Phone = phones[i];
        if(Phone.camera > highest.camera){
            highest = Phone;
        }
    }
    return highest;
}
const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone);
const highPhone = highestPhone(phones);
console.log(highPhone);