"use strict";
let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');
let button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', function () {
    const result = sum(Number(input1.value), Number(input2.value));
    alert(result);
});
