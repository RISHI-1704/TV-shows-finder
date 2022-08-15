const form = document.querySelector('#searchForm');
const input = document.querySelector('#showList');
const contain = document.querySelector('#container');
const head = document.querySelector('#head-txt');

form.addEventListener('submit',async function (e){
    try{
        e.preventDefault();
        const search = form.elements.query.value;
        const config = {params :{q:search}}
        const res = await axios.get(`http://api.tvmaze.com/search/shows?`,config)
        getImage(res.data);
        form.elements.query.value = '';
        getRate(res.data);
    }
    catch{
        document.write('Sorry,try again later :(');
    }
})

const getImage = (show) =>{
    for (let result of show ){ 
        if (result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            contain.append(img);
        }
    }
}


const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
     for(let img of imgs){
        img.remove();
     }
}

const getRate = (shows) =>{
    for (let result of shows ){ 
        if (result.show.rating){
        const rates = result.show.rating;
        console.log(rates)
        }
    }
}
 
head.addEventListener('click',deleteImgs)
    
if (input){
    input.addEventListener('change',deleteImgs)
}


