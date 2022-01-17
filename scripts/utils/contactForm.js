function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
	modal.style.display = "block";
    main.style.opacity = "0.5";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    modal.style.display = "none";
    main.style.opacity = "1";
}

//********* validation email ************
//getting field email
const mail = document.querySelector('#mail > input');
//getting error field 'formData'
const errorEmail = document.querySelector('#mail');

//listening to a change from the field email
mail.addEventListener("input", function() {
  validateEmail(this);
});

function validateEmail(mail) {
  //regex creation
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
  //regex test on the field email
  const validEmail = regexEmail.test(mail.value);

  if(validEmail === false) {
    //mail.setAttribute("data-error", true);
    errorEmail.setAttribute("data-error", "L'adresse électronique est invalide");
    return false;
  }else{
    //mail.removeAttribute("data-error");
    errorEmail.removeAttribute("data-error");
    return true;
  }
}

function consoleFormInput(){
    const firstname = document.querySelector('#firstname > input')
    const lastname = document.querySelector('#lastname > input')
    const mail = document.querySelector('#mail > input')
    const message = document.querySelector('#message > textarea')

    console.log('Firstname : ' + firstname.value)
    console.log('Lastname : ' + lastname.value)
    console.log('E-mail : ' + mail.value)
    console.log('Message : ' + message.value)
}

function sendConsole(){
    const send = document.querySelector('form > .contact_button');
    const form = document.querySelector('form');

    send.addEventListener('click', function(e){
        e.preventDefault();
        consoleFormInput();
        closeModal()
        form.reset()
    })
}
sendConsole()