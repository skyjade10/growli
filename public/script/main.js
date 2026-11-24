
import { api, valueLengthIsValid, showLoginUi, loggedInKey, tokenKey, userKey,token } from "./util.js";


showLoginUi();

const menu = document.getElementById('menu');
const leftMenu = document.getElementById('menu-side');
const nav = document.getElementById('main-nav');
//loading spinner
const spinner = document.getElementById('spinner');

//close the loading spinner
if(spinner)
    spinner.close()

console.log(spinner)

try{

    menu.addEventListener('click',(e)=>{
        e.preventDefault();

        nav.classList.toggle("active");
        menu.setAttribute("aria-expanded", String(nav.classList.contains("active")));
    });

    leftMenu.addEventListener('click',(e)=>{
        e.preventDefault();

        nav.classList.remove("active");
        menu.setAttribute("aria-expanded", "false");
    });
}catch(e){
    console.log(e);
}


function logOut() {
    const logOutBtn = document.getElementById('logout-btn');

    logOutBtn.addEventListener('click',(e)=>{
        sessionStorage.setItem(loggedInKey,JSON.stringify(false));
        localStorage.setItem(tokenKey,"");
        localStorage.setItem(userKey,JSON.stringify({user: ""}));
        isLoggedIn.isLogged = false;
        token.token = "";
        window.location.href = "../index.html"
    });

}

logOut()



