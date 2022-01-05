/***** Dropdown filters *****/

export async function sortByDate(data){
    const { date } = data
    data.sort(function(a, b) {
        a = new Date(a.dateModified);
        b = new Date(b.dateModified);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    return {data, date}
}

export async function sortByLikes(data){
}