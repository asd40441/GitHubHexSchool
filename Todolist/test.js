const title = document.querySelector('.box');

title.addEventListener('click',function(e){
    if(e.target.getAttribute('class') == 'view'){
        console.log(e.target.getAttribute('value'));
    }
})