/***** Display index page *****/
import {Api} from './api/Api.js';

//Template creation of the photographer's icon
function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price} = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;
    const rate = price;
   
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        article.setAttribute('id', id);
        link.setAttribute('href', `./photographer.html?id=${id}`)
        const img = document.createElement( 'img' );
        img.setAttribute('src', picture)
        img.setAttribute('alt', 'photo du photographe')
        const h2 = document.createElement( 'h2' );
        const place = document.createElement( 'h3' );
        const tag = document.createElement( 'span' );
        const unit = document.createElement( 'p' );
        place.textContent = city + ', ' + country;
        tag.textContent = tagline;
        unit.textContent = rate + '€/jour';
        h2.textContent = name;
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(place);
        article.appendChild(tag);
        article.appendChild(unit);
        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}

//Display photographers' icons
async function displayData() {
    const photographer = new Api('../data/photographers.json');
    const medias = await photographer.get();
    const photographersDatas = medias.photographers;
    const photographersSection = document.querySelector(".photographer_section");

    photographersDatas.forEach((photographersData) => {
        const photographerModel = photographerFactory(photographersData);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
    
displayData();
