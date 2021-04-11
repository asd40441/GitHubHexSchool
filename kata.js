const bmiStatesData = {
    "overThin": {
        "state": "過輕",
        "color": "藍色"
    },
    "normal": {
        "state": "正常",
        "color": "紅色"
    },
    "overWeight": {
        "state": "過重",
        "color": "澄色"
    },
    "mildFat": {
        "state": "輕度肥胖",
        "color": "黃色"
    },
    "moderateFat": {
        "state": "中度肥胖",
        "color": "黑色"
    },
    "severeFat": {
        "state": "重度肥胖",
        "color": "綠色"
    },
}
//*** Start **//
let bmiHistoryData = [];
function printBmi(height,weight) {
    let bmi = (weight/((height/100)**2)).toFixed(2);
    let mode = '';
    if (bmi < 18.5){
        mode = 'overThin';
    }else if(bmi >= 18.5 && bmi < 24){
        mode = 'normal';
    }else if(bmi >= 24 && bmi < 27){
        mode = 'overWeight';
    }else if(bmi >= 27 && bmi < 30){
        mode = 'mildFat';
    }else if(bmi >= 30 && bmi < 35){
        mode = 'moderateFat';
    }else if(bmi >= 35){
        mode = 'severeFat';
    }else{
        return console.log('您的數值輸入錯誤，請重新輸入');
    }
    bmiStatesText(mode);
    bmiHistoryData.push({bmi,mode});
}

function bmiStatesText(mode){
    let text = mode;
    let data = bmiStatesData[mode];
    console.log(`您的體重${data.state}，健康指數為${data.color}`);
}

function showHistoryData(){
    let len = bmiHistoryData.length;
    let text = bmiHistoryData[len-1];
    let data = bmiStatesData[text.mode];

    console.log(`您總共計算 ${len} 次 BMI 紀錄，最後一次 BMI 指數為 ${text.bmi}，體重${data.state}！健康指數為${data.color}！`);
}


printBmi(178, 20)  
printBmi(178, 70)  
printBmi(178, 85) 
// printBmi(178, 90) 
// printBmi(178, 110) 
// printBmi(178, 130) 
// printBmi("身高","體重")
showHistoryData()  