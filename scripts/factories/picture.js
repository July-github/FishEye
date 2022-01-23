class Media {
    constructor (data){
        
        if(data.image){
            const media = new Picture(data);
            const template = new PictureCard(media)
            
            return template
        }
        if(data.video){
            const media = new Video(data);
            const template = new VideoCard(media)
            return template
        }
        else{
            throw 'media format unknown';
        }
    }
}