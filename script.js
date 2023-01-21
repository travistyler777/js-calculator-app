const button = document.querySelectorAll('.button');
const primary_calc_text = document.querySelector('.primary-calc-text');
const secondary_calc_text = document.querySelector('.secondary-calc-text');


button.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
        if (button.innerHTML === 'C'){
            calc_memory = [];
            primary_calc_text.innerHTML = "0";
            secondary_calc_text.innerHTML = "";
        }
        else {
            

            console.log(calc_memory);
            primary_calc_text.innerHTML = calc_memory;
        }
        
    });
})
 