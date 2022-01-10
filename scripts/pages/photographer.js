// Display photographer page
/***** Display dropdown *****/
import {displayDropbtn} from '../utils/dropdown.js';

displayDropbtn();

/***** Medias likes *****/
import {displayPicturesInfo} from './photographer_page/photographer_grid.js'

export function getId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    return id
}

displayPicturesInfo();