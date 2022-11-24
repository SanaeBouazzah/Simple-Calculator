var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var multibtn = document.querySelector(".multi");
var additionbtn = document.querySelector(".addition");
var subsbtn = document.querySelector(".subs");
var divbtn = document.querySelector(".div");
var modulusbtn = document.querySelector(".modulus");
var result = document.getElementById('result');





multibtn.addEventListener('click', () => {
    result.textContent = parseInt(num1.value) * parseInt(num2.value);
});
additionbtn.addEventListener('click', () => {
    result.textContent = parseInt(num1.value) + parseInt(num2.value);
});
subsbtn.addEventListener('click', () => {
    result.textContent = parseInt(num1.value) - parseInt(num2.value);
});
divbtn.addEventListener('click', () => {
    result.textContent = parseInt(num1.value) / parseInt(num2.value);
});
modulusbtn.addEventListener('click', () => {
    result.textContent = parseInt(num1.value) % parseInt(num2.value);
});