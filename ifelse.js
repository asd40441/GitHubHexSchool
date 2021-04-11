let sex = "female";
let fatScore = 70;
const maleFat = 90;
const femaleFat = 80;
const fat = "體型過胖";
const thin = "體型正常"

if (sex == "male"){
    if(fatScore >= 90){
        console.log(fat)
    }else{
        console.log(thin)
    }
}else if(sex == "female"){
    if(fatScore >= 80){
        console.log(fat)
    }else{
        console.log(thin)
    }
}else{
    console.log("What the Fuck?")
}