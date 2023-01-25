const clear_btn = document.querySelector('.clear-btn');
const delete_btn = document.querySelector('.delete-btn');
const plus_minus_btn = document.querySelector('.plus-minus-btn');
const number_btn = document.querySelectorAll('.number-btn');
const decimal_btn = document.querySelector('.decimal-btn');
const operation_btn = document.querySelectorAll('.operation-btn');
const equal_btn = document.querySelector('.equal-btn');

let secondary_display = document.querySelector('.secondary-display');
let primary_display = document.querySelector('.primary-display');


//REFERENCES
    //https://www.theodinproject.com/lessons/foundations-calculator
    //https://captain-usopp.github.io/Calculator/
//BODMAS method
    //https://thirdspacelearning.com/blog/what-is-bodmas/#:~:text=The%20BODMAS%20rule%20states%20we,18%20%2B%2025%20%3D%2043).


let total_string = '';
let next_string = '';
let sign_string = '';

let inputs_log = '';



const inputs = {
    total: 0,
    next: '',
    sign: ''
}

let includes_decimal = false;
let operation_clicked = false;
let equals_clicked = false;


function operate(total, next, sign)
{

    if(sign === '+')
    {
        calculation = total + next;
        return calculation;
    }
    if(sign === '-')
    {
        calculation = total - next;
        return calculation;
    }
    if(sign === 'x')
    {
        calculation = total * next;
        return calculation;
    }
    if(sign === '÷')
    {
        calculation = total / next;
        return calculation;
    }


}


number_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        
        next_string = next_string + btn.textContent;
        
        //Log Input
        inputs_log = inputs_log + btn.textContent

        //Input into object
        inputs.next = parseFloat(next_string);
        
        //Show on display
        secondary_display.innerHTML = inputs_log;
        primary_display.innerHTML = next_string;

        console.log("Next String: " + next_string)
        console.log("Inputs next: " + inputs.next)
        console.log("Inputs total: " + inputs.total)
        console.log("inputs sign: " + inputs.sign);
  
        
    });
});

decimal_btn.addEventListener('click', ()=> {
    
    if(includes_decimal === false)
    {
        next_string = next_string + decimal_btn.textContent;

        //Log Input
        inputs_log = inputs_log + decimal_btn.textContent;

        //Display
        secondary_display.innerHTML = inputs_log;
        primary_display.innerHTML = next_string;

        console.log("Next_String: " + next_string);
        
        //Reset bools
        includes_decimal = true
        
    }

});

operation_btn.forEach((btn) => {
    btn.addEventListener('click', () => {

        if(operation_clicked)
        {   

            console.log("Operations Clicked: " + operation_clicked)
            console.log("Equals Clicked: " + equals_clicked)

            //next_string = inputs.total.toString()
            
            console.log("INPUTS NEXT-: " + next_string);
            console.log("INPUTS TOTAL-: " + inputs.total);


            inputs.total = operate(inputs.total, inputs.next, inputs.sign);

            console.log("INPUTS TOTAL2-: " + inputs.total);
            
            inputs.sign = btn.textContent;
            console.log(inputs.sign);

            //Log Input
            inputs_log = inputs_log + btn.textContent;

            //Display
            secondary_display.innerHTML = inputs_log;
            primary_display.innerHTML = inputs.total;

            //Clear variables
            next_string = '';
            includes_decimal = false;
        

        }
        else if(equals_clicked) {

            console.log("Operation Clicked: " + operation_clicked)
            console.log("Equals Clicked: " + equals_clicked)
            

            //Assign new operation
            inputs.sign = btn.textContent;


    
            //Log Input
            inputs_log = inputs_log + btn.textContent;

            //Display
            secondary_display.innerHTML = inputs_log;
            primary_display.innerHTML = inputs.total;

            //Clear variables
            next_string = '';
            includes_decimal = false;
            equals_clicked = false;
            operation_clicked = true;
        }
        else {
             
            console.log("Operations Clicked: " + operation_clicked)
            console.log("Equals Clicked: " + equals_clicked)

            //Set Object Value
            inputs.next = parseFloat(next_string);
            inputs.total = parseFloat(next_string);     
            inputs.sign = btn.textContent;

            console.log("Inputs next: " + inputs.next)
            console.log("Inputs total: " + inputs.total)
            console.log("inputs sign: " + inputs.sign);

            //Log Input
            inputs_log = inputs_log + btn.textContent;

            //Show on display
            secondary_display.innerHTML = inputs_log;
            primary_display.innerHTML = next_string;
    
            //Clear variables
            next_string = '';
            includes_decimal = false;
            operation_clicked = true;

        }

    })
});

equal_btn.addEventListener('click', () => { 

    if(equals_clicked)
    {
        inputs.total = operate(inputs.total, inputs.next, inputs.sign);
        

        //Show in display
        primary_display.innerHTML = inputs.total;

        console.log(inputs.next);
        console.log(inputs.sign);
        console.log(inputs.total);
    }
    else 
    {

        
        console.log(equals_clicked); 
        
        //Calculate
        inputs.total = operate(inputs.total, inputs.next, inputs.sign);
        
        //Show in display
        primary_display.innerHTML = inputs.total;
        
        //Make equals true
        
        //Clear Next
        next_string = '';
        equals_clicked = true;
        operation_clicked = false;
    }

    console.log("equal NEXT S: " + next_string);
    console.log("equal NEXT I: " + inputs.next);
    console.log("equal TOTAL: " + inputs.total);
    console.log("equal SIGN: " + inputs.sign);


});


delete_btn.addEventListener('click', () => {
    next_string = next_string.slice(0, -1);
    inputs_log = inputs_log.slice(0, -1);
    console.log("Next:: " + next_string);
    console.log("Log:: " + inputs_log);

    if (next_string === null)
    {
        secondary_display.innerHTML = '';
        primary_display.innerHTML = '0';

        inputs.next = '0';
        next_string = '0';

        operation_clicked = false;

    }
    else {

        //input values
        inputs.next = inputs_log;
        inputs.next = next_string;

        //Show in display
        secondary_display.innerHTML = inputs_log;
        primary_display.innerHTML = next_string;
    }

    if(next_string.length === 1) {
        operation_clicked = true;
    
    }

});

clear_btn.addEventListener('click', ()=> {
    

    //Clear Temp Strings
    total_string = '';
    next_string = '';
    sign_string = '';

    //Clear Input Object
    inputs.total = 0;
    inputs.next = '';
    inputs.sign = '';
    inputs_log = '';
    console.log("Inputs Total:" + inputs.total);
    console.log("Inputs Next:" + inputs.next);
    console.log("Inputs Sign:" + inputs.sign);

    //Clear display
    primary_display.innerHTML = '0';
    secondary_display.innerHTML = '';

    includes_decimal = false;
    operation_clicked = false;
    equals_clicked = false;
    

})




