
export const SERVER_URL = "https://growli.onrender.com";
//export const SERVER_URL = "http://127.0.0.1";
export const SERVER_PORT = 3000;

//Uses localStorage not advisable

export const loggedInKey = "LOG_IN";
export const userKey = "USER_IN";
export const tokenKey = "TOKEN_IN"
export const isLoggedIn = {isLogged: JSON.parse(localStorage.getItem(loggedInKey))};
export const token = {token: localStorage.getItem(tokenKey)}
export const loggedUser = {user: JSON.parse(localStorage.getItem(userKey))}

export const api = async (url,options = {}) => {
    const res = await fetch(url,{
        headers: { 'Content-Type': 'application/json', 'Authorization': token.token, ...(options.headers || {})},
        ...options,
    })

    if(res.status === 204) return { ok:true, data: null}

    const data = await res.json().catch(() => ({}))

    if(!res.ok){
        const err = new Error(data.error || 'Request failed');
        err.status = res.status;
        err.errors = data.errors;
        console.log(err)

        throw err;
    }

    return {ok: true, data};
}

//check if th passed value is of valid length
export const valueLengthIsValid = (value, maxLen) => {
    return (!value && value.length <= maxLen)
}

//check if the user is logged in to show or hide the login and register button

export const showLoginUi = () =>{

    const authC = document.getElementById("auth");
    const profile = document.getElementById("profile");

    console.log(authC,profile);
    console.log("utils is logged in: ",JSON.parse(localStorage.getItem(JSON.parse(loggedInKey))))
    let isLog = JSON.parse(localStorage.getItem(JSON.parse(loggedInKey)))

    if(isLog){
        console.log("Is logged in")
        if(authC != null){
            
            authC.style.display = 'none';
        }
        if(profile != null){

            profile.style.display = 'visible';
        }
    }else{
        console.log("is logged out")

        if(authC != null){

            authC.style.display = 'visible';
        }
        if(profile != null){
            
            profile.style.display = 'none';
        }
    }
}

export function parsePrice(price){
    //price conversion will be done here
    return price;
}

export function setImage(imageUrl,isHomepage = false,imageType){ 
    let url = imageUrl;
    if (imageUrl) {
        return imageUrl;
    } else {
        if(isHomepage){
            if(imageType === "training"){
                return "./images/cattle.jpg";
            }
            if(imageType === "farminginfo"){
                return "./images/morden-Farm.jpg";
            }
            if(imageType === "product"){
                return "./images/meat.avif";
            }
        }else{
            if(imageType === "training"){
                return "../images/cattle.jpg";
            }
            if(imageType === "farminginfo"){
                return "../images/morden-Farm.jpg";
            }
            if(imageType === "product"){
                return "../images/meat.avif";
            }

        }
    }

    return url;
}