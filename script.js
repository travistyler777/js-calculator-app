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
bottom_display.innerHTML = '0';

let operation_count = 0;

let current_number = '';

const calc_obj = {
    total: 0,
    next: 0,
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
        bottom_display.innerHTML = '0';

        operation_count = 0;

        current_number = '';

        calc_obj.total = 0;
        calc_obj.next = 0;
        calc_obj.sign = '';

    });
});

plus_minus_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        
        if (current_number < 0)
        {
            //Convert string to number
            current_number = parseFloat(current_number);
    
            //Turn negative into positive
            current_number = Math.abs(current_number)
    
            //Convert back to string
            current_number = current_number.toString()

            //Display
            bottom_display.innerHTML = current_number;
        }
        else {
            //Convert string to number
            current_number = parseFloat(current_number);

            //Turn negative into negative
            current_number = -Math.abs(current_number)

            //Convert back to string
            current_number = current_number.toString()

            //Display
            bottom_display.innerHTML = current_number;
        }
  
    });
});

number_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        current_number = current_number + btn.innerHTML;
        //console.log(current_number);
        
        bottom_display.innerHTML = current_number;
        console.log("current Number: " + current_number);
        console.log("Obj Total: " + calc_obj.total);
        console.log("Obj Next: " + calc_obj.next);
        console.log("Obj Sign: " + calc_obj.sign);

    });
});

delete_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        if(current_number.length <= 1)
        {
            current_number = '';
            bottom_display.innerHTML = '0';
        }
        else 
        {
            current_number = current_number.slice(0,-1);
            bottom_display.innerHTML = current_number;
        }

    });
});



operation_btn.forEach((btn) => {
    btn.addEventListener('click', () => {


        if(operation_count >= 1)
        {
            
            calc_obj.next = parseFloat(current_number);
            

            calc_obj.total = operate(calc_obj.total, calc_obj.next, calc_obj.sign);

            console.log("if Totallll: " + calc_obj.total);
            //calc_obj.total = calc_obj.total + calc_obj.next;
            bottom_display.innerHTML = calc_obj.total;
            
            
            //Clears current number
            current_number = ''

            //changes operation sign in object
            calc_obj.sign = btn.innerHTML;
    
        }
        else {

            calc_obj.sign = btn.innerHTML;
            
            calc_obj.next = parseFloat(current_number);
            console.log("else Next: " + calc_obj.next);

            calc_obj.total = calc_obj.total + calc_obj.next;
            console.log("else Total: " + calc_obj.total);

            bottom_display.innerHTML = current_number;

            current_number = ''

        }

        operation_count++;


    });
});

equal_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        calc_obj.next = parseFloat(current_number);

        calc_obj.total =  operate(calc_obj.total, calc_obj.next, calc_obj.sign);

        calc_obj.next = calc_obj.total;

        //Update display 
        bottom_display.innerHTML = calc_obj.total;

        current_number = '';

    });
});
 