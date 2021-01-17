// Adding Input Foucs to the Form

function inputFunc(){
    let input = document.querySelector('#name');
    input.focus();
}

inputFunc();

// Job Role section
function jobRoleFunc(){
    let jobRoles = document.querySelector('#title');
    let otherJobRole = document.querySelector('#other-job-role');

    otherJobRole.style.display = 'none';

    // Event Listener for the Job Roles. This will check if value if equal to 'other' and change the display value
    jobRoles.addEventListener('click', (e) => {
        console.log(e.target.value)
        if (e.target.value === 'other'){
            otherJobRole.style.display = 'block';
        }
    });

}

jobRoleFunc();


// T-Shirt Info Section
function colorTShirtFunc(){
    let colorShirt = document.querySelector('#shirt-colors');

    colorShirt.style.display = 'none';

    let design = document.querySelector('#design');

    design.addEventListener('click', (e) => {
        colorShirt.style.display = 'block';
        let shirtStyle = e.target.value;

        let heartShirt = document.querySelectorAll('[data-theme="heart js"]');
        let punShirt = document.querySelectorAll('[data-theme="js puns"]');

        // If statement to check if the shirt style is 'js puns' or 'heart js'
        if (shirtStyle === 'js puns'){
            for (let i = 0; i < heartShirt.length; i++){
                heartShirt[i].style.display = 'none';
                punShirt[i].style.display = 'block';
            }
        } else if (shirtStyle === 'heart js'){
            for (let i = 0; i < punShirt.length; i++){
                punShirt[i].style.display = 'none';
                heartShirt[i].style.display = 'block';
            }
        }
    });

}

colorTShirtFunc();

// Register for Activites section

    // Number to track amount added to Total
        let totalAmount = 0;

function activitiesFunc(){
    let activities = document.querySelector("#activities");



    activities.addEventListener('change', (e)=>{
        let cost = document.querySelector('#activities-cost');
        let clicked = e.target;
        let clickedCost = parseInt(e.target.getAttribute('data-cost'));

        if (clicked.checked){
            totalAmount += clickedCost;
        } else {
            totalAmount -= clickedCost;
        }
        cost.textContent = `Total: $${totalAmount}`;
    });
}

activitiesFunc();


// Payment Info section

function paymentFunc(){
    let paymentMethod = document.querySelector('#payment');

    // Payment Box
    let paymentBox = document.querySelector('.credit-card-box');
    let credit = document.querySelector('.expiration-box');

    // Bitcoin
    let bitCoin = document.querySelector('#bitcoin')

    // Paypal
    let payPal = document.querySelector('#paypal');
    
    // Hiding both bitcoin and paypal options and keeping credit card options open
    
    bitCoin.hidden = true;
    payPal.hidden = true;
    credit.hidden = false;
    paymentBox.hidden = false;

    paymentMethod.addEventListener('change', (e)=>{
        let number = e.target.options.selectedIndex;
        let payment = paymentMethod.options[number].innerHTML;
        
        // If statements for which payment the user chooses. The one picked will show up on screen and the others will stay hidden

        if (payment === 'PayPal'){
            credit.style.display = 'none';
            paymentBox.style.display = 'none';
            bitCoin.hidden = true;
            payPal.hidden = false;
        } 

        if (payment === 'Bitcoin'){
            credit.style.display = 'none';
            paymentBox.style.display = 'none';
            payPal.hidden = true;
            bitCoin.hidden = false;
        }

        if (payment === 'Credit Card'){
            credit.style.display = '';
            paymentBox.style.display = '';
            payPal.hidden = true;
            bitCoin.hidden = true;
        }
    });

}

paymentFunc();


// Form Validation 

// Hints
let nameHint = document.querySelector('#name-hint');
let emailHint = document.querySelector("#email-hint");
let activitiesHint = document.querySelector('#activities-hint');
let ccHint = document.querySelector('#cc-hint');
let cvvHint = document.querySelector('#cvv-hint');
let zipHint = document.querySelector('#zip-hint');


// -- Name Helper Function
function nameIsValid(){
    let name = document.querySelector('#name');

    if (name.value === '' || name.length < 1){
        return false;
    } else{
        return true;
    }
}

// -- Email Helper Function

function isEmailValid(){
    let emailReg = /^[^@]+@[^@.]+\.[a-z]+$/i;
    let emailValue = document.querySelector('#email').value;

    if (emailReg.test(emailValue)){
        return true;
    } else{
        return false;
    }
}


// Register Activity Helper Function

function activityChecker(){
    let activities = document.querySelectorAll("#activities-box label input");
    
    for (let i = 0; i < activities.length; i++){
        if (activities[i].checked){
            return true;
        } else {
            return false;
        }
    }
}


// Credit Card Helper Function

function creditCardChecker(){
    let paymentMethodCreditCard = document.querySelector('#payment');
    let form = document.querySelector('form');

    let selected = paymentMethodCreditCard.options[1];
    // Card Number 

    // field must contain a 13 - 16 digit credit card number with no dashes or spaces
    let cardNumber = document.querySelector('#cc-num').value;
    let regCardNum = /[0-9]{13,16}/;

    // Zip code
    // "Zip code" field must contain a 5 digit number.

    let zipCode = document.querySelector('#zip').value;
    let regZipCode = /[0-9]{5}/;


    // CVV
    // The "CVV" field must contain a 3 digit number
    let cvv = document.querySelector('#cvv').value;
    let regCVV = /[0-9]{3}/;
    


    let validCC = true;

    paymentMethodCreditCard.addEventListener('change', ()=> {
        form.addEventListener('submit', (e)=>{
            console.log(paymentMethodCreditCard, paymentMethodCreditCard.selectedIndex)
            if (e.target.options[paymentMethodCreditCard.selectedIndex] === selected){
                if(!regCardNum.test(cardNumber) || cardNumber === ''){
                    validCC = false;
                    ccHint.classList.remove('hint');
                } 
    
                if (!regZipCode.test(zipCode) || zipCode === ''){
                    validCC = false;
                    zipHint.classList.remove('hint');
                } 
                
                if (!regCVV.test(cvv) || cvv === ''){
                    validCC = false;
                    cvvHint.classList.remove('hint');
                }
            } 
            return validCC;
        });
    });
}


function formValidate(){
    let form = document.querySelector('form');
    

    form.addEventListener('submit', (e)=>{
        creditCardChecker();

        if (!nameIsValid()){
            e.preventDefault();
            nameHint.classList.remove('hint');
        }

        if (!isEmailValid()){
            e.preventDefault();
            emailHint.classList.remove('hint');
        }

        if (!activityChecker()){
            e.preventDefault();
            activitiesHint.classList.remove('hint');
        }

        if (!creditCardChecker()){
            e.preventDefault();
        }
    });
}

formValidate();

// Accessibility
// Program all of the activity checkbox input elements to listen for the focus and blur events.
// When the focus event is detected, add the ".focus" className to the checkbox input’s parent label element.
// When the blur event is detected, remove the .focus className from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it.

function focusHelperFunc(ele){
    ele.parentElement.classList.add('focus');
};

function blurHelperFunc(ele){
    ele.parentElement.classList.remove('focus');
    ele.parentElement.classList.add('blur');
    console.log(ele.parentElement)
}
function accessiblityFunc(){
    let activities = document.querySelectorAll("#activities-box label input");

    for (let i = 0; i < activities.length; i++){
        console.log(activities[i].parentElement)
        activities[i].addEventListener('keyup',(e)=>{
            if(activities[i] === e.target){
                focusHelperFunc(e.target);
            } 
            if (activities[i].parentElement.classList === 'focus'){
                blurHelperFunc(e.target);
            } 
        });

        activities[i].addEventListener('keyup', (e)=>{
            if (activities[i] !== e.target){
                blurHelperFunc(e.target);
            } 
        });
    }
}

accessiblityFunc();