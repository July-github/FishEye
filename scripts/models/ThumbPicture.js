//thumbs creation to get data
export class ThumbPicture {
    constructor (data){
        this._image = data.image
        this._title = data.title
        this._likes = data.likes
    }

    get image(){
        return ('./Sample Photos/' + this._image)
    }

    get title(){
        return this._title
    }

    get likes(){
        return (this._likes + " <i class='fas fa-heart'></i>")
    }
}