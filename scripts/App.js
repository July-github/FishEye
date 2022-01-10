class App{
    constructor(){
        this.grid = document.querySelector('.picture-card-grid')
        this.picture = new PictureApi('./data/photographers.json')
    }
}