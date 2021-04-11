let data = [];
let total = {};
axios.get('https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json')
    .then(function(response){
        data = response.data;
        console.log(data);
        data.forEach(function(item) {
            if(total[item.jsGroup] == undefined){
                total[item.jsGroup] = 1;
            }else{
                total[item.jsGroup] += 1;
            }
        });
        console.log(total);
    })
