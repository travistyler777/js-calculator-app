const button = document.querySelectorAll('.button');
const delete_button = document.querySelector('.delete-btn');
const plus_minus_button = document.querySelector('.plus-minus-btn');

let top_display = document.querySelector('.top-display');
let bottom_display = document.querySelector('.bottom-display');

top_display.innerHTML = '';
bottom_display.innerHTML = '0';

let calc_sign = "";
let calc_input = false;

let calc_arr = [];

let first_value = 0;
let second_value = 0;

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    if (a === 0 && b === 0)
    {
        return 'Dude...WTF...';
    }

    const output = a / b

    return output.toFixed(2);
}

function operate(a,b,c)
{
    console.log(c);
    if (c === '+')
    {
        return add(a,b);
    }
    if (c === '-')
    {
        return subtract(a,b);
    }
    if (c === 'x')
    {
        return multiply(a,b);
    }
    if (c === '÷')
    {
        return divide(a,b);
    }
}

button.forEach((btn) => {
    btn.addEventListener('click', () => {
       
        console.log(calc_input);

        //clear everything
        if (btn.innerHTML  === 'C')
        {
            top_display.innerHTML = '';
            bottom_display.innerHTML = '0';

            calc_input = false;
            calc_arr = [];
        }

        
        if (calc_input === false){

            console.log(btn.className)
            if(btn.className.includes('btn-number'))
            {
                first_value = first_value + parseInt(btn.innerHTML);
                console.log(first_value);
    
                calc_arr[0] = first_value;
                console.log(calc_arr);    
            }


        }
        else {

        }



    });
})
 