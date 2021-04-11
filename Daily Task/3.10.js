// 取得 foodName 為 ‘鍋燒意麵’ 或 ‘炒麵’ 的物件，並將新陣列指派給 target1
// 取得索引值為 2、索引值為 3 的物件，並將新陣列指派給 target2
let food = [{
        foodName: '鍋燒意麵',
        price: 70
    },
    {
        foodName: '炒麵',
        price: 65
    },
    {
        foodName: '蘿蔔泥',
        price: 20
    },
    {
        foodName: '荷包蛋',
        price: 10
    }
];

let target1, target2;
target1 = food.filter(function (item) {
    return item.foodName === '鍋燒意麵' || item.foodName === '炒麵';
});

target2 = food.filter(function (item, index) {
    return index === 2 || index === 3;
})
console.log(target1);
console.log(target2);