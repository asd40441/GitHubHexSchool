// 問題一
// 請透過 map() 將 arr 內的元素都乘以 2，並指派給 newArr。

let arr = [1, 4, 9, 16];
let newArr;

newArr = arr.map(function(item){
    return item = item * 2;
})

console.log(arr);
console.log(newArr);


// 問題二
// 以下為 customer 顧客資料，請透過 map() 方法，修改程式碼並執行以下要求:

// 取出各個陣列元素的 Name 形成一個新的陣列，並指派給 customerName
// 如: [“Jordan”, “Jenny”, “Kevin”, “louis”]

// 取出各個陣列元素的 id 形成一個新的陣列，並指派給 customerId
// 如: [123, 456, 789, 987]

let customer = [
  {
    Name: 'Jordan',
    id: 123,
  },
  {
    Name: 'Jenny',
    id: 456,
  },
  {
    Name: 'Kevin',
    id: 789,
  },
  {
    Name: 'louis',
    id: 987,
  }
];

let customerName;
let customerId;

customerName = customer.map(function(item){
    return item.Name;
})
customerId = customer.map(function(item){
    return item.id;
})

console.log(customerName);
console.log(customerId);