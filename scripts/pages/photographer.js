// Display photographer page
/***** Display dropdown *****/
import {displayDropbtn} from '../utils/dropdown.js';

displayDropbtn();


/***** Medias likes *****/
import {displaySumLikes, computeLikes, display} from './photographer_page/photographer_grid.js'

export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}

export async function displayPicturesInfo(){

	await display();
    
	computeLikes()
	displaySumLikes()
}
displayPicturesInfo();
