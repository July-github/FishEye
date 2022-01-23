class Picture{
    constructor(data){
        this._image = data.image;
        this._photographerId = data.photographerId
        this._title = data.title
    }

    get image(){
        return this._image
    }
    
    get photographerId(){
        return this._photographerId
    }

    get title(){
        return this._title
    }

}