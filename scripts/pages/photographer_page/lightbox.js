//Display lightbox
/***** Display lightbox *****/

function displayLightbox(e, card, n) {

    const lightbox = document.getElementById('lightbox');
    const pictureGallery = [...document.querySelectorAll('.picture-gallery')];
    const goNext = [...document.querySelectorAll('.fa-angle-right')];
    const goPrevious = [...document.querySelectorAll('.fa-angle-left')];

    if(e.target.src){
        lightbox.style.display = "flex";

        for(let j=0; j<pictureGallery.length; j++){
            if(pictureGallery[j].id === card[n].id){
                pictureGallery[j].style.display = 'flex';
                // Go to next picture
                goNext.forEach(el=>{
                    el.addEventListener('click', function(){
                        pictureGallery[j].style.display = 'none';

                        if(j === (pictureGallery.length-1)){
                            lightbox.style.display = "none";
                        }else{
                            pictureGallery[j+1].style.display = 'flex';
                            j++;
                        }
                    })
                })
                // Go to previous picture
                goPrevious.forEach(el=>{
                    el.addEventListener('click', function(){
                        pictureGallery[j].style.display = 'none';

                        if(j === 0){
                            lightbox.style.display = "none";
                        }else{
                            pictureGallery[j-1].style.display = 'flex';
                            j--;
                        }
                    })
                })
            }
        }
    }
    listenToCloseLightbox()
}

/***** Close lightbox *****/
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

function listenToCloseLightbox(){
    const cross = [...document.querySelectorAll("i.fas.fa-times")];

    cross.map(cros => cros.addEventListener('click', function(){
            closeLightbox()
        })  
    )  
}

export async function listenToDisplayLightbox(){
    const card = [...document.querySelectorAll('.picture_card')];
    
    for(let n=0; n<card.length; n++){
        card[n].addEventListener('click', function(e){
            displayLightbox(e, card, n);
        })
    }
}