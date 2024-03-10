const SliderEl = document.querySelector("#MainSlider");
const LenthNumberEl = document.querySelector("#Lenth_Number");
const CheckBox1El = document.querySelector("#checkbox1");
const CheckBox2El = document.querySelector("#checkbox2");
const CheckBox3El = document.querySelector("#checkbox3");
const CheckBox4El = document.querySelector("#checkbox4");
const MainBTNEl = document.querySelector(".Main-BTN");
const MainBTN2El = document.querySelector(".Main-BTN2");
const CharacterStrenghtEl = document.querySelector("#Character_Strenght");
const Column1El = document.querySelector("#Column1");
const Column2El = document.querySelector("#Column2");
const Column3El = document.querySelector("#Column3");
const Column4El = document.querySelector("#Column4");
const PasswordEl = document.querySelector(".Password");

const UpLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";

const PassNumbers = "0123456789";

const PassSymbols = "!@#$%^&*()_+";

SliderEl.oninput = function () {
  LenthNumberEl.textContent = this.value;
};

MainBTN2El.addEventListener('click', ()=>{
    let password = "";

    let DwLetters = "qwertyuiopasdfghjklzxcvbnm";

    if(CheckBox1El.checked){
        DwLetters += UpLetters;
    }
    if(CheckBox2El.checked){
        DwLetters;
    }
    if(CheckBox3El.checked){
        DwLetters += PassNumbers;
    }
    if(CheckBox4El.checked){
        DwLetters += PassSymbols;
    }
  
    for (let i = 0; i < SliderEl.value; i++) {
      password += DwLetters[Math.floor(Math.random() * DwLetters.length)];
      console.log(Math.floor(Math.random() * DwLetters.length));
    }

    PasswordEl.textContent = password;
});

MainBTNEl.addEventListener("click", () => {
  

  if (
    CheckBox1El.checked &&
    CheckBox2El.checked &&
    CheckBox3El.checked &&
    CheckBox4El.checked
  ) {
    CharacterStrenghtEl.textContent = "STRONG";
    Column1El.style.backgroundColor = "rgba(5, 116, 247, 1)";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "rgba(5, 116, 247, 1)";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "rgba(5, 116, 247, 1)";
    Column3El.style.border = "none";
    Column4El.style.backgroundColor = "rgba(5, 116, 247, 1)";
    Column4El.style.border = "none";
  } else if (
    (CheckBox1El.checked && CheckBox2El.checked) ||
    (CheckBox1El.checked && CheckBox3El.checked) ||
    (CheckBox1El.checked && CheckBox4El.checked) ||
    (CheckBox2El.checked && CheckBox1El.checked) ||
    (CheckBox2El.checked && CheckBox3El.checked) ||
    (CheckBox2El.checked && CheckBox3El.checked) ||
    (CheckBox3El.checked && CheckBox1El.checked) ||
    (CheckBox3El.checked && CheckBox2El.checked) ||
    (CheckBox3El.checked && CheckBox4El.checked) ||
    (CheckBox4El.checked && CheckBox1El.checked) ||
    (CheckBox4El.checked && CheckBox2El.checked) ||
    (CheckBox4El.checked && CheckBox3El.checked)
  ) {
    CharacterStrenghtEl.textContent = "MEDIUM";
    Column1El.style.backgroundColor = "#F8CD65";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#F8CD65";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "#F8CD65";
    Column3El.style.border = "none";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";
  } else if (CheckBox1El.checked) {
    CharacterStrenghtEl.textContent = "WEAK";
    Column1El.style.backgroundColor = "#FB7C58";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#FB7C58";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "#18171F";
    Column3El.style.border = "1px solid #E6E5EA";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";
  } else if (CheckBox2El.checked) {
    CharacterStrenghtEl.textContent = "WEAK";
    Column1El.style.backgroundColor = "#FB7C58";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#FB7C58";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "#18171F";
    Column3El.style.border = "1px solid #E6E5EA";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";

  } else if (CheckBox3El.checked) {
    CharacterStrenghtEl.textContent = "WEAK";
    Column1El.style.backgroundColor = "#FB7C58";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#FB7C58";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "#18171F";
    Column3El.style.border = "1px solid #E6E5EA";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";

  } else if (CheckBox4El.checked) {
    CharacterStrenghtEl.textContent = "WEAK";
    Column1El.style.backgroundColor = "#FB7C58";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#FB7C58";
    Column2El.style.border = "none";
    Column3El.style.backgroundColor = "#18171F";
    Column3El.style.border = "1px solid #E6E5EA";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";

  } else if (
    !CheckBox1El.checked &&
    !CheckBox2El.checked &&
    !CheckBox3El.checked &&
    !CheckBox4El.checked
  ) {
    CharacterStrenghtEl.textContent = "SO WEAK!";
    Column1El.style.backgroundColor = "#F64A4A";
    Column1El.style.border = "none";
    Column2El.style.backgroundColor = "#18171F";
    Column2El.style.border = "1px solid #E6E5EA";
    Column3El.style.backgroundColor = "#18171F";
    Column3El.style.border = "1px solid #E6E5EA";
    Column4El.style.backgroundColor = "#18171F";
    Column4El.style.border = "1px solid #E6E5EA";
  }

});
