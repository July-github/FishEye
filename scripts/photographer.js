// Display photographer page
/***** Display dropdown *****/
import {displayDropbtn} from './utils/dropdown.js';

displayDropbtn();


/***** Medias likes *****/
import {display} from './photographer_page/photographer_grid.js'
import {sortPictures} from './photographer_page/photographer_sort.js';

export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}
display();
/*export async function displayPicturesInfo(){

	await display();
    
    //computeLikes();
    //displaySumLikes();
	//sortPictures();

}
displayPicturesInfo();*/

/***** Modal *****/
import {sendConsole, listenToMail, listenToCloseModal, listenToDisplayModal} from './utils/contactForm.js';

listenToMail();
sendConsole();
listenToDisplayModal();
listenToCloseModal();