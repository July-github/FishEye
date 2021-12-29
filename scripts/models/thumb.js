//creation of thumbs
class Thumb {
    constructor (data){
        this._image = data.image
        this._title = data._title
        this._likes = data.likes
    }

    get image(){
        return ('./Sample Photos/' + this._image)
    }

    get title(){
        return this._title
    }

    get likes(){
        return this.likes
    }
}