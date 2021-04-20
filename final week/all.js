// 請代入自己的網址路徑
const api_path = "asd40441";
const token = "5kmbS5JS43RUo6q82sMI1VmF1282";
const baseUrl = 'https://hexschoollivejs.herokuapp.com';

// 宣告
let data = [];
let carts = [];
let cartId = '';

// 初始化
function init() {
  getProductList();
  getCartList();
}

// 取得產品列表
function getProductList() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
    .then((res) => {
      data = res.data.products;
      productList(data);
    })
    .catch((error) => {
      console.log(error);
    })
}
const productWrap = document.querySelector('.productWrap');
function productList(data) {
  let str = '';
  data.forEach((item, index) => {
    str += `
        <li class="productCard">
        <h4 class="productType">新品</h4>
        <img src="${item.images}" alt="">
        <a href="#" id="addCardBtn" class="addCardBtn" data-id="${item.id}">加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${item.origin_price}</del>
        <p class="nowPrice">NT$${item.price}</p>
    </li>
        `
    productWrap.innerHTML = str;
  })
}
// 選單分類
const productSelect = document.querySelector('.productSelect');
productSelect.addEventListener('change',(e)=>{
  let category = e.target.value;
  if(category=="全部"){
    getProductList();
    return;
  }
  let str = "";
  data.forEach((item) => {
    if (item.category == category ){
      str += `
        <li class="productCard">
        <h4 class="productType">新品</h4>
        <img src="${item.images}" alt="">
        <a href="#" id="addCardBtn" class="addCardBtn" data-id="${item.id}">加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${item.origin_price}</del>
        <p class="nowPrice">NT$${item.price}</p>
    </li>
        `
    }
  })
  productWrap.innerHTML = str;
})

// 加入購物車
productWrap.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.getAttribute('class') !== 'addCardBtn') {
    return;
  }
  let id = e.target.getAttribute('data-id');
  addCartItem(id);
})
function addCartItem(productID) {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  let postData = {
    "data": {
      "productId": productID,
      "quantity": 1
    }
  }
  axios.post(url, postData)
    .then((res) => {
      console.log(res);
      getCartList();
    })
    .catch((error) => {
      console.log(error);
    })
}


// 取得購物車列表
function getCartList() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios.get(url)
    .then((res) => {
      carts = res.data.carts;
      cartList(carts);
    })
    .catch((error) => {
      console.log(error);
    })
}

function cartList(carts) {
  const viewCarts = document.querySelector('.cartNow');
  const totalPrice = document.querySelector('.totalPrice');
  let str = '';
  let totalMoney = 0;
  carts.forEach((item, index) => {
    str += `
    <tr>
    <td>
    <div class="cardItem-title">
        <img src="${item.product.images}" alt="">
        <p>${item.product.title}</p>
    </div>
    </td>
    <td>NT$${item.product.price}</td>
    <td>1</td>
    <td>NT$${item.product.price}</td>
    <td class="discardBtn">
      <input type="button" value="clear" class="material-icons" data-delete="${item.id}">
    </td>
    </tr>
    `
    totalMoney += item.product.price;
  })
  viewCarts.innerHTML = str;
  totalPrice.innerHTML = `NT$${totalMoney}`;
}

// 清除購物車內全部產品
const discardAllBtn = document.querySelector('.discardAllBtn');
function deleteAllCartList() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios.delete(url)
    .then((res) => {
      console.log(res);
      alert("刪除全部購物車成功");
      getCartList();
    })
    .catch((error) => {
      alert("購物車已清空")
    })
}

discardAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAllCartList();
})

// 刪除購物車內特定產品
const deleteCartItemBtn = document.querySelector('.shoppingCart-table');
deleteCartItemBtn.addEventListener('click',(e) => {
  cartId = e.target.getAttribute('data-delete');
  if(cartId==null){
    return;
  }
  deleteCartItem(cartId);
})

function deleteCartItem(cartId) {
  console.log(cartId);
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts/${cartId}`;
  axios.delete(url)
  .then((res) => {
    console.log(res);
    getCartList();
  })
  .catch((error)=>{
    console.log(error);
  })
}

// 送出購買訂單
const orderBtn = document.querySelector('.orderInfo-btn');
const name = document.querySelector('#customerName');
const tel = document.querySelector('#customerPhone');
const email = document.querySelector('#customerEmail');
const address = document.querySelector('#customerAddress');
const pay = document.querySelector('#tradeWay');
orderBtn.addEventListener('click',(e)=>{
  createOrder();
})

function createOrder() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/orders`;
  let postData = {
    "data": {
      "user": {
        "name": name.value,
        "tel": tel.value,
        "email": email.value,
        "address": address.value,
        "payment": pay.value
      }
    }
  }
  if (name.value == "" || tel.value == "" || email.value == "" || address.value ==""){
    alert("請輸入訂單資訊！");
    return;
  }
  axios.post(url, postData)
    .then((res) => {
      console.log(res);
      getCartList();
    })
    .catch((error) => {
      console.log(error);
    })
}

init();