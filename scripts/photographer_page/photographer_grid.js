/***** Display pictures *****/
import {getId} from '../photographer.js';
import {Media} from '../factories/media.js';
import {Api} from '../api/Api.js';

//Template creation of the media
function photographerGrid(data){
	const { title, likes, id } = data;

	const card = document.createElement('div');
	card.setAttribute('class', 'picture_card');
	card.setAttribute('id', id);

	const cardText = document.createElement('div');
	cardText.setAttribute('class', 'picture_text');
	const text = document.createElement('h3');
	text.textContent = title;
	const cardLikes = document.createElement('div');
	cardLikes.setAttribute('class', 'likes');
	const likesNumber = document.createElement('p');
	likesNumber.setAttribute('class', 'like-picture');
	const cardHeart = document.createElement('a');
	cardHeart.setAttribute('href', '#');
	cardHeart.setAttribute('aria-label', 'likes');
	const likesHeart = document.createElement('i');
	likesHeart.setAttribute('class', 'fas fa-heart');
	cardHeart.appendChild(likesNumber);
	cardHeart.appendChild(likesHeart);
	cardLikes.appendChild(cardHeart)
	cardText.appendChild(text);
	likesNumber.textContent = likes;
	const likesText = cardText.appendChild(cardLikes);
	likesText.appendChild(likesNumber);
	likesText.appendChild(cardHeart);
	card.appendChild(cardText);

	return card
}

//Medias filter with photographer's ID
function filterPictures(datas){
	const idPhotographer = getId();
	const userPics = datas.filter(data => data.photographerId == idPhotographer)
	return userPics
}

//Get photographer's datas
export async function getUserMedias(){    
    //Get photographer's datas
    const photographer = new Api('../data/photographers.json');
    const medias = await photographer.get();
    const pics = medias.media;

    const userPicsFiltered = await filterPictures(pics);

    return userPicsFiltered
}

//Display photographer's medias
export function displayPictures(data){
	const grid = document.querySelector('.picture-card-grid');

	[...data].forEach((el) => {
		const photographerPictureTextModel = photographerGrid(el);
		const cardMedia = grid.appendChild(photographerPictureTextModel);
		
		const media = new Media(el)
		const template = media.createMedia(el)
		cardMedia.insertBefore(template, cardMedia.firstChild)
	})
}


/***** Medias likes *****/
//Push Likes to userGrids array
function pushLikeToGrid(data, likePicture, newLikeNum){
	data.forEach((el) => {
		if(el.id == likePicture.id){
			el.likes = newLikeNum;
		}
		return data
	})
}

//Likes incrementation & display
export function computeLikes(data){
	const likePictures = document.querySelectorAll('.picture_card');

	likePictures.forEach(likePicture => likePicture.addEventListener('click', function (){
		const likeNumber = likePicture.querySelector('.like-picture');
		const likeNum = Number(likeNumber.textContent);		
		const newLikeNum = likeNum+1;
		likeNumber.textContent = newLikeNum;

		pushLikeToGrid(data, likePicture, newLikeNum)

		const newSum = displaySumLikes()+1;

		return newLikeNum, newSum
		})
	);
	
}

//Display sum of likes
export function displaySumLikes(){
	const likeMediasDOM = document.querySelector('.likes-total');		
	const likes = [...document.querySelectorAll('.like-picture')];
	const likePicturesNumber = likes.map(like => Number(like.textContent))
	const sum = [...likePicturesNumber].reduce(function(a, b){
			return a+b;
		}, 0)

	likeMediasDOM.innerHTML = sum + ' <i class="fas fa-heart" aria-label="likes sum"></i>';

	return sum
}