let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue == '=') {
            try {
                
                string = eval(string);
            } catch (error) {
                
                string = "Error";
            }
            document.querySelector('input').value = string;

        } else if (buttonValue == 'C') {
            string = "";
            document.querySelector('input').value = string;

        } else if (buttonValue == '%') {
            
            try {
               
                let currentValue = eval(string);
                string = String(currentValue / 100);
            } catch (error) {
                
                string = "Error";
            }
            document.querySelector('input').value = string;

        } else {
            console.log(e.target);
            string = string + buttonValue;
            document.querySelector('input').value = string;
        }
    });
});