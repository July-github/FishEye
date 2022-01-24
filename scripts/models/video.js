export class Video{
    constructor(data){
        this._video = data.video;
        this._photographerId = data.photographerId
        this._title = data.title
    }

    get video(){
        return this._video
    }

    get photographerId(){
        return this._photographerId
    }

    get title(){
        return this._title
    }

}
