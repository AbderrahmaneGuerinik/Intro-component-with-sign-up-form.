const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const EmailInput = document.querySelector('#email');
const PasswordInput = document.querySelector('#password');
const divName = document.querySelector('#div-name');
const divLast = document.querySelector('#div-last');
const divEmail = document.querySelector('#div-email');
const divPassword = document.querySelector('#div-password');
const firstNameLabel = document.querySelector("#first-name-label");
const lastNameLabel = document.querySelector("#last-name-label");
const PasswordLabel = document.querySelector("#password-label");
const EmailLabel = document.querySelector("#email-label");
const submit = document.querySelector('.sign_submit');

const regexVide = /^(\s*)$/;
const regexName = /^[a-zA-Z]+$/;
const regexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


 
let verifyError = () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = EmailInput.value;
    const password = PasswordInput.value;
    if((regexVide.test(firstName)) || (!regexName.test(firstName))) {
        divName.classList.add('icon-error');
        if(!regexVide.test(firstName)) {
            firstNameLabel.innerHTML = "Enter your real first name";
          }
      firstNameInput.value = '';
      firstNameInput.classList.add('border-error');
      firstNameInput.classList.add('placeholder-error');
      firstNameInput.classList.add('mb-2');
      firstNameInput.classList.remove('mb-1')
      firstNameLabel.classList.add('show');

    }

    if((regexVide.test(lastName)) || (!regexName.test(lastName))) {
        divLast.classList.add('icon-error');
        if(!regexVide.test(lastName)) {
            lastNameLabel.innerHTML = "Enter your real last name";
          }
      lastNameInput.value = '';
      lastNameInput.classList.add('border-error');
      lastNameInput.classList.add('placeholder-error');
      lastNameInput.classList.add('mb-2');
      lastNameInput.classList.remove('mb-1')
      lastNameLabel.classList.add('show');
    }


    if((regexVide.test(email))|| (!regexEmail.test(email))) {
        divEmail.classList.add('icon-error');
        if(!regexVide.test(email)) {
            EmailLabel.innerHTML = "Enter your real email";
          }
      EmailInput.value = '';
      EmailInput.classList.add('border-error');
      EmailInput.classList.add('placeholder-error');
      EmailInput.classList.add('mb-2');
      EmailInput.classList.remove('mb-1');
      EmailInput.placeholder = "email@example/com"
      EmailLabel.classList.add('show');
    }


    if((regexVide.test(password))) {
        divPassword.classList.add('icon-error');
      PasswordInput.value = '';
      PasswordInput.classList.add('border-error');
      PasswordInput.classList.add('placeholder-error');
      PasswordInput.classList.add('mb-2');
      PasswordInput.classList.remove('mb-1');
      PasswordLabel.classList.add('show');
    }
    
} 

submit.addEventListener('click',verifyError);

 


