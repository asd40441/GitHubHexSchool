/***   作業 1 填答區開始   **/
let obj = {
  "myName": "Tom",
  "age": 18,
  "pets": ["John", "Mike"],
  "isWakeUp": false
};
/***   作業 1 填答區結束   **/



/***   作業 2 填答區開始   **/
let colors = ["red", "black", "yellow"];
colors.push("black");
console.log(colors.length); //4
/***   作業 2 填答區結束   **/



/***   作業 3 填答區開始   **/
let motherStatus = [{
  name: "mary",
  age: 31,
  sons: ["Tom", "Bob"]
}]
motherStatus[0].age += 1;
motherStatus[0].sons.push("John");
console.log(motherStatus);
/***   作業 3 填答區結束   **/



/***   作業 4 填答區開始   **/
//洧杰老師：「此題目請先不做，可略過後直接提交」
/***   作業 4 填答區結束   **/



/***   作業 5 填答區開始   **/
let family = {
  motherName: "Jane",
  fatherName: "Bill",
  daughterName: "Rosa",
  sonName: "Howard",
  dogsName: ["Bobo", "Koko"]
}
/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
// 這題要於物件內新增建案名稱和地區的屬性，例如：**
// const hexVilla = {
//  city:'Kaohsiung',
//  title: '六角大別墅',
//  items: [{}, {},],
// }**

const hexVilla = {
  city: 'Kaohsiung',
  title: '六角大別墅',
  items: [{
      price: 280000000,
      size: 900,
      pool: false,
      basement: true,
      stairHeight: 5,
      bathroomNum: 3,
      housekeeper: false,
      sale: true
    },
    {
      price: 320000000,
      size: 1200,
      pool: true,
      basement: true,
      stairHeight: 7,
      bathroomNum: 4,
      housekeeper: true,
      sale: false
    },
  ],
}
/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/
let roomDetail = {
  "success": true,
  "items": [{
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {
      "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      "normalDayPrice": 1899,
      "holidayPrice": 2000,
      "name": "Deluxe Single Room"
    },
    {
      "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 2460,
      "holidayPrice": 2500,
      "name": "Double Room"
    },
    {
      "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 2888,
      "holidayPrice": 3000,
      "name": "Deluxe Double Room"
    },
    {
      "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 3350,
      "holidayPrice": 3500,
      "name": "Twin Room"
    },
    {
      "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 3899,
      "holidayPrice": 4000,
      "name": "Deluxe Twin Room"
    }
  ]
}
let price = roomDetail.items[0].normalDayPrice + roomDetail.items[1].normalDayPrice + roomDetail.items[2].normalDayPrice + roomDetail.items[3].normalDayPrice + roomDetail.items[4].normalDayPrice + roomDetail.items[5].normalDayPrice;
/***   作業 7 填答區結束   **/



/***   作業 8 填答區開始   **/
// 這題不需要寫 true == (salaryData.staff[1]...) 哩。 **
// 加了不算錯，但是不太需要加。**
// 因為 true == true 判斷出來還是 true ，會變成多餘的判斷。**
let salaryData = {
  company: 'circle center',
  bossName: 'casper',
  staff: [{
      name: "Bob",
      salary: 32000
    },
    {
      name: "Jack",
      salary: 28000
    }
  ]
}
if (salaryData.staff[0].salary < 40000) {
  salaryData.staff[0].salary += 8000;
}

if (salaryData.staff[1].salary < 40000) {
  salaryData.staff[1].salary += 12000;
}
/***   作業 8 填答區結束   **/



/***   作業 9 填答區開始   **/
// 物件裡面有四個變數 這句描述有錯哩。**
// 在物件中稱作 屬性 ( key ) 唷，所以這邊是 「 物件有四個屬性 」。**

// 1. 電動機車充電站名稱及充電站地址 https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json
// 最外層是一個陣列，陣列裡面有很多物件，每個物件有四個屬性，Kind值為"公共充電站"、Charge值為"免費"、Location為地點名稱、Address為地址。
/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/

/***   作業 10 填答區結束   **/