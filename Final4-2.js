// 第二題
// 鍛鍊：拆解任務流程與設定變數
/*
「幫媽媽跑腿，紀錄花了多少錢，與跑腿了幾次」
小明的媽媽請她跑腿，因為小明一天規定自己只能出門三次，所以和媽媽說最多跑三次腿
小明媽給了小明 300 元，請他去買兩罐牛奶跟兩份吐司，小明到超商後看到牛奶 30 元吐司 20 元
當她到櫃台結帳時，櫃台告訴他剛好今天全部品項都打 5 折 !
買回家後，媽媽發現小明的東西都有買齊，就讓小明去玩耍了。
*/ // 請試著拆解流程，並透過註解告知您的解題流程

//可以出門剩餘次數
let outLeft = 3;
//錢包金額
let wallet = 300;
//牛奶價格
let milkPrice = 30;
//吐司價格
let toastPrice = 20;
//牛奶數量
let milkNum = 2;
//吐司數量
let toastNum = 2;
//總共價格
let allPrice;
//出門購買
outLeft--; //跑腿次數減1
allPrice = (milkPrice * milkNum + toastPrice * toastPrice) * 0.5; //價格打五折
wallet = wallet - allPrice; //扣款
//剩下金額
console.log(`剩餘金額： ${wallet} `);
//跑腿剩餘次數
console.log(`剩餘跑腿次數：${outLeft}`);