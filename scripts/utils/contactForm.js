
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const lightbox = document.getElementById("lightbox");
    const close = document.getElementById('close_modal_mark')
    modal.style.display = "block";
    main.style.opacity = "0.5";
    close.focus();
    main.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('aria-hidden', 'true');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const contact = document.getElementById('display_modal_mark');
    const lightbox = document.getElementById("lightbox");
    modal.style.display = "none";
    main.style.opacity = "1";
    contact.focus();
    main.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-hidden', 'false');
}

export function listenToDisplayModal(){
  const display = document.getElementById('display_modal_mark')
  display.addEventListener('click', function(){
    displayModal();
    escapeModal();
  })
}

export function listenToCloseModal(){
  const close = document.getElementById('close_modal_mark')
  close.addEventListener('click', function(){
    closeModal();
  })
}

export function escapeModal(){
  document.addEventListener('keyup', function(e){
    if(e.key === 27 || e.key === 'Esc' || e.key === 'Escape'){
      closeModal();
    }
  })
}

//********* validation email ************  
//listening to a change from the field email

function validateEmail(mail) {
  const inputEmail = document.getElementById('email');
  const errorEmail = document.querySelector('#mail');
  //regex creation
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
  //regex test on the field email
  const validEmail = regexEmail.test(mail.value);

  if(validEmail === false) {
    errorEmail.setAttribute('data-error', "L'adresse électronique est invalide");
    inputEmail.setAttribute('aria-invalid', 'true');
    return false;
  }else{
    errorEmail.removeAttribute("data-error");
    inputEmail.setAttribute('aria-invalid', 'true');
    return true;
  }
}

export function listenToMail(){
  //getting field email
  const mail = document.querySelector('#email');
  
  mail.addEventListener("input", function() {
      validateEmail(this);
    });
  }

//Sending infos to console

function consoleFormInput(){
    const firstname = document.querySelector('#firstname')
    const lastname = document.querySelector('#lastname')
    const mail = document.querySelector('#email')
    const message = document.querySelector('#message')

    console.log('Firstname : ' + firstname.value)
    console.log('Lastname : ' + lastname.value)
    console.log('E-mail : ' + mail.value)
    console.log('Message : ' + message.value)
}

export function sendConsole(){
    const send = document.querySelector('form > .contact_button');
    const form = document.querySelector('form');

    send.addEventListener('click', function(e){
        e.preventDefault();
        consoleFormInput();
        closeModal()
        form.reset()
    })
}
