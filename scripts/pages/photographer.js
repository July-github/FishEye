// Display photographer page
/***** Display grid *****/
import {getPhotographersData, displayHeaderData} from './photographer_page/photographer_header.js';
import {getPhotographersPicturesData, displayPictures} from './photographer_page/photographer_grid.js';
import {sortByDate} from './photographer_page/photographer_sort.js';

export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}

export async function display() {
    // Récupère les datas des photographes
    const { photographersDatas } = await getPhotographersData();
	const { photographersPictures } = await getPhotographersPicturesData();
	displayHeaderData(photographersDatas);
	displayPictures(photographersPictures);
	sortByDate(photographersPictures);
}

/***** Display dropdown *****/
import {displayDropbtn} from '../utils/dropdown.js';

displayDropbtn();

/***** Medias likes *****/
import {displayPicturesInfo} from './photographer_page/photographer_grid.js'

displayPicturesInfo();
