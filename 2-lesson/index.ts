let input1 = document.getElementById('num1') as HTMLInputElement;
let input2 = document.getElementById('num2') as HTMLInputElement;
let button = document.getElementById('button')!;

function sum(a: number, b: number) {
    return a + b;
}

button.addEventListener('click', function() { 
    const result = sum(Number(input1.value), Number(input2.value));
    alert(result);
});