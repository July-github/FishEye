import { PictureCard} from './templates/PictureCard.js';
import {ThumbPicture} from './models/ThumbPicture.js';
import {PictureApi} from './Api.js/Api.js';

export class App {
    constructor(){
        // instanciation of thumbs
        this.pictureGrid = document.querySelector('.picture-card-grid')
        this.picturesApi = new PictureApi('./data/pictures.json')
    }

    async main(){
        const picturesData = await this.picturesApi.getPictures()

        picturesData
            .map(picture => new ThumbPicture(picture))
            .foreach(picture => {
                const template = new PictureCard(picture)
                this.pictureGrid.appendChild(template.createPictureCard())
            })
    }
}

//const app = new App()
//app.main()