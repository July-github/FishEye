// display photographer page
/***** Display header *****/
async function getPhotographersData() {
    const photographersDatas = [
            {
                "name": "Mimi Keel",
                "id": 243,
                "city": "London",
                "country": "UK",
                "tagline": "Voir le beau dans le quotidien",
                "price": 400,
                "portrait": "MimiKeel.jpg"
            },
            {
                "name": "Ellie-Rose Wilkens",
                "id": 930,
                "city": "Paris",
                "country": "France",
                "tagline": "Capturer des compositions complexes",
                "price": 250,
                "portrait": "EllieRoseWilkens.jpg"
            },
            {
                "name": "Tracy Galindo",
                "id": 82,
                "city": "Montreal",
                "country": "Canada",
                "tagline": "Photographe freelance",
                "price": 500,
                "portrait": "TracyGalindo.jpg"
            },
            {
                "name": "Nabeel Bradford",
                "id": 527,
                "city": "Mexico City",
                "country": "Mexico",
                "tagline": "Toujours aller de l'avant",
                "price": 350,
                "portrait": "NabeelBradford.jpg"
            },
            {
                "name": "Rhode Dubois",
                "id": 925,
                "city": "Barcelona",
                "country": "Spain",
                "tagline": "Je crée des souvenirs",
                "price": 275,
                "portrait": "RhodeDubois.jpg"
            },
            {
                "name": "Marcel Nikolic",
                "id": 195,
                "city": "Berlin",
                "country": "Germany",
                "tagline": "Toujours à la recherche de LA photo",
                "price": 300,
                "portrait": "MarcelNikolic.jpg"
            }        
    ]
    return ({
        photographersDatas: [...photographersDatas]})
}

function photographerHeader(data) {
    const { name, id, portrait, city, country, tagline} = data;

    const image = `Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserHeaderDOM() {
        const head = document.createElement( 'photo_header' );
        head.setAttribute('id', id);
        const h2 = document.createElement( 'h2' );
        const place = document.createElement( 'h3' );
        const tag = document.createElement( 'span' );
        place.textContent = city + ', ' + country;
        tag.textContent = tagline;
        h2.textContent = name;
        head.appendChild(h2);
        head.appendChild(place);
        head.appendChild(tag);
        return (head);
    }
    
	function getUserImageHeaderDOM(){
		const headImg = document.createElement( 'image_header' );
		const img = document.createElement( 'img' );
		img.setAttribute("src", image)
		headImg.appendChild(img);
		return (headImg)
	}
    return { name, image, getUserHeaderDOM, getUserImageHeaderDOM }
}

async function displayHeaderData(photographersDatas) {
    const photographersHeader = document.querySelector(".photograph-header");

	photographersDatas.forEach((photographersData) => {
        const photographerHeaderModel = photographerHeader(photographersData);
        const userHeaderDOM = photographerHeaderModel.getUserHeaderDOM();
        photographersHeader.appendChild(userHeaderDOM);
    });
}

async function display() {
    // Récupère les datas des photographes
    const { photographersDatas } = await getPhotographersData();
		displayHeaderData(photographersDatas);
}
display();


/***** Display dropdown *****/
import {displayDropbtn} from '../utils/dropdown.js';

displayDropbtn()