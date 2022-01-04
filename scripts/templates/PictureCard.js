export class PictureCard {
    //thumbs templates creation
    constructor(picture) {
        this._picture = picture
    }

    createPictureCard(){
        const grid = document.createElement('div');
        grid.classList.add('picture-card');

        grid.innerHTML = `<div>
        <img alt=${this._picture.title} src='./Sample Photos/${this._picture.image}'
        </div>`

        return grid
    }
}