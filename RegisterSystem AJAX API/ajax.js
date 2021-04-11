const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const account2 = document.querySelector('.account2');
const password2 = document.querySelector('.password2');
const btnUp = document.querySelector('.btnUp');
const btnIn = document.querySelector('.btnIn');
let status = '';
let status2 = '';
let obj = {};
let obj2 = {};

btnUp.addEventListener('click',function(e){
    callSignup();
})

btnIn.addEventListener('click',function(e){
    callSignin();
})

function callSignup() {
    obj.email = account.value;
    obj.password = password.value;

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
        .then(function (response) {
            console.log(response);
            status = obj.email + response.data.message;
            messageShow();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function callSignin() {
    obj2.email = account2.value;
    obj2.password = password2.value;

    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj2)
        .then(function (response) {
            console.log(response);
            status2 = obj2.email + response.data.message;
            messageShow();
        })
}

function messageShow() {
    signup.innerHTML = status;
    signin.innerHTML = status2;
}