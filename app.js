// Development started on 10-06-2020

/* Create a data structure containing the following
    1. User
    2. Responsible Person
    3. start range
    4. end range
    5. quantities */




/* Replace dropdown button text - with JQuery */ 
$(".dropdown-menu a").click(function(){
    $(this).parents(".btn-group").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

/*--------------------------------------------*/
let locationSelected, userSelected;

/* Get Value of selected dropdown button */
let dropDownUsers = document.getElementById("dropdown_Users");

dropDownUsers.addEventListener('click', event =>{
    if(event.target.classList.contains('dropdown-item')){
        return userSelected = event.target.innerHTML;
    }
});

let dropDownLocation = document.getElementById("dropdown_Locations");

dropDownLocation.addEventListener('click', e =>{
    if(e.target.classList.contains('dropdown-item')){
        return locationSelected = e.target.innerHTML;
    }
});



/* Calculate Range -------------------------------------------------------------------------*/

function calculateRange(startRng, endRng, userSelc, locationSelc){
    if(endRng > startRng){

        quantity = (endRng - startRng) + 1;

        let html = `<div class="alert alert-warning" id="quantity__range">%newString%</div>`;
        
        
        let newString = `Range Quantity: ${quantity}\nUser: ${userSelc}\nLocation: ${locationSelc} `;

        replacedHTML = html.replace('%newString%', newString);
        document.getElementById("range__Results").innerHTML =  replacedHTML;     

    } else {
        console.log("Start range > End Rage, Please Try Again");
    };
};

/* Get barcode values and run Event Listening of submit button --------------------------------------------- */ 

const myForm = document.getElementById("form_barCodeAdmin");

let submitButtonClicked = (function(){

    myForm.addEventListener("submit", (e) => {
        let startRange, endRange;

        dropDownUsers = document.getElementById("dropdown_Users");

        e.preventDefault(); // Prevents web page from reloading.
        
        startRange = document.getElementById("start__range").value;
        endRange = document.getElementById("end__range").value;

        calculateRange(startRange, endRange, userSelected, locationSelected);

        console.log(`User: ${userSelected} Location: ${locationSelected}`);
        
    });
})();

