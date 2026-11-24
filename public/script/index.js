
import { api, isLoggedIn , loggedInKey, token, tokenKey, userKey,SERVER_PORT,SERVER_URL, setImage} from "./util.js";

const serverUrl = SERVER_URL;
const serverPort = SERVER_PORT;

const cardContainer = document.getElementById('card-container');

const infoImageType = "farminginfo";
const productImageType = "product";
const trainingImageType = "training";

console.log("index", isLoggedIn.isLogged)

//if true simulates if user is authenticated; to be implemented
if(true){

    //farming info
    const infoContainer = document.getElementById("info-container");
    try {
        
        const info = await getFarmingInfo();
        console.log("Farming Info: ",info)

        const infoData = JSON.parse(JSON.stringify(info));


        if(!infoData){
                
            infoData.forEach((v,k)=>{
                infoContainer.insertAdjacentHTML('beforeend',
                    `<article id="${v.farmingId}" class="card">
                        <figure class="img-box"><img src="${setImage(v.farmingInfoImage,true,infoImageType)}" alt="Picture of ${v.title}" ></figure>
                        <h3>${v.title}</h3>
                        <p>${v.article}</p><a href="./pages/farming-info.html">→ Read More</a>
                    </article>
                    `
                );
            });

        }else{
            //placeholdr if info data is empty
            infoHolder(infoContainer);

        }

    } catch (error) {
        console.log("Error fetching farming info: ", error);
        infoHolder(infoContainer);
    }

    //events
    const eventContainer = document.getElementById("event-container");
    try {
        
        const event = await getEvents();
        console.log("Events: ",event)

        const eventData = JSON.parse(JSON.stringify(event));


        if(!eventData){

            eventData.forEach((v,k)=>{

                eventContainer.insertAdjacentHTML("beforeend",
                    `
                    <article id="${v.trainingId}" class="training-bar">
                        <p><b>${v.title}</b> • Date: ${parseDate(v.trainingDate)} • Location: ${v.city}, ${v.country} </p>
                        <a class="training-link" href="./pages/training.html">View Details</a>
                    </article>
                    `
                );
            });
            
        }else{

            //if event data is empty
            eventContainer.insertAdjacentHTML("beforeend",
                `
                <article id="event-container" class="training-bar">
                    <p><b>Agricultural Training Conference</b> &bull; Date: 1 November &bull; Location: Ndola</p>
                    <a class="training-link" href="./pages/training.html">View Details</a>
                </article>
                `
            );

        }

    } catch (error) {
        console.log("Error fetching events: ", error);
        eventContainer.insertAdjacentHTML("beforeend",
            `
            <article id="event-container" class="training-bar">
                <p><b>Agricultural Training Conference</b> &bull; Date: 1 November &bull; Location: Ndola</p>
                <a class="training-link" href="./pages/training.html">View Details</a>
            </article>
            `
        );
    }


    //Products

    try {
            
        const product = await getProducts();

        console.log("Product: ",product)

        const datav = JSON.parse(JSON.stringify(product.data));

        if(datav){
            datav.forEach((v,k)=>{
                cardContainer.insertAdjacentHTML('beforeend',
                    `<article id="${v.productId}" class="card">
                        <figure class="img-box"><img src="${setImage(v.pronductImage,true,productImageType)}" alt="Image of ${v.productName}" /></figure>
                        <h3>${v.productName}</h3>
                        <p>Price: ZMW ${parsePrices(v.price)} /kg</p>
                        <a class="view-btn" href="./pages/marketplace.html">View</a>
                    </article>`
                );
            })
        }else{
            
            productHolder(cardContainer);

        
        }
        
    } catch (error) {
        console.log("Error fetching products: ", error);

        productHolder(cardContainer);
    }

}

function parsePrices(price){
    if(!price)
        return 0;

    return parseFloat(price);
}

function parseDate(date) {

    if(!prices) return "Not specified";

    const dateO = new Date(date);

    const day = dateO.getDate();
    const month = dateO.getMonth();
    const year = dateO.getFullYear();

    return `${day}/${month +1}/${year}`;
    
}

async function getProducts(){

    const products = await api(`${serverUrl}/product?page=${1}&limit=${6}`,{
        method: 'GET',
        mode: 'cors'
    });

    return products;
}

async function getFarmingInfo(){
    
    const info = await api(`${serverUrl}/farminginfo/`,{
        method: 'GET',
        mode: 'cors'
    });

    return info;
}

async function getEvents() {
    
    const event = await api(`${serverUrl}/training/`,{
        method: 'GET',
        mode: 'cors'
    });

    return event;
}

//holder data for testing purposes

function productHolder(container) {
    
    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/veggies.jpg" alt="Image of veggies"></figure>
            <h3>Fresh Produce</h3>
            <p>Buy fresh fruits and vegetables directly from local farmers.</p>
            <a class="view-btn" href="./pages/marketplace.html">View</a>
        </article>
        `
    );

    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/meat.avif" alt="Image of livestock product"></figure>
            <h3>Livestock Products</h3>
            <p>Purchase meat, dairy, and other livestock products from trusted local sources.</p>
            <a class="view-btn" href="./pages/marketplace.html">View</a>
        </article>
        `
    );

    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/tools.jpg" alt="image of agriculture tools"></figure>
            <h3>Agricultural Tools</h3>
            <p>Find a variety of farming tools and equipment to support your agricultural activities.</p>
            <a class="view-btn" href="./pages/marketplace.html">View</a>
        </article>
        `
    );
}

function infoHolder(container) {
    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/soil-preparation.webp" alt="farming info image, image of people farmin"></figure>
            <h3>Crop Guide</h3>
            <p>Learn about different crops, their growth requirements, and best practices for cultivation.</p>
            <a href="./pages/farming-info.html">Learn More</a>
        </article>
        `
    );

    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/cattle.jpg" alt="Image of cattle"></figure>
            <h3>Livestock Guide</h3>
            <p>Discover best practices for raising healthy livestock, including nutrition, housing, and disease prevention.</p>
            <a href="./pages/farming-info.html">Learn More</a>
        </article>
        `
    );

    container.insertAdjacentHTML('beforeend',
        `
        <article class="card">
            <figure class="img-box"><img src="./images/soil-health.jpg" alt="Image of someone holding soil"></figure>
            <h3>Soil Health Guide</h3>
            <p>Understand the importance of soil health and learn techniques to improve soil fertility and structure.</p>
            <a href="./pages/farming-info.html">Learn More</a>
        </article>
        `
    );
}
