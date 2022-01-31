export class PictureCard {
    constructor(data){
        this._image = data.image
        this._photographerId = data.photographerId
        this._title = data.title
    }

    createMedia(){
    
        const pictureCard = document.createElement('a')
        pictureCard.setAttribute('href', '#')
        pictureCard.setAttribute('class', 'Media')
        const pictureImg = document.createElement('img')
        pictureImg.setAttribute('src', `Sample Photos/${this._photographerId}/${this._image}`)
        pictureImg.setAttribute('alt', `${this._title}` + ', close-up view')
        pictureCard.appendChild(pictureImg)

        return pictureCard
    }
}

export class VideoCard {
    constructor(data){
        this._video = data.video
        this._photographerId = data.photographerId
        this._title = data.title
    }

    createMedia(){
    
        const videoCard = document.createElement('a')
        videoCard.setAttribute('href', '#')
        videoCard.setAttribute('class', 'Media')
        const pictureVideo = document.createElement('video')
        pictureVideo.setAttribute ('src', `Sample Photos/${this._photographerId}/${this._video}`)
        pictureVideo.setAttribute ('type', 'video/mp4')
        pictureVideo.setAttribute ('alt', `${this._title}` + ', close-up view')
        pictureVideo.setAttribute ('controls', 'controls')
        pictureVideo.setAttribute ('autoplay', 'autoplay')
        pictureVideo.setAttribute ('muted', 'muted')
        videoCard.appendChild(pictureVideo)

        return videoCard
    }
}
