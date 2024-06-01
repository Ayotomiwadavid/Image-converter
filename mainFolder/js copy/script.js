//SELECTING ALL ELEMENTS IN THE FIRST DROPDOWN
let uploadedDropDown = document.querySelector('#imageUploadedType_Dropdown');
let firstselectDisplay = document.querySelector('#fiirst_Select_Dispaly');
let firstSelectListDropDown = document.querySelector(".select-dropdown__list");
let firstSelectList = document.querySelectorAll(".select-dropdown__list li");

let fileUploadedType;
let toBeConvertedTo;

//ADDING AN EVENT LISTENER TO FIRST DROPDOWN
uploadedDropDown.addEventListener('click', () => {
    console.log('clicked!!')
    firstSelectListDropDown.classList.toggle('active');
});

//ADDING AN EVENT LISTENER TO EVERY SELECT IN THE FIRST DROPDOWN
firstSelectList.forEach(element => {
    element.addEventListener('click', () => {
        let currentValue = element.getAttribute('data-value');
        firstselectDisplay.innerHTML = currentValue;
        fileUploadedType = currentValue;
    });
});

//SELECTING REQUIRED ELEMENTS IN THE SECOND DROPDOWN
let fileThree = document.querySelector('.file-three');
let secondDisplay = document.querySelector('.js-link');
let secondDropdown = document.querySelector('.js-dropdown-list');
let secondDropdownList = document.querySelectorAll('.js-dropdown-list li');


secondDropdownList.forEach(element => {
    element.addEventListener('click', () => {
        let currentValue = element.getAttribute('data-value');
        toBeConvertedTo = currentValue;
    });
});