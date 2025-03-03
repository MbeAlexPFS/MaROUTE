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
