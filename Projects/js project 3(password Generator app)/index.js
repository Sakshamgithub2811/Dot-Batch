const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|;:"<,>.?\?';

let password = "";
let passwordLength = 10;
let checkCount = 0;

setIndicator("#ccc");
handleSlider();


// handle slider: set password length
//handleslider ka kam itna hai ki ui per slider ki value show karwana hai 
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max - min)) + "% 100"
    
}
// set Indicator color karna hai 
function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123)); //imp:
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91)); 
}

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}
// password Strength calculate karta hai :
function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");
    }
    else if ( (hasLower || hasUpper) &&(hasNum || hasSym) && passwordLength >=6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}
// copy content :
async function copyContent(){
  try{
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  }
  catch(e){
    copyMsg.innerText = "failed";
  } 
  copyMsg.classList.add("active");

  setTimeout(() =>{
     copyMsg.classList.remove("active");
  },2000);

}

inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();
})

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkCount++;
    });
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

// hame checkboxes per bi listner lagaran padega kuki aunka count bi hame 
generateBtn.addEventListener('click',()=>{
// none of the checkbox are selected
    if (checkCount<=0) return ;

    if(passwordLength < checkCount){
    passwordLength = checkCount;
    handleSlider();
    }
    // to find the new password
    console.log("starting");
    //remove old password:
    password = "";
    //put all the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked){
    //     password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked){
    //     password += generateLowerCase();
    // }
    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }
    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [];
    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition     
    for(let i=0; i<funcArr.length;i++){
        password +=funcArr[i]();
    }
    console.log("compulsor addition done");
    //remaining additions 
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex = getRndInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }
    console.log("remaining addition done");
    //shuffle the password
    password =  shufflePassword(Array.from(password));
    //show in ui 
    console.log("shuffling  done");
    passwordDisplay.value = password;
    console.log("ui   done");
    //calculate strength 
    calcStrength();
})

function shufflePassword(array){
    //fisher yates method :
    for (let i=array.length-1;i>0;i--){
        const j= Math.floor(Math.random() *(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str= "";
    array.forEach((el) =>(str += el));
    return str;
}

  

