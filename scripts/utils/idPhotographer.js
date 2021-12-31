
export function listenToClickPhotographer(){
    const articles = [...document.getElementsByTagName('article')];
    const idClicked = articles.map(article => article.addEventListener('click', function(e){
        return e.target.id
    }))
    return idClicked
}
export const idClicked = listenToClickPhotographer();