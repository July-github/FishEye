/***** Dropdown filters *****/
import {displayPictures, computeLikes} from './photographer_grid.js';
import {listenToDisplayLightbox} from './lightbox.js';

//Sort click listening
export function sortPictures(data){    
    const likesSort = document.getElementById('Likes');
    const dateSort = document.getElementById('Date');
    const titleSort = document.getElementById('Title');
	const photographersGrid = document.querySelector('.picture-card-grid');

    likesSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByLikes(data)
        console.log(data)
        listenToDisplayLightbox(data);
        computeLikes(data)
    });

    dateSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByDate(data)
        listenToDisplayLightbox(data);
        computeLikes(data)
    });

    titleSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByTitle(data)
        listenToDisplayLightbox(data);
        computeLikes(data)
    });
}

//Sort functions
function sortByLikes(data){
    data.sort(function compare(a, b) {
        if (a.likes < b.likes){
            return 1;
        }if (a.likes > b.likes ){
            return -1;
        }return 0;
    });
    
    return displayPictures (data)
}

function sortByDate(data){
    data.sort(function compare(a, b) {
        if (a.date < b.date){
            return -1;
        }
        if (a.date > b.date ){
            return 1;
        }
        return 0;
    });
    
    return displayPictures (data)
}

function sortByTitle(data){
    data.sort(function compare(a, b) {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title )
            return 1;
        return 0;
    });
    return displayPictures (data)
}