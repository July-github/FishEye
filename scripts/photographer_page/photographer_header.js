/***** Display header *****/
import {getId} from '../photographer.js';
import {Api} from '../api/Api.js';

//Template creation of the photographer's information
function photographerHeader(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const image = `Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserHeaderDOM() {
        const head = document.createElement( 'div' );
		head.setAttribute('class', 'photo_header');
        head.setAttribute('id', id);
        const h1 = document.createElement( 'h1' );
        const place = document.createElement( 'h2' );
        const tag = document.createElement( 'p' );
        place.textContent = city + ', ' + country;
        tag.textContent = tagline;
        h1.textContent = name;
        head.appendChild(h1);
        head.appendChild(place);
        head.appendChild(tag);
        return head
    }
    
	function getUserImageHeaderDOM(){
		const headImg = document.createElement( 'div' );
		const img = document.createElement( 'img' );
		img.setAttribute('src', image)
        img.setAttribute('alt', name)
		headImg.setAttribute('class', 'image_header')
		headImg.appendChild(img);
		return headImg
	}

    function getUserPriceDOM(){
        const priceText = document.querySelector('.price');
        priceText.innerHTML = price + '€/jour';
        return priceText
    }
    return { name, image, price, getUserHeaderDOM, getUserImageHeaderDOM, getUserPriceDOM }
}

//Display photographer's informations
export async function displayHeaderData() {
    const photographersHeader = document.querySelector(".photograph-header");
    
    //Get photographer's datas
    const photographer = new Api();
    const medias = await photographer.get();
    const photographerDatas = medias.photographers;

	photographerDatas.forEach((photographerData) => {
		if(photographerData.id == getId()){
			const photographerHeaderModel = photographerHeader(photographerData);
			const userHeaderDOM = photographerHeaderModel.getUserHeaderDOM();
			const userImageHeaderDOM = photographerHeaderModel.getUserImageHeaderDOM();
			photographersHeader.appendChild(userHeaderDOM);	
			photographersHeader.appendChild(userImageHeaderDOM);
            photographerHeaderModel.getUserPriceDOM();
		}
    });
}