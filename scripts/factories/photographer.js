// creation of each photographer card on index page
function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price} = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;
    const rate = price;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const place = document.createElement( 'h3' );
        const tag = document.createElement( 'span' );
        const unit = document.createElement( 'p' );
        place.textContent = city + ', ' + country;
        tag.textContent = tagline;
        unit.textContent = rate + '€/jour';
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(place);
        article.appendChild(tag);
        article.appendChild(unit);
        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}