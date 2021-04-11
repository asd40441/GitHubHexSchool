/***   作業 1 填答區開始   **/
// 解答是 
//true
//true
//true 第 3 題是 true 哦，因 9>1**

//false
//true

//false
//true
//false
/***   作業 1 填答區結束   **/



/***   作業 2 填答區開始   **/
// 解答是 
//false
//true
//true

//true i+j == 99 是 true 哦，因為 == 不會檢查型別，只要內容相同就是 true**
//true
//false

//true 因為字串跟數字相乘會強制轉成數字形別做計算，k跟l相乘等於10大於5，所以為true
/***   作業 2 填答區結束   **/



/***   作業 3 填答區開始   **/
// 解答是 
// m 為：3
// n 為：15
// 原因是第一個判斷2>1為true，所以執行裡面的程式，m重新賦予3。
//第二個判斷直接為true，所以執行n+=10，n重新賦予15

//兩題建議都強調「重新賦予」哦，比如：因此 m 會被重新賦值為 3**
/***   作業 3 填答區結束   **/



/***   作業 4 填答區開始   **/
// 請將作業四截圖程式碼都寫在這，並刻意練習
let childHeight = 133;
let restaurantChildHeight = 120;
let bill = 600;
let childPrice = 300;
let adultPrice = 600;
let adultNum = 2;

if (childHeight <= restaurantChildHeight){
    bill = childPrice + adultPrice;
}else{
    bill = adultPrice*adultNum;
}

console.log(`他們總共支付了${bill}元`); //1200元


//**根據題目，小明是小孩哦，所以這題不用考慮小明若為成人的情況，而題目給的 bill = 600 是已經有含媽媽的錢哩，所以要使用 += 的賦值方式。
//這邊提供完整解答給你參考
let childHeight = 133; //小明的身高
let restaurantChildHeight = 120; //餐廳訂的身高門檻，若超過則要收費
let bill = 600; //已包含媽媽的 600 元
if (childHeight > restaurantChildHeight) {
 bill += 300;
}
console.log(`他們總共支付了 ${bill} 元`);
/***   作業 4 填答區結束   **/



/***   作業 5 填答區開始   **/
// 請將作業五截圖程式碼都寫過來，並附上您的答案
let badge = 3;
let buyNum = 5;
let childBuyNum = 4;
let goodBadgeNum = 3;
let badBadgeNum = 1;

if (childBuyNum == buyNum){
    badge += goodBadgeNum;
}else{
    badge += badBadgeNum;
}

console.log(`小華一共得了${badge}個勳章`); //4個
/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
// 範例回覆：解答是
// true
// false
// true

//是否有折扣資格
// true
// 原因是因為||是or，只要有一邊為true就判斷為true，hamNum>10為true，所以結果為true
/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/
// 請將作業七截圖程式碼都寫過來，並附上您的答案
let weight = 70;
if(weight >= 40 && weight <60){
    console.log(`過輕`);
}else if(weight >= 60 && weight <80){
    console.log(`正常`);
}else if(weight >= 80){
    console.log(`過重`);
} //正常
/***   作業 7 填答區結束   **/



/***   作業 8 填答區開始   **/
// 請將作業八截圖程式碼都寫過來，並附上您的答案
let giftNum = 200;
let giftPriceRule = 399;
let BobPrice = 500;
let BobIsVip = false;

if(BobPrice >= giftPriceRule || BobIsVip){ //BobIsVip 可以直接當作條件，後面不需加上 == true。
    console.log(`客戶您好，您有符合贈品資格`)
    giftNum--;
}else{
    console.log(`客戶您好，您沒有符合贈品資格`)
}

console.log(`贈品還剩下${giftNum}個`); //199個
/***   作業 8 填答區結束   **/



/***   作業 9 填答區開始   **/
// 請將作業九截圖程式碼都寫過來，並附上您的答案
let mingMoney = 870000;
let mingBill = 5000;
const firstTax = 0.3;
const secondTax = 0.5;
const thirdTax = 0.8;

if(mingMoney <= 540000){
    mingBill += mingMoney*firstTax;
}else if(mingMoney > 540000 && mingMoney <= 1000000){
    mingBill += mingMoney*secondTax;
}else if(mingMoney >1000000){
    mingBill += mingMoney*thirdTax;
}

console.log(`小明總共需支付${mingBill}帳單`); //440000帳單
/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/
// 需附上 Whimsical 連結（記得開啟權限）
let playerA = "剪刀";
let playerB = "石頭";
if(playerA == playerB){
    console.log("平手");
}else if((playerA == "剪刀" && playerB == "布") || (playerA == "石頭" && playerB == "剪刀") || (playerA == "布" && playerB == "石頭")){
    console.log("playerA獲勝")
}else if((playerA == "剪刀" && playerB == "石頭") || (playerA == "石頭" && playerB == "布") || (playerA == "布" && playerB == "剪刀")){
    console.log("playerB獲勝")
} //playerB獲勝
//https://whimsical.com/Qrh7jS1cdPCzbs8drWFuXd
/***   作業 10 填答區開始   **/