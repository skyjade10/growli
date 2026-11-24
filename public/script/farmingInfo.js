import { api, showLoginUi, loggedInKey, token, tokenKey, userKey,SERVER_PORT,SERVER_URL,setImage } from "./util.js";

const serverUrl = SERVER_URL;
const serverPort = SERVER_PORT;

const infoContainer = document.getElementById("farming-info-container");
const imageType =  "farminginfo";

if(true){
    const itemList = [];

    var isSearching = false;

    var page = 1, limit = 12;

    const searchBtn = document.getElementById("search-button");
    const input = document.getElementById("search-farming-info");
    const moreBtn = document.getElementById("next-btn");


    const info = await getInfo();

    const infoData = JSON.parse(JSON.stringify(info.data));

    setData(infoData);


    searchBtn.addEventListener('click', async (e)=>{
        e.preventDefault();
        if(!input.value)
            return
        const mQuery = input.value.trim();

        const info = await searchInfo(mQuery);

        page = 1;
        isSearching = true;

        const infoData = JSON.parse(JSON.stringify(info.data));

        infoContainer.replaceChildren();
        setData(infoData);
    });

    input.addEventListener('keydown',async (e)=>{
        
        if(e.key === 'Enter'){
            e.preventDefault();
                
            if(!input.value)
                return
            const mQuery = input.value.trim();

            const info = await searchInfo(mQuery);

            page = 1;
            isSearching = true;

            const infoData = JSON.parse(JSON.stringify(training.data));

            productContainer.replaceChildren();
            setData(infoData);
        }
    })

    moreBtn.addEventListener('click',async (e)=>{
        e.preventDefault();

        if(isSearching){
            const training = await searchTrainings();
            
            const trainingData = JSON.parse(JSON.stringify(training.data));
            
            page++;

            setData(trainingData);
        }else{
            const training = await getInfo();
            const trainingData = JSON.parse(JSON.stringify(training.data));
            
            page++;

            setData(trainingData);
        }

    });

}

function setData(mData) {
    console.log(mData)
    
    mData.forEach((v,k) =>{
        
        infoContainer.insertAdjacentHTML('beforeend',
            `
            <article id="${v.farmingId}" class="card">
                <figure class="img-box"><img src="${setImage(v.farmingInfoImage,false,imageType)}" alt="Image of ${v.title}" /></figure>
                <h3>${v.title}</h3>
                <p class="trex" >${v.article}.</p><a href="#">Read More</a>
            </article>
            `
        );

        const card = document.getElementById(v.farmingId);

        card.addEventListener('click',(e)=>{
            console.log(v.productId)
        });
    
    });
}

async function getInfo() {
    
    const trainings = await api(`${serverUrl}/farminginfo?page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return trainings;
}

async function searchInfo(querys) {

    const trainings = await api(`${serverUrl}/farminginfo/search?query=${querys}&page=${page}&limit=${limit}`,{
        method: 'GET',
        mode: 'cors'
    });

    return trainings;
}

function parseDate(date) {

    if(!date) return "Not specified";

    const dateO = new Date(date);

    const day = dateO.getDate();
    const month = dateO.getMonth();
    const year = dateO.getFullYear();

    return `${day}/${month +1}/${year}`;
    
}