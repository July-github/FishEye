//Display lightbox
/***** Display lightbox *****/

function photographerGallery(title, image){

	const boxSlide = document.querySelector('#box');
	const img = document.createElement( 'img' );
	img.setAttribute('src', image);
	boxSlide.appendChild(img);
	const slideText = document.createElement('h3');
	slideText.setAttribute('class', 'picture-title');
	slideText.textContent = title;
	boxSlide.appendChild(slideText);

	return boxSlide
}

function displayLightbox(title, image){
    const pictureGallery = document.getElementById('lightbox');

    const photographerGalleryModel = photographerGallery(title, image)
    pictureGallery.appendChild(photographerGalleryModel);
}

function resetLightbox(){
	const boxSlide = document.querySelector('#box');
    boxSlide.innerHTML = '';
}

export async function listenToDisplayLightbox() {
    const card = [...document.querySelectorAll('.picture_card > img')];
    const lightbox = document.getElementById('lightbox');
    const goNext = document.querySelector('.fa-angle-right');
    const goPrevious = document.querySelector('.fa-angle-left');
    const backMain = document.querySelector('main');
    
    console.log(card)
    
    for(let n=0; n<card.length; n++){
        card[n].addEventListener('click', function(){
            lightbox.style.display = "flex";
            backMain.style.display = "none";

            let title = card[n].nextSibling.firstChild.textContent;
            let image = card[n].src;

            displayLightbox(title, image);

            // Go to next picture
            goNext.addEventListener('click', function(){
                resetLightbox();
                if(n === card.length-1){
                    n = 0
                    title = card[n].nextSibling.firstChild.textContent;
                    image = card[n].src;                
    
                }else{
                    title = card[n+1].nextSibling.firstChild.textContent;
                    image = card[n+1].src;                
                }
                displayLightbox(title, image);
                n++;
            })
            // Go to previous picture
            goPrevious.addEventListener('click', function(){
                resetLightbox();
                if(n === 0){
                    n = card.length-1
                    console.log(n)

                    title = card[n].nextSibling.firstChild.textContent;
                    image = card[n].src;
                }else{
                    console.log(n)

                    title = card[n-1].nextSibling.firstChild.textContent;
                    image = card[n-1].src;
                }
                console.log(n)
                displayLightbox(title, image);
                n--;
                console.log(n)

            })
        })
    listenToCloseLightbox()
    }
}

/***** Close lightbox *****/
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

function listenToCloseLightbox(){
    const cross = [...document.querySelectorAll("i.fas.fa-times")];
    const backMain = document.querySelector('main');

    cross.map(cros => cros.addEventListener('click', function(){
        resetLightbox();
        closeLightbox();
        backMain.style.display = "block";
    }))  
}
