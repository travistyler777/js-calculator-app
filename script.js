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
let allow_operation = true;

let current_number = '';
let current_log = '';
let current_sign = '';

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
    if (sign === 'x') {
        return multiply(total, next);}
    if (sign === '+') {
        return add(total, next);}
    if (sign === '-') {
        return subtract(total, next);}
    if (sign === '÷') {
        return divide(total, next);}
}

clear_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        top_display.innerHTML = '';
        bottom_display.innerHTML = '0';

        operation_count = 0;

        current_number = '';
        current_log = '';

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

        //Clears bottom display value
        bottom_display.innerHTML = '';

        //Take current number var and basicly turns it into array
        current_number = current_number + btn.innerHTML;
        
        //Logs values in arr
        current_log = current_log + btn.innerHTML;

        //Top display
        top_display.innerHTML = current_log
        
        //Bottom display
        bottom_display.innerHTML = current_number;

        //allow operator button to be pressed again
        allow_operation = true;
        
    

    });
});

delete_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        if(current_number.length < 1)
        {
            current_number = '';
            current_log = '';
            top_display.innerHTML = '';
            bottom_display.innerHTML = '0';

            current_number = '';
            current_log = '';
            current_sign = '';


        }
        else 
        {
            current_log = current_log.slice(0,-1)
            current_number = current_number.slice(0,-1);
            console.log(current_number);
           
            //Display
            top_display.innerHTML = current_log;
            bottom_display.innerHTML = current_number;
        }

    });
});



operation_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        
        if (allow_operation === true)
        {

        
            if(operation_count > 0)
            {
                
                //Clear display
                bottom_display.innerHTML = '';

                //Add current number into object next key
                calc_obj.next = parseFloat(current_number);
                
                //Calculate 
                calc_obj.total = operate(calc_obj.total, calc_obj.next, calc_obj.sign);

                //Display calculation on main display
                bottom_display.innerHTML = calc_obj.total;

                //Add current sign to temp sign var
                current_sign = btn.innerHTML;

                //Add sign to top log display
                top_display.innerHTML = current_log + btn.innerHTML;

                //Add new operator sign to object
                calc_obj.sign = current_sign;

                //Display log in top display
                current_log = current_log + btn.innerHTML;
                top_display.innerHTML = current_log;
                
                //clear temp var
                current_number = '';
                
                //allow operator button to be pressed again
                allow_operation = false;    
                
            }
            else 
            {

                //Add current number into object next key
                calc_obj.next = parseFloat(current_number);

                //Add next into object total key
                calc_obj.total = calc_obj.next;


                //Display log in top display
                current_log = current_log + btn.innerHTML;
                top_display.innerHTML = current_log;

                //Clear display then display value in bottom display
                bottom_display.innerHTML = '';
                current_sign = btn.innerHTML;

                //Add calc sign into object
                calc_obj.sign = current_sign;

                //display sign to bottom variable
                bottom_display.innerHTML = current_sign;

                //Clear current number temp var
                current_number = '';

                //allow operator button to be pressed again
                allow_operation = false;    


            }

            operation_count++;
        }       
    });
});

equal_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
      

    });
});
 