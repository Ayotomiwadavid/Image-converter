//SELECTING ALL ELEMENTS IN THE FIRST DROPDOWN
let uploadedDropDown = document.querySelector("#imageUploadedType_Dropdown");
let firstselectDisplay = document.querySelector("#fiirst_Select_Dispaly");
let firstSelectListDropDown = document.querySelector(".select-dropdown__list");
let firstSelectList = document.querySelectorAll(".select-dropdown__list li");
const resultImageCont = document.querySelector('.resultImageCont');
const image_PrivewCont = document.querySelector('.image-privewCont');

let fileUploadedType;
let toBeConvertedTo;

//ADDING AN EVENT LISTENER TO FIRST DROPDOWN
uploadedDropDown.addEventListener("click", () => {
  console.log("clicked!!");
  firstSelectListDropDown.classList.toggle("active");
});

//ADDING AN EVENT LISTENER TO EVERY SELECT IN THE FIRST DROPDOWN
firstSelectList.forEach((element) => {
  element.addEventListener("click", () => {
    let currentValue = element.getAttribute("data-value");
    firstselectDisplay.innerHTML = currentValue;
    fileUploadedType = currentValue;
  });
});

//SELECTING REQUIRED ELEMENTS IN THE SECOND DROPDOWN
let fileThree = document.querySelector(".file-three");
let secondDisplay = document.querySelector(".js-link");
let secondDropdown = document.querySelector(".js-dropdown-list");
let secondDropdownList = document.querySelectorAll(".js-dropdown-list li");

secondDropdownList.forEach((element) => {
  element.addEventListener("click", () => {
    let currentValue = element.getAttribute("data-value");
    toBeConvertedTo = currentValue;
  });
});

//PREPARING FILE TO BE SENT TO THE SERVER
const filesInput = document.querySelector("#files");
const convertButton = document.querySelector("#convertButton");
const postURL = "/uploadImage";

convertButton.addEventListener("click", async () => {
    // File uploaded
    const formData = new FormData();
    formData.append("file", filesInput.files[0]);
  
    try {
      // Send the POST request using fetch
      const response = await fetch(postURL, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        // If the response is successful, handle the binary data
        const blob = await response.blob();
  
        // Create a URL for the binary data (blob)
        const imageUrl = URL.createObjectURL(blob);
  
        // For example, if you want to display the image in an <img> tag:
        const imgElement = document.createElement("img");
        imgElement.classList.add('imagesdisplay')
        imgElement.src = imageUrl;
        resultImageCont.appendChild(imgElement);
        resultImageCont.href = imageUrl
        resultImageCont.download = imageUrl
        image_PrivewCont.classList.remove('hidden');
      } else {
        // Handle errors if the response is not successful
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      // Log any errors that occur during the fetch request
      console.error("Error:", error);
    }
  });
