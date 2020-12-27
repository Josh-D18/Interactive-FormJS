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

function activitiesFunc(){
    let activitiesButtons = document.querySelectorAll('.activities label input'); 
    let activities = document.querySelector("#activities");
    let totalCost = document.querySelector('#activities-cost');

     // Number to track amount added to Total
        let totalAmount = 0;

    activities.addEventListener('change', (e)=>{
        let cost = document.querySelector('#activities-cost');
        let clicked = e.target;
        let clickedCost = parseInt(e.target.getAttribute('data-cost'));


        // Loop to Check If Button Clicked Matches
        for (let i = 0;i < activitiesButtons.length; i++){
            
            let money = parseInt(activitiesButtons[i].getAttribute('data-cost'));

            if (clickedCost === money && clicked !== activitiesButtons[i]){
                if (clicked.checked){
                    totalAmount = totalAmount += money;
                    console.log(totalAmount);
                } else {
                    totalAmount = money -= totalAmount;
                    console.log(totalAmount);
                }
            }
        }
        cost.textContent = `Total: $${totalAmount}`;
    });
}

activitiesFunc();