class media {
    constructor (data, type){
        if(type === 'image'){
            return new image(data);
        }if(type === 'video'){
            return new video(data);
        }else{
            return 'media format unknown';
        }
    }
}