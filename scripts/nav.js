function has_game_started(){
    return false;
}

const nav_buttons = [
    {"label":"HOME", "Link":"/"},
    {"label":"ABOUT","Link":"/about.html"},
    {"label":"TESTIMONIALS","Link":"/testimonials.html"},
    has_game_started() ? 
    {"label":"GAME", "Link":"/game.html"}
    :{"label":"ADOPT","Link":"/Adopt.html"}
];

function is_this_active(page_name){
    let url = window.location.href;
    let found = url.search(page_name.toLowerCase());


    if(url == "http://127.0.0.1:5500/" || url== "http://127.0.0.1:5500/index.html" ){
        if(page_name == "HOME"){
            return true
        }
    }


    if(found > 0){
        return true
    } else{
        return false;
    }

    
}



let nav_container = document.getElementById("main-nav")
for(let button of nav_buttons){
    nav_container.innerHTML += `<a class= "nav-link
    
    ${is_this_active(button.label) ? "active": "" }
    
    
    " href="${button.Link}">${button.label}</a>`
}