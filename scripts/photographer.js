// Display photographer page
import {displayDropbtn} from './utils/dropdown.js';
import {display} from './photographer_page/photographer_grid.js'
import {sendConsole, listenToMail, listenToCloseModal, listenToDisplayModal} from './utils/contactForm.js';

/***** Display dropdown *****/

displayDropbtn();


/***** Display grid *****/

export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}
display();


/***** Modal *****/

listenToMail();
sendConsole();
listenToDisplayModal();
listenToCloseModal();
