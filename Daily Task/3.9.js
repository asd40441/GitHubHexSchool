// 如果 NumberAll 陣列內的值大於或等於 30，則用 push() 方法將其加入 NumberAbove30 陣列中，
// 如果 NumberAll 陣列內的值大於或等於 30，則用 splice() 方法將其從 NumberAll 中移除。
let NumberAll = [25, 30, 15, 50, 17, 40];
let NumberAbove30 = [];
NumberAll.forEach(function(item, index){
    if(item >= 30){
        NumberAbove30.push(item);
        NumberAll.splice(index,1);
    }
});
console.log(NumberAbove30);
console.log(NumberAll);