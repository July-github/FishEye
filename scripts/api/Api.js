/***** Get datas with fetch *****/

export class Api {
    //fetch
    constructor(url){
        this._url = url
    }

    async get(){
        return fetch('https://github.com/July-github/JulieHeckler_6_19122021/blob/master/data/photographers.json')
        .then(res => {
            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }
            return res.json();
        })
        .catch(err => alert('an error occurs', err))
    }
}