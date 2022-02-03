/***** Factory pattern to switch between image & video *****/
import {Picture} from'../models/picture.js';
import {Video} from'../models/video.js';
import {PictureCard, VideoCard} from '../template/pictureCard.js';

export class Media {
    constructor (data){
        
        if(data.image){
            const media = new Picture(data);
            const template = new PictureCard(media);
            return template;
        }
        if(data.video){
            const media = new Video(data);
            const template = new VideoCard(media);
            return template;
        }
        else{
            throw 'media format unknown';
        }
    }
}