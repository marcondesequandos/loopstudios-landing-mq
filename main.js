const logonav = document.querySelector(".logoNav")
const btn = document.querySelector(".btn-nav")
const btIcon = document.querySelector(".bbtn-icon")
const nav = document.querySelector(".nav__menu")
const navItems = document.querySelectorAll(".navmenu-item")


const toggleMenu = ()=> {

    nav.classList.toggle("nav__menu--hidden")
    document.body.classList.toggle("disable-scroll")

    navItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = ""
        } else {
            item.style.animation = `fadeInTop .7s ${index / 8 + 0.3}s`;            
        }

     
    })

    if (nav.classList.contains("nav__menu--hidden")) {
        btIcon.src = "./images/icon-hamburger.svg"        
    } else {
        btIcon.src = "./images/icon-close.svg"        
    }
}

function mobScrollBG() {
    if (window.innerWidth < 750) {
        if (
            document.body.scrollTop > 10 || 
            document.documentElement.scrollTop > 10
        ) {
            logonav.classList.add("logoNav--scroll")
        } else {
            logonav.classList.remove("logoNav--scroll")
        }
    } else {
        logonav.classList.remove("logoNav--scroll")
    }
}

window.onscroll = function () {
    mobScrollBG()
}

btn.addEventListener("click", toggleMenu)