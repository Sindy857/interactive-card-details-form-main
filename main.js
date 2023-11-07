const cardName = document.querySelector("#name");
const cardNumber = document.querySelector("#card-num");
const expMonth = document.querySelector("#month");
const expYear = document.querySelector("#year");
const cvc = document.querySelector("#cvcInput");
const confirmBtn = document.querySelector("#confirmBtn");
const thankYouMessage = document.querySelector("#thank-you");
const formElement = document.getElementById("formElement");
const continueBtn = document.getElementById('continueBtn');
const errorName = document.getElementById('errorName');
const errorNum = document.getElementById('errorNum');
const errorDate = document.getElementById('errorDate');
const errorCvc = document.getElementById('errorCvc');

let cardNum = document.getElementById("fullCardNumber");
let fullName = document.getElementById("fullName");
let cardDate = document.querySelector("#card-date");
let currentCardDate;
let cardCvc = document.querySelector("#cvc");

cardName.addEventListener('input', event => {
    if (cardName.value !== ""){
        fullName.innerText = cardName.value
        cardName.classList.remove("invalid-input")
        errorName.classList.remove("error")
        errorName.style.display = "none"
    }else {
        cardName.classList.add("invalid-input")
        errorName.style.display = "block"
        errorName.style.color = "red"
        errorName.style.fontSize = "0.6rem"
    }
})

cardNumber.addEventListener('input', event => {
    const numericValue = cardNumber.value.replace(/\s/g, ''); // Entferne Leerzeichen und prüfe auf numerische Werte
    if (numericValue !== "" && !isNaN(numericValue) && numericValue.length <= 16) {
        const formattedValue = formatCardNumber(numericValue);
        cardNum.innerText = formattedValue;
        cardNumber.classList.remove("invalid-input");
        errorNum.style.display = "none";
    } else if (isNaN(numericValue)) {
        errorNum.style.display = "block";
        errorNum.style.color = "red";
        errorNum.style.fontSize = "0.6rem";
        cardNumber.classList.add("invalid-input");
    } else {
        cardNumber.classList.add("invalid-input");
    }
});


function formatCardNumber(value) {
    const formattedValue = value.replace(/\s/g, '').match(/.{1,4}/g);
    if (formattedValue) {
        return formattedValue.join(' ');
    }
    return value;
}

expMonth.addEventListener('input', validateCardDate);
expYear.addEventListener('input', validateCardDate);

function validateCardDate() {
    const monthValue = expMonth.value;
    const yearValue = expYear.value;
    
    if (monthValue !== "" && yearValue !== "" && monthValue.length <= 2 && yearValue.length <= 2) {
        cardDate.innerText = monthValue + "/" + yearValue;
        month.classList.remove("invalid-input")
        year.classList.remove("invalid-input")
        errorDate.style.display = "none"
    } else if (monthValue === "" || yearValue === "") {
        month.classList.add("invalid-input")
        year.classList.add("invalid-input")
        errorDate.style.display = "block"
        errorDate.style.color = "red"
        errorDate.style.fontSize = "0.6rem"
    } else {
        cardDate.innerText = "";
        month.classList.add("invalid-input")
        year.classList.add("invalid-input")
    }
}

cvc.addEventListener('input', event => {
    if (cvc.value !== "" && cvc.value.length <= 3) {
        cardCvc.innerText = cvc.value
        cvc.classList.remove("invalid-input")
        errorCvc.style.display = "none"
    } else if (cvc.value === "") {
        cvc.classList.add("invalid-input")
        errorCvc.style.display = "block"
        errorCvc.style.color = "red"
        errorCvc.style.fontSize = "0.6rem"
    } else {
        cvc.classList.add("invalid-input")
    }
})

confirmBtn.addEventListener('click', event => {
    event.preventDefault()
    if (cardName.value !== "" && cardNumber.value !== "" && expMonth.value !== "" && expYear.value !== "" && cvc.value !== "") {
        cardName.value = ""
        cardNumber.value = ""
        expMonth.value = ""
        expYear.value = ""
        cvc.value = ""
        cardNum.innerText = "0000 0000 0000 0000"
        fullName.innerText = "Jane Appleseed"
        cardDate.innerText = "00/00"
        currentCardDate = ""
        cardCvc.innerText = "000"
        thankYouMessage.style.display = "block"
        formElement.style.display = "none"
    }
})

continueBtn.addEventListener('click', event => {
    location.reload()
})
















