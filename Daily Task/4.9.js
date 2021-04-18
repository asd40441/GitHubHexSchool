let baseUrl = 'https://hexschoollivejs.herokuapp.com';
let api_path = 'asd40441';
const productList = document.querySelector('.container');
const cart = document.querySelector('.cart');
const addCart = document.querySelector('.container');
const deleteCart = document.querySelector('.deleteCart');

deleteCart.addEventListener('click',()=>{
    axios.delete(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`)
    .then((response)=>{
        console.log(response);
        getCart();
    })
})

function getProduct() {
    let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`
    axios.get(url)
        .then(function (response) {
            let product = response.data.products;
            render(product);
            getCart();
        })
        .catch(function (error) {
            console.log(error);
        })
}

function render(product) {
    let str = '';
    product.forEach((item, index) => {
        str += `<div class="row productList">
    <div class="col-6 mb-3">
      <div class="card">
        <img src="${item.images}" class="card-img-top productImg" alt="產品圖片">
        <div class="card-body">
          <h5 class="card-title"><strong>標題:</strong>${item.title}</h5>
          <p class="card-text"><strong>種類:</strong>${item.category}</p>
          <p class="card-text"><strong>原始價格:</strong>${item.origin_price}</p>
          <p class="card-text"><strong>售價:</strong>${item.price}</p>
          <p class="card-text"><strong>描述:</strong>${item.description}</p>
        </div>
        <input type="button" class="addCard" data-id=${item.id} value="加入購物車">
      </div>
    </div>
  </div>`
    })
    productList.innerHTML = str;
}

addCart.addEventListener('click', (e) => {
    if(e.target.getAttribute('class') !== 'addCard'){
        return;
    }
    let id = e.target.getAttribute('data-id');
    addCartData(id);
})

function addCartData(productID){
    axios.post(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`,
    {
        "data": {
            "productId" : productID,
            "quantity" : 1
        }
    })
    .then((response)=>{
        console.log(response.data);
        getCart();
    })
}

function getCart() {
    axios.get(`${baseUrl}/api/livejs/v1/customer/${api_path}/carts`)
        .then((response) => {
            let cartData = response.data.carts;
            let cartStr = '';
            cartData.forEach((item) => {
                cartStr += `
        <ul><li>品項：${item.product.title}</li><li>數量：${item.quantity}</li></ul>
        `
            })
            cart.innerHTML = cartStr;
        })
}

function postOrder(){
    axios.post(`${baseUrl}/api/livejs/v1/customer/${api_path}/orders`,
    {
        "data": {
          "user": {
            "name": "六角學院",
            "tel": "07-5313506",
            "email": "hexschool@hexschool.com",
            "address": "高雄市六角學院路",
            "payment": "Apple Pay"
          }
        }
      }
    )
    .then((res)=>{
        console.log(res.data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

getProduct();