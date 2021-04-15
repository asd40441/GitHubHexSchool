let addBtn  = document.querySelector('.addBtn');
let alertMsgAll = document.querySelectorAll('[data-title]');
console.log(alertMsgAll);

addBtn.addEventListener('click', addAlertMsg);
function addAlertMsg() {
  alertMsgAll.forEach(function(item) {
    item.textContent = `${item.dataset.title} 必填!`;
  })
}