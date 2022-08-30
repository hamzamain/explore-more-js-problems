/* 
1.chier --> 3 cft
2.table --> 10 cft
3.bed --> 50 cft

constant: per item wood requarments
variable: item quantitys

*/
function woodCalculator(chierQuantity, tableQuantitys, bedQuantitys){
    const perChierWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chierTotalWood = chierQuantity * perChierWood;
    const tableTotalWood = tableQuantitys * perTableWood;
    const bedTotalWood = bedQuantitys * perBedWood;

    const totalWoodRequarmints = chierTotalWood + tableTotalWood + bedTotalWood ;
    return totalWoodRequarmints;
}
 const totalWood = woodCalculator(2, 2, 2);
 console.log(totalWood);