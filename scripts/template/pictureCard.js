class PictureCard {
    constructor(data){
        this._image = data.image
        this._photographerId = data.photographerId
        this._title = data.title
    }

    createMedia(){
    
        const pictureCard = document.createElement('img')
        pictureCard.setAttribute('class', 'Media')
        pictureCard.setAttribute('src', `Sample Photos/${this._photographerId}/${this._image}`)
        pictureCard.setAttribute('alt', `${this._title}`)

        return pictureCard
    }
}

class VideoCard {
    constructor(data){
        this._video = data.video
        this._photographerId = data.photographerId
        this._title = data.title
    }

    createMedia(){
    
        const videoCard = document.createElement('video')
        videoCard.setAttribute('class', 'Media')
        videoCard.setAttribute ('src', `Sample Photos/${this._photographerId}/${this._video}`)
        videoCard.setAttribute ('type', 'video/mp4')
        videoCard.setAttribute ('alt', `${this._title}`)
        videoCard.setAttribute ('controls', 'controls')
        videoCard.setAttribute ('autoplay', 'autoplay')
        videoCard.setAttribute ('muted', 'muted')

        return videoCard
    }
}
