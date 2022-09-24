/***** Get datas with fetch *****/

export class Api {
    //fetch
    constructor(url){
        this._url = url
    }

    async get(){
        return fetch('../../data/photographers.json')
        .then(res => {
            if (!res.ok) {
                throw new Error("HTTP error " + res.status);
            }
            return res.json();
        })
        .catch(err => alert('an error occurs', err))
    }
}