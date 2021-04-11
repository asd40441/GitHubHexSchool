let militaryData = {
    time: 2021,
    region: "高雄",
    soldierName: ["Tom", "Nick", "John"]
 }
 let mingStatus = {
     name: "小明",
     residence: "高雄",
     flatFoot: false,
     BMI: 22,
     height: 178
 }
 if(mingStatus.flatFoot || mingStatus.BMI >= 35){
     console.log("小明不用當兵");
 }else{
     // 將小明填入國軍名單
     console.log("小明光榮入伍");
     //請輸出 militaryData 的 soldierName 陣列
     militaryData.soldierName.push(mingStatus.name);
     console.log(`名單: ${militaryData.soldierName}`);
}