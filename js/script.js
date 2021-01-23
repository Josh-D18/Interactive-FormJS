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

        
        // Total Price
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
    let checker = false;
    
    for (let i = 0; i < activities.length; i++){
        if (activities[i].checked){
            checker = true;
        }
    }
    return checker;
}




// Credit Card Number Variables

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

    let paymentMethodCreditCard = document.querySelector('#payment');


function formValidate(){
    let form = document.querySelector('form');
    

    form.addEventListener('submit', (e)=>{
        if (!nameIsValid()){
            nameHint.classList.remove('hint');
        }

        if (!isEmailValid()){
            emailHint.classList.remove('hint');
        }

        if (!activityChecker()){
            activitiesHint.classList.remove('hint');
        }

        if (paymentMethodCreditCard.options[1].selected){
            if(!regCardNum.test(cardNumber) || cardNumber === ''){
                ccHint.classList.remove('hint');
            } 

            if (!regZipCode.test(zipCode) || zipCode === ''){
                zipHint.classList.remove('hint');
            } 
            
            if (!regCVV.test(cvv) || cvv === ''){
                cvvHint.classList.remove('hint');
            }
        }
    });
}

formValidate();

// Accessibility

// Program all of the activity checkbox input elements to listen for the focus and blur events.
// When the focus event is detected, add the ".focus" className to the checkbox input’s parent label element.
// When the blur event is detected, remove the .focus className from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it.



// Helper Functions 


function focusHelperFunc(ele){
    ele.parentElement.classList.add('focus');
};


function blurHelperFunc(ele){
    ele.parentElement.classList.remove('focus');
    ele.parentElement.classList.add('blur');
};



function focusBlurFunc(){
    let activities = document.querySelectorAll("#activities-box label input");

    for (let i = 0; i < activities.length; i++){
        activities[i].addEventListener('focus',(e)=>{
            if(activities[i] === e.target){
                focusHelperFunc(e.target);
            }
        });

        activities[i].addEventListener('blur', (e)=>{
            if (activities[i] === e.target){
                blurHelperFunc(e.target);
            } 
        });
    }
}



function formErrorsFunc(){
    let form = document.querySelector('form');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let activities = document.querySelector("#activities-box");

    let cardNumber = document.querySelector('#cc-num');
    let zipCode = document.querySelector('#zip');
    let cvv = document.querySelector('#cvv');


    form.addEventListener('submit', (e)=>{
        if (!nameIsValid()){
            e.preventDefault();
            name.parentElement.classList.add('not-valid');
        }

        if (!isEmailValid()){
            e.preventDefault();
            email.parentElement.classList.add('not-valid');
        }

        if (!activityChecker()){
            e.preventDefault();
            activities.parentElement.classList.add('not-valid');
        }

        if (paymentMethodCreditCard.options[1].selected){
            if(!regCardNum.test(cardNumber.value) || cardNumber.value === ''){
                e.preventDefault();
                cardNumber.parentElement.classList.add('not-valid');
            } 

            if (!regZipCode.test(zipCode.value) || zipCode.value === ''){
                e.preventDefault();
                zipCode.parentElement.classList.add('not-valid');
            } 
            
            if (!regCVV.test(cvv.value) || cvv.value === ''){
                e.preventDefault();
                cvv.parentElement.classList.add('not-valid');
            }
        }

        // If Valid

        if (nameIsValid()){
            name.parentElement.classList.add('valid');
            name.parentElement.classList.remove('not-valid');
            nameHint.classList.add('hint');
        }

        if (isEmailValid()){
            email.parentElement.classList.add('valid');
            email.parentElement.classList.remove('not-valid');
            emailHint.classList.add('hint');
        }

        if (activityChecker()){
            activities.parentElement.classList.add('valid');
            activities.parentElement.classList.remove('not-valid');
            activitiesHint.classList.add('hint');
        }

        if (paymentMethodCreditCard.options[1].selected){
            if(regCardNum.test(cardNumber.value)){
                cardNumber.parentElement.classList.add('valid');
                cardNumber.parentElement.classList.remove('not-valid');
                ccHint.classList.add('hint');
            } 
            
            if (regZipCode.test(zipCode.value)){
                zipCode.parentElement.classList.add('valid');
                zipCode.parentElement.classList.remove('not-valid');
                zipHint.classList.add('hint');
            } 
            
            if (regCVV.test(cvv.value)){
                cvv.parentElement.classList.add('valid');
                cvv.parentElement.classList.remove('not-valid');
                cvvHint.classList.add('hint');
            }
        }
    });
}


function accessiblityFunc(){
    focusBlurFunc();
    formErrorsFunc();
}

accessiblityFunc();

// When a user selects an activity, loop over all of the activities, check if any have the same day and time as the activity that was just checked/unchecked, and as long as the matching activity is not the activity that was just checked/unchecked, disable/enable the conflicting activity’s checkbox input and add/remove the ‘.disabled’ className to activity’s parent label element.


function isActivityChecked(){
    // let activities = document.querySelectorAll('#activities-box label');
    let activities = document.querySelectorAll('#activities-box label input');
    
    
    // Check if selection of costs conflict
    let listOfActivities = document.querySelector("#activities");


    listOfActivities.addEventListener('change', (e)=>{
        for (let i = 0; i < activities.length; i++){
            let dateAndTime = activities[i].dataset.dayAndTime;

            if (activities[i].dataset.dayAndTime === dateAndTime && activities[i].checked){
                console.log(activities[i].checked, dateAndTime);
                activities[i].parentElement.classList.add('disabled');
            } else{
                activities[i].parentElement.classList.remove('disabled');
            }
        }
    });
}

isActivityChecked();