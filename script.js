const clear_btn = document.querySelectorAll('.clear-btn');
const delete_btn = document.querySelectorAll('.delete-btn');
const plus_minus_btn = document.querySelectorAll('.plus-minus-btn');
const number_btn = document.querySelectorAll('.number-btn');
const decimal_btn = document.querySelectorAll('.decimal-btn');
const operation_btn = document.querySelectorAll('.operation-btn');
const equal_btn = document.querySelectorAll('.equal-btn');

let top_display = document.querySelector('.top-display');
let bottom_display = document.querySelector('.bottom-display');

top_display.innerHTML = '';
bottom_display.innerHTML = '';

let operation_count = 0;

let current_number = '';

const calc_obj = {
    total: '',
    next: '',
    sign: ''
};

function add(total, next) { 
    return total + next; }
function subtract(total, next) { 
    return total - next; }
function multiply(total, next) { 
    return total * next; }
function divide(total, next) {
    if (total === 0 && next === 0)
    { return 'Dude...WTF...'; }
    const output = total / next
    return output.toFixed(2);
}

function operate(total,next,sign)
{
    if (sign === '+') {
        return add(total, next);}
    if (sign === '-') {
        return subtract(total, next);}
    if (sign === 'x') {
        return multiply(total, next);}
    if (sign === '÷') {
        return divide(total, next);}
}

clear_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        top_display.innerHTML = '';
        bottom_display.innerHTML = '';

        operation_count = 0;

        current_number = '';

        calc_obj.total = '';
        calc_obj.next = '';
        calc_obj.sign = '';

    });
});

number_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        current_number = current_number + btn.innerHTML;
        console.log(current_number);
        
        bottom_display.innerHTML = current_number;

    });
});

delete_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        current_number = current_number.slice(0,-1);
        bottom_display.innerHTML = current_number;

    });
});



operation_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        if(operation_count >= 1)
        {
            //Add number total into calc next
            //calc_obj.next = parceFloat(current_number)
        }
        else {
            //add number total into calc total
            //calc_obj.total = parceFloat(current_number)
        }

        operation_count++;

    });
});

equal_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        //total = total + next number
        //Update display 

    });
});
 