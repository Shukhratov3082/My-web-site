
let icon = document.getElementById("icon");
icon.onclick = function () {
    icon.classList.toggle('active');
}
let menu = document.getElementById("menu")
icon.onclick = function () {
    icon.classList.toggle('active');
    menu.classList.toggle('active');
}
document.querySelector('video').playbackRate = 0.4;

function kechasi() {
    let bgcolor1 = document.getElementById("bg")
    bgcolor1.style.background = "black"

    let kech = document.getElementById("moon")
    kech.style.display = "none"

    let kechbol = document.getElementById("moon-black")
    kechbol.style.display = "block"

    let menucolor = document.getElementById("menu")
    menucolor.style.background = "#0041fa"

    let buttonbg = document.getElementById("head-btn")
    buttonbg.style.background = "red"

    let bigdumaloq = document.getElementById("bigdumaloq")
    bigdumaloq.style.background = "#13561e"

    let sarudumaloq = document.getElementById("sarudumaloq")
    sarudumaloq.style.background = "rgb(151 54 54)"


}
function kechasiboldi() {
    let kechbol2 = document.getElementById("moon-black")
    kechbol2.style.display = "none"

    let kech = document.getElementById("moon")
    kech.style.display = "block"

    let bgcolor1 = document.getElementById("bg")
    bgcolor1.style.background = "linear-gradient(264deg, rgba(19,165,204,1) 25%, rgba(0,125,255,1) 79%)"

    let menucolor = document.getElementById("menu")
    menucolor.style.background = "rgb(0, 192, 250)"

    let buttonbg = document.getElementById("head-btn")
    buttonbg.style.background = "#35d700"

    let bigdumaloq = document.getElementById("bigdumaloq")
    bigdumaloq.style.background = "#5956e9"

    let sarudumaloq = document.getElementById("sarudumaloq")
    sarudumaloq.style.background = "#f4d25b"
}

let myreposity = document.getElementById("my-reposity"),
    modal = document.getElementById("menu2");

myreposity.addEventListener('click', function () {
    modal.style.display = "block";

})
function closs() {
    let none = document.getElementById("menu2")
    none.style.display = "none"
}

function btn() {
    let hedbtn = document.getElementById("head-btn")
    hedbtn = alert("Salom Sayitim Sizga Yoqti Degan umittaman")
}
function btn2() {
    let sec1btn = document.getElementById("sec1btn")
    sec1btn = alert("Salom bu yerda M.Khan ning qancha web sayt yasaganini ko'rishingiz mumkin")
    sec1btn = alert("Uning uchun ong topondi menu ni bosib ushayerdan My Reposity degan yozuvni bosing")
}



