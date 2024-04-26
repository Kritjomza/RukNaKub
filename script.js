var password = "";
var expectedPassword = "171393"; // รหัสผ่านที่คาดหวัง

function addDigit(digit) {
    password += digit.toString();
    displayPassword();
    animatePasswordDisplay();
    updateDigitCount();
    checkPassword();
}

function displayPassword() {
    document.getElementById("passwordDisplay").textContent = password;
}

function animatePasswordDisplay() {
    document.getElementById("passwordDisplay").classList.add("animated");
}

function checkPassword() {
    if (password.length === expectedPassword.length) {
        if (password === expectedPassword) {
            showMessage("รหัสถูก..เย้ะะ🥳");
            window.location.href = "success.html";
        } else {
            showMessage("รหัสผิดจ้าาา😜");
        }
        resetPassword();
    }
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}

function resetPassword() {
    password = "";
    displayPassword();
    updateDigitCount();
}

function clearInput() {
    resetPassword();
}

function updateDigitCount() {
    document.getElementById("digitCount").textContent = "จำนวนตัวเลข: " + password.length;
}
