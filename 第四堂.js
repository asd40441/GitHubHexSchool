let weather = {
    Country: "高雄",
    "PM2.5": 35,
    isSunny: false,
    rainingRegion: ['鼓山', '鹽埕', '旗津'],
    rainFall: {
        鼓山: 400,
        鹽埕: 300,
    }
} 

// 取得 Country 的值
console.log(weather.Country); //方法一
console.log(weather["Country"]); //方法二

// 取得 "PM2.5" 的值
console.log(weather["PM2.5"]);

// 取得 isSunny 的值
console.log(weather.isSunny); //方法一
console.log(weather['isSunny']); //方法二

// 取得 rainingRegion 陣列的第一個值 '鼓山'
console.log(weather.rainingRegion[0]); 

// 在 rainFall 新增一個屬性名為「旗津」、設定值為 200，並輸出答案
weather.rainFall.旗津 = 200;    //方法一
console.log(weather.rainFall.旗津);

weather["rainFall"]["旗金"] = 200;      //方法二
console.log(weather["rainFall"]["旗金"]);