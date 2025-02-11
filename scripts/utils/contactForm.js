/***** Contact modal *****/

// Email validation
function validateEmail(mail) {
  const inputEmail = document.getElementById('email_input');
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
    inputEmail.removeAttribute('aria-invalid', 'true');
    return true;
  }
}

export function listenToMail(){
  //getting field email
  const mail = document.querySelector('#email_input');
  
  mail.addEventListener("input", function() {
      validateEmail(this);
    });
}

// Display contact modal
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const close = document.getElementById('close_modal_mark');
    const legend = document.getElementById('legend_modal'); 
    const name = document.querySelector('h1').innerText;

    modal.style.display = "block";
    main.style.opacity = "0.5";
    close.focus();
    modal.setAttribute('aria-modal', 'true');
    main.setAttribute('tabindex', '-1');
    legend.innerHTML = 'Contactez-moi </br>' + name;
}

// Close contact modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const contact = document.getElementById('display_modal_mark');
    const legend = document.getElementById('legend_modal'); 

    modal.style.display = "none";
    main.style.opacity = "1";
    contact.focus();
    modal.setAttribute('aria-modal', 'false');
    main.removeAttribute('tabindex');
    legend.innerHTML = "";
}

// Listen to contact modal button
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

// Escape contact modal with esc key
function escapeModal(){
  document.addEventListener('keyup', function(e){
    if(e.key === 27 || e.key === 'Esc' || e.key === 'Escape'){
      closeModal();
    }
  })
}

// Sending infos to console
function consoleFormInput(){
    const firstname = document.querySelector('#firstname_input')
    const lastname = document.querySelector('#lastname_input')
    const mail = document.querySelector('#email_input')
    const message = document.querySelector('#message_input')

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
