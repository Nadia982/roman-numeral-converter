const convertBtn = document.getElementById("convert-btn");

const numberInput = document.getElementById("number");
const output = document.getElementById("output");
// output.style.borderColor = "red";

function convertToRoman(input) {
    let numeralString = "";
    numeralString += Math.floor(input/1000).toString();

    // M	1000
    // D	500
    // C	100
    // L	50
    // X	10
    // V	5
    // I	1
}

function processInput() {
  if (numberInput.value == "") {
    output.innerText = "Please enter a valid number";
  } else if (numberInput.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    convertToRoman(numberInput.value);
  }
}

convertBtn.addEventListener("click", processInput);

// When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
// When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
// When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
// When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
// When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"
