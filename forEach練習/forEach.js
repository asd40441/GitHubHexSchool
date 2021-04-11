let data = [{
    Charge: "免費",
    name: "廖洧杰充電站"
}, {
    Charge: "投幣式",
    name: "小花充電站"
}, {
    Charge: "投幣式",
    name: "小明充電站"
}, {
    Charge: "投幣式",
    name: "小天充電站"
}];

const list = document.querySelector('.list');
const btn = document.querySelector('.filter');
let money = '';

function init() {
    let str = '';
    data.forEach(function (item) {
        str += `
    <li>
    ${item.name}，${item.Charge}
    </li>`
    })
    list.innerHTML = str;
}

btn.addEventListener('click', function (e) {
    let str = '';
    money = e.target.value;
    if (money == undefined){
        return;
    }
    data.forEach(function (item) {
        if (item.Charge == money || money == '全部' ) {
            str += `
    <li>
    ${item.name}，${item.Charge}
    </li>`
        }
    })  
    list.innerHTML = str;
})


init();