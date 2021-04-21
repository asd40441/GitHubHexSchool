const api_path = "asd40441";
const baseUrl = 'https://hexschoollivejs.herokuapp.com';
const token = "5kmbS5JS43RUo6q82sMI1VmF1282";

const orderList = document.querySelector('.orderList')
const dicardAllBtn = document.querySelector('.discardAllBtn');
let orderData = [];

function init() {
    getOrderList()
}
init();

function getOrderList() {
    let url = `${baseUrl}/api/livejs/v1/admin/${api_path}/orders`;
    let data = 
    {
        headers: {
            'Authorization': token,
        }
    }
    axios.get(url, data)
        .then((res) => {
            orderData = res.data.orders;
            console.log(orderData);
            let str = '';
            let payed = '';
            orderData.forEach(function (item) {
                if(item.paid == false){
                    payed = '未處理';
                }else if(item.paid == true){
                    payed = '已付款';
                }
                str += `
                <tr>
                <td>${item.id}</td>
                    <td>
                        <p>${item.user.name}</p>
                        <p>${item.user.tel}</p>
                    </td>
                    <td>${item.user.address}</td>
                    <td>${item.user.email}</td>
                    <td>
                        <p>Louvre 雙人床架</p>
                    </td>
                    <td>${item.paid}</td>
                    <td class="orderStatus">
                        <a href="#" >${payed}</a>
                    </td>
                    <td>
                        <input type="button" class="delSingleOrder-Btn" value="刪除">
                    </td>
                </tr>
                `
            })
            orderList.innerHTML = str;
            renderC3();
        })
}





let chart = c3.generate({
    bindto: '#chart', // HTML 元素綁定
    data: {
        type: "pie",
        columns: [
            ['Louvre 雙人床架', 1],
            ['Antony 雙人床架', 2],
            ['Anty 雙人床架', 3],
            ['其他', 4],
        ],
        colors: {
            "Louvre 雙人床架": "#DACBFF",
            "Antony 雙人床架": "#9D7FEA",
            "Anty 雙人床架": "#5434A7",
            "其他": "#301E5F",
        }
    },
});