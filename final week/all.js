// 請代入自己的網址路徑
const api_path = "asd40441";
const token = "5kmbS5JS43RUo6q82sMI1VmF1282";
const baseUrl = 'https://hexschoollivejs.herokuapp.com';
let data = [];

// 取得產品列表
function getProductList() {
  
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
    .then((res) => {
      data = res.data.products;
      productList(data);
    })
}

function productList(data) {
  const productWrap = document.querySelector('.productWrap')
  let str = '';
  data.forEach((item) => {
    str += `
        <li class="productCard">
        <h4 class="productType">新品</h4>
        <img src="${item.images}"
            alt="">
        <a href="#" id="addCardBtn">加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${item.origin_price}</del>
        <p class="nowPrice">NT$${item.price}</p>
    </li>
        `
    productWrap.innerHTML = str;
  })
}

// 加入購物車
function addCartItem() {
  
}


// 取得購物車列表
function getCartList() {

}

// 清除購物車內全部產品
function deleteAllCartList() {

}

// 刪除購物車內特定產品
function deleteCartItem(cartId) {

}

// 送出購買訂單
function createOrder() {

}

// 取得訂單列表
function getOrderList() {

}

// 修改訂單狀態

function editOrderList(orderId) {

}

// 刪除全部訂單
function deleteAllOrder() {

}

// 刪除特定訂單
function deleteOrderItem(orderId) {

}