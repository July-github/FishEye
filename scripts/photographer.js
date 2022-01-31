// Display photographer page
import {getPhotographersData, displayHeaderData} from './photographer_page/photographer_header.js';
import {displayDropbtn} from './utils/dropdown.js';
import {displayPictures, displaySumLikes, computeLikes, getUserMedias} from './photographer_page/photographer_grid.js';
import {sortPictures} from './photographer_page/photographer_sort.js';
import {listenToDisplayLightbox} from './photographer_page/lightbox.js';
import {sendConsole, listenToMail, listenToCloseModal, listenToDisplayModal} from './utils/contactForm.js';

/***** Display dropdown *****/

displayDropbtn();


/***** Display header, grid & lightbox *****/
// Get photographer's Id
export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}

async function display() {
    // Get photographer's datas
    const { photographersDatas } = await getPhotographersData();
	const userGrids = await getUserMedias();
	
	displayHeaderData(photographersDatas);
	displayPictures(userGrids);
	displaySumLikes();
	computeLikes(userGrids);
	listenToDisplayLightbox(userGrids);
	sortPictures(userGrids);
}
display();


/***** Modal *****/

listenToMail();
sendConsole();
listenToDisplayModal();
listenToCloseModal();
