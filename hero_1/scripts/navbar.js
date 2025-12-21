let navSidebar = document.getElementById("navbar");
let openNavBarButton = document.getElementById("openNavbarButton");
let windowScreenSize = window.matchMedia("(width <= 700px)");

windowScreenSize.addEventListener("change", event => updateNavBar(event))
function openNavbar(){
    navSidebar.classList.add("show");
    openNavBarButton.setAttribute("aria-expanded", "true");
    navSidebar.removeAttribute("inert")
}

function closeNavbar(){
    navSidebar.classList.remove("show");
    openNavBarButton.setAttribute("aria-expanded", "false");
    navSidebar.setAttribute("inert", '')
}

function updateNavBar(screenSize){
    const isMobile = screenSize.matches;
    if (isMobile){
        navSidebar.setAttribute("inert", '')
    }
    else{
        navSidebar.removeAttribute("inert")
    }
}

updateNavBar(windowScreenSize);