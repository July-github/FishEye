/***** Dropdown filters *****/
import {displayPictures, computeLikes} from './photographer_grid.js';
import {listenToDisplayLightbox} from './lightbox.js';

export async function sortPictures(data){    
    const likesSort = document.getElementById('Likes');
    const dateSort = document.getElementById('Date');
    const titleSort = document.getElementById('Title');
	const photographersGrid = document.querySelector('.picture-card-grid');

    likesSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByLikes(data)
        listenToDisplayLightbox(data);
        computeLikes()
        });

    dateSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByDate(data)
        listenToDisplayLightbox(data);
        computeLikes()
        });

    titleSort.addEventListener('click', function(){
        photographersGrid.innerHTML=''
        sortByTitle(data)
        listenToDisplayLightbox(data);
        computeLikes()
        });
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