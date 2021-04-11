let data = [];
let total = {};
let aryData = [];
const rank = document.querySelector('.rank');

axios.get('https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json')
    .then(function (response) {
        data = response.data;
        group();
        console.log(total);
        addData();
        console.log(aryData);
        addDonut();
        sortRank();
        console.log(data);
        addRank();
    })

function group() {
    data.forEach(function (item) {
        if (total[item.jsGroup] == undefined) {
            total[item.jsGroup] = 1;
        } else {
            total[item.jsGroup] += 1;
        }
    });
}

function addData() {
    let teamAry = Object.keys(total);
    teamAry.forEach((item) => {
        let ary = [];
        ary.push(item);
        ary.push(total[item]);
        aryData.push(ary);
    })
}

function addDonut() {
    const chart = c3.generate({
        bindto: '.chart',
        data: {
            columns: aryData,
            type: 'donut'
        },
        donut: {
            title: '各組人數比例'
        }
    })
}

function sortRank() {
    data.sort(function (a, b) {
        let timea = parseInt(a.practiceMinute) * 60 + parseInt(a.practiceSecond);
        let timeb = parseInt(b.practiceMinute) * 60 + parseInt(b.practiceSecond);
        return timea - timeb;
    });
}

function addRank() {
    let str = '';
    data.forEach((item) => {
        str += `<li>姓名：${item.slackName}，花費時間：${item.practiceMinute}分${item.practiceSecond}秒</li>`
    })
    rank.innerHTML = str;
}