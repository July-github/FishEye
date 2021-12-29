//creation DOM photographer header on his page
function photographerPage(data) {
    const { name, portrait, city, country, tagline} = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserPageDOM(){
        const divUser = document.createElement( 'div' );
        const h2 = document.createElement( 'h2' );
        const place = document.createElement( 'h3' );
        const tag = document.createElement( 'span' );
        place.textContent = city + ', ' + country;
        tag.textContent = tagline;
        h2.textContent = name;
        divUser.appendChild(h2);
        divUser.appendChild(place);
        divUser.appendChild(tag);
        return (divUser);
    }

    function getUserPictureDOM(){
        const button = document.getElementsByClassName('contact_button');
        const divPic = document.createElement( 'img' );
        divPic.setAttribute("src", picture)
        button.appendChild(divPic)
    }

    return { name, picture, getUserPageDOM, getUserPictureDOM }
}