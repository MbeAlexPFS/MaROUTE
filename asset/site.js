//Toogle function - 2funcs
let toggle_btn  = document.getElementById("toggled");
let no_toggle_btn = document.getElementById("no-toggled");
let header = document.getElementById("header")

toggle_btn.onclick = ()=> {
    header.classList.replace("toggled","no-toggled")
    
}

no_toggle_btn.onclick = ()=> {
    header.classList.replace("no-toggled","toggled")   
}

//carousel - 4 func
function carousel(classImg,classBtn,increment) {
    let elementsBtn = document.querySelectorAll(classBtn)
    elementsBtn.forEach((btn)=>{
        btn.onclick = () => {
            let elementsImg = document.querySelectorAll(classImg)
            elementsImg.forEach((img) => {
                img.setAttribute('style','position: relative;right: '+btn.value*increment+'%;transition: 1s;')
                console.log(img.style)
            })
        }
    })
}
carousel(".carousel-img",".carousel-btn",101)


//nav sticky et scroll up btn - 2 func
let nav = document.querySelector('nav')
let totop = document.querySelector('.totop')
totop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

window.onscroll = () => {
    if (window.pageYOffset > 150) {
        nav.classList.add("sticky")
        nav.classList.add("bottom-shadow")
        nav.classList.add("bg-black")
    }else {
        nav.classList.remove("sticky")
        nav.classList.remove("bottom-shadow")
        nav.classList.remove("bg-black")
    }

    if ( window.pageYOffset < 150 ) {
        totop.style.display = "none"
    }else {
        totop.style.display = "initial"
    }
}

//theme - 3 funcs
let theme = {
    ".default": {
        "black" : "black",
        "white" : "white",
        "red" : "orangered",
        "green" : "lawngreen",
        "blue" : "deepskyblue",
        "blue2" : "dodgerblue",
        "lblue" : "lightskyblue",
        "lgrey" : "gainsboro",
        "gray" : "gray",
        "gray2" : "gray",
        "orange" : "darkorange"
    },

    ".dark": {
        "black" : "orange",
        "white" : "black",
        "red" : "orangered",
        "green" : "lawngreen",
        "blue" : "blue",
        "blue2" : "darkblue",
        "lblue" : "lightblue",
        "lgrey" : "gray",
        "gray" : "grey",
        "gray2" : "grey",
        "orange" : "darkorange"
    },

    ".light": {
        "black" : "lightblue",
        "white" : "white",
        "red" : "orangered",
        "green" : "lawngreen",
        "blue" : "blue",
        "blue2" : "blue",
        "lblue" : "lightskyblue",
        "lgrey" : "lightgray",
        "gray" : "gray",
        "gray2" : "grey",
        "orange" : "orange"
    } 

}

let btnTheme = document.querySelector('.toggle')
btnTheme.onclick = () => {
    let menu = document.querySelector(btnTheme.value)
    if (menu.classList.contains('show')) {
        menu.classList.remove('show')
        btnTheme.style.transform = "scale(1,1)"   
    } else {
        menu.classList.add('show')
        btnTheme.style.transform = "scale(-1,1)"    
    }
}

for (let th in theme) {
    let btn = document.querySelector(th)
    btn.onclick = () => {
        for (let th_activation in theme) {
            document.querySelector(th_activation).classList.remove('active')     
        }
        document.documentElement.style.cssText = `--black : ${theme[th]["black"]} ; --white : ${theme[th]["white"]}; --red : ${theme[th]["red"]}; --green : ${theme[th]["green"]}; --blue : ${theme[th]["blue"]}; --blue2 : ${theme[th]["blue2"]}; --lblue : ${theme[th]["lblue"]}; --lgrey : ${theme[th]["lgrey"]}; --gray : ${theme[th]["gray"]}; --gray2 : ${theme[th]["gray2"]}; --orange : ${theme[th]["orange"]};"`
        btn.classList.add('active')
    }
}

//apparition des sections 3 funcs

let ObsElements
let observer
let option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
}

if (document.querySelector(".toleft") !== null) {
    ObsElements = [".toleft",".toright",".toup"]
    observer = new IntersectionObserver(callbackFunc, option)
    createObserver()
}

function createObserver() {
    ObsElements.forEach((element) => {
        let els = document.querySelectorAll(element)
        els.forEach((el) => {observer.observe(el)})
    })
}


function callbackFunc(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("toleft")) {
                if (! entry.target.classList.contains("left")) {
                    entry.target.classList.add("left")
                }    
            }
            if (entry.target.classList.contains("toright")) {
                if (! entry.target.classList.contains("right")) {
                    entry.target.classList.add("right")
                }    
            }
            if (entry.target.classList.contains("toup")) {
                if (! entry.target.classList.contains("up")) {
                    entry.target.classList.add("up")
                }    
            }
        }
        
    })
}

//14 functions
