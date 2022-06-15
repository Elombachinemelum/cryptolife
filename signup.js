const eyeIcon = document.querySelector("[data-eyeIcon]");
const showLoginForm = document.querySelector("[data-loginForm]");
const showPasswordForm = document.querySelector("[data-passwordForm]");
const passwordForm = document.querySelector("[data-forPassword]");
const loginForm = document.querySelector("[data-forLogin]");
const passwordInput = document.querySelector("[data-passwordInput]");


eyeIcon.addEventListener("click", ()=>{
    if(passwordInput.type == "password") passwordInput.setAttribute("type", "text");
    else passwordInput.setAttribute("type", "password");
});

showPasswordForm.addEventListener("click", ()=>{
    // hide loginform
    loginForm.hidden = true;
    // show password form
    passwordForm.removeAttribute("hidden");
    showPasswordForm.classList.add('no-display');
});

showLoginForm.addEventListener("click", ()=>{
    // hide password form
    passwordForm.hidden = true;
    // show login form
    loginForm.removeAttribute("hidden");
    // show toggle for returning to password form
    showPasswordForm.classList.remove("no-display");
});