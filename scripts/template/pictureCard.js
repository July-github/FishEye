class MediaCard {
    constructor(data){
        this._image = data.image
        this._video = data.video
        this._photographerId = data.photographerId
        this._title = data.title
    }

    createMediaImage(){
    
        const pictureCard = document.createElement('div')
        pictureCard.innerHTML = `<img src="Sample Photos/${this._photographerId}/${this._image}" alt="${this._title}" />`

        return pictureCard
    }

    createMediaVideo(){
    
        const videoCard = document.createElement('div')
        videoCard.innerHTML = `<video src="Sample Photos/${this._photographerId}/${this._video}" type="video/mp4" alt="${this._title}" controls poster="" autoplay muted/>`

        return videoCard
    }
}
