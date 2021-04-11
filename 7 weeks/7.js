let data = [];
let newData = [];
let totalObj = {};

const name = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#ticketImgUrl");
const area = document.querySelector("#ticketRegion");
const price = document.querySelector("#ticketPrice");
const group = document.querySelector("#ticketNum");
const rate = document.querySelector("#ticketRate");
const description = document.querySelector("#ticketDescription");
const btn = document.querySelector(".addTicket-btn");
const searchLen = document.querySelector("#searchResult-text");
const selectArea = document.querySelector(".regionSearch");
const resetForm = document.querySelector(".addTicket-form");
let selectValue = '';

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
  .then(function (response) {
    data = response.data;
    console.log(data);
    settingCard();
    addChart();
  })

function settingCard() {
  let list = document.querySelector('.ticketCard-area');
  let str = '';
  let len = 0;
  data.forEach(function (item) {
    if (selectValue == item.area || selectValue == '') {
      str += `
<li class="ticketCard">
<div class="ticketCard-img">
    <a href="#">
        <img src=${item.imgUrl} alt="">
    </a>
    <div class="ticketCard-region">${item.area}</div>
    <div class="ticketCard-rank">${item.rate}</div>
</div>
<div class="ticketCard-content">
    <div>
        <h3>
            <a href="#" class="ticketCard-name">${item.name}</a>
        </h3>
        <p class="ticketCard-description">
            ${item.description}
        </p>
    </div>
    <div class="ticketCard-info">
        <p class="ticketCard-num">
            <span><i class="fas fa-exclamation-circle"></i></span>
            剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
        </p>
        <p class="ticketCard-price">
            TWD <span id="ticketCard-price">$${item.price}</span>
        </p>
    </div>
</div>
</li>
`;
      len++;
    }
  })
  list.innerHTML = str;
  searchLen.innerHTML = `本次搜尋共 ${len} 筆資料`;
}

function addCard() {
  let id = data.length;
  let card = {
    "id": id,
    "name": name.value,
    "imgUrl": imgUrl.value,
    "area": area.value,
    "description": description.value,
    "group": Number(group.value),
    "price": Number(price.value),
    "rate": Number(rate.value)
  };
  if (name.value == '' || imgUrl.value == '' || area.value == '' || description.value == '' || group.value == '' || price.value == '' || rate.value == '') {
    alert('內容有空白');
  } else {
    data.push(card);
    settingCard();
    addChart();
    alert('新增成功');
    resetForm.reset();
  }
}
// 監聽新增套票按鈕
btn.addEventListener('click', addCard);
selectArea.addEventListener('change', function value(e) {
  selectValue = e.target.value;
  console.log(data);
  settingCard();
});


function addChart() {
  //資烙蒐集處理
  // 篩選地區，並累加數字上去
  // totalObj 會變成 {高雄: 2, 台北: 1, 台中: 2}
  totalObj = {};
  data.forEach(function (item, index) {
    if (totalObj[item.area] == undefined) {
      totalObj[item.area] = 1;
    } else {
      totalObj[item.area] += 1;
    }
  })

  newData = [];
  // newData = [["高雄", 2], ["台北",1], ["台中", 1]]
  let area = Object.keys(totalObj);
  // area output ["高雄","台北","台中"]
  area.forEach(function (item, index) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  })

  console.log(newData);

  // 將 newData 丟入 c3 產生器
  let chart = c3.generate({
    bindto: ".chart",
    size: {
      height: 180,
      width: 180
    },
    data: {
      columns: newData,
      type: 'donut',
      colors: { 
        高雄: "#E68618",
        台中: "#5151D3",
        台北: "#26C0C7"
      }
    },
    donut: {
      title: "套票地區比重",
      label: {
        show: false
      },
      width: 20
    }
  });
}