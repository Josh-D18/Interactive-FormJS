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


        console.log(heartShirt);
        console.log(shirtStyle);

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
    let activities = document.querySelector('#activities-box'); 
    
    let totalCost = document.querySelector('#activities-cost');

    activities.addEventListener('click', (e)=>{
        console.log(e.target.value);
    });
}

activitiesFunc();