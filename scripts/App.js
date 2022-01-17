class App{
    /*constructor(){
        this.card = document.querySelector('.picture_card')
        //this.pictureApi = new PictureApi('/data/photographers.json')
    }*/

    async main(data, cardMedia){
        //const pictureDatas = await this.pictureApi.getPictures()
        //console.log(pictureDatas)
        
            const Media = new media(data)
            return cardMedia.insertBefore(Media, cardMedia.firstChild)

            //return Media

            //return new media(data)
        /*for(const pictureData in pictureDatas){
            console.log(pictureData)
            return new media(pictureData)
        }*/
    }
}