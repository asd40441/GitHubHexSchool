let answer = {}; // 請把修改完的資料存入 answer 物件。
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url)
.then((response) => {
    let total = {};
    let data = response.data;

    data.forEach((item, i) => {
      if(total[item.jsGroup] === undefined) {
         total[item.jsGroup] = 1;
      }else {
        total[item.jsGroup] += 1;
      }
    })
    /*程式碼開始*/
    let obj = Object.keys(total);
    let objValue = Object.values(total);
    console.log(obj);
    console.log(objValue);
    obj.forEach((item) => {
        if(item !== '未分組'){
            answer[`第 ${item} 組人數`] = total[item];
        }else{
            answer[`${item}人數`] = total[item];
        }
    })
    /*程式碼結束*/
    console.log(answer);
 })