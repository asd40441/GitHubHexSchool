let data = [];

const txt = document.querySelector('.txt');
const btn = document.querySelector('.save');
const list = document.querySelector('.list');

btn.addEventListener('click',function(e){
    if(txt.value ==''){
        alert('請輸入資料');
        return;
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderList();
    txt.value = '';
})

list.addEventListener('click',(e)=>{
    if(e.target.getAttribute('class') !== 'delete'){
        return;
    }
    let num = e.target.getAttribute('data-num');
    data.splice(num,1);
    renderList();
})

function renderList() {
    let str = '';
    data.forEach((item,index) => {
        str += `
        <li>${item.content}<input type="button" class="delete" data-num="${index}" value="刪除待辦"></li>
    `
    })
    const list = document.querySelector('.list');
    list.innerHTML = str;
}

renderList();