class media {
    constructor (data){
        if(data.image){
            const Media = new picture(data);
            const template = new MediaCard(Media)
            const templateImage = template.createMediaImage(Media)
            return templateImage
        }
        if(data.video){
            const Media = new video(data);
            const template = new MediaCard(Media)
            const templateVideo = template.createMediaVideo(Media)
            return templateVideo
        }
        else{
            return 'media format unknown';
        }
    }
}