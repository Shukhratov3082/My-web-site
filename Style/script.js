
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


let animation = document.getElementById("animation"),
    menu3 = document.getElementById("menu3");
animation.addEventListener('click', function () {
    menu3.style.display = "block";
    menu3.style.flexWrap = "wrap";
})

let myreposity = document.getElementById("my-reposity"),
    modal = document.getElementById("menu2");

myreposity.addEventListener('click', function () {
    modal.style.display = "flex";
    modal.style.flexWrap = "wrap";
})

let games = document.getElementById("games")
games.onclick = function () {
    let firstName = prompt("Salom ismingizni kiriting")
    let firstname2 = alert(`${firstName} bu yerda siz bot oylagan random raqamini topishingiz kerak boladi`)
    let userNumber = prompt("Siz 5 dan katta son kiriting men shuni random qilaman")
    let counter = 0;
    let maxTries = 5;

    if (userNumber >= 5) {
        let randomNumber = Math.floor(Math.random() * userNumber + 1);


        while (attempts != randomNumber) {

            var attempts = prompt(`${firstName} siz 1 dan ${userNumber} bo'lgan sonlarni kiriting`);

            counter += 1;

            if (counter > maxTries) {
                alert(`${firstName} siz yutqazdingiz F5  bosib qayta urinib ko'ring`);
                break
            }

            if (attempts > randomNumber) {
                alert(`${firstName} Siz kirtgan soningiz katta`)
            }

            if (attempts < randomNumber) {
                alert(`${firstName} Siz kiritgan soningiz kichik`)
            }

            if (attempts == randomNumber) {
                alert(`${firstName} men o'ylagan sonni ${counter} ta urinishda topdingiz`)
            }
        }
    }

    else {
        alert(`${firstName} siz 5 katta son kirtmadingiz`)
    }

}

function closs() {
    let none = document.getElementById("menu2")
    none.style.display = "none"
}
function closs2() {
    let none2 = document.getElementById("menu3")
    none2.style.display = "none"
}

function btn() {
    let hedbtn = document.getElementById("head-btn")
    hedbtn = alert("Salom Sayitim Sizga Yoqti Degan umittaman")
}

function btn2() {
    let sec1btn = document.getElementById("sec1btn")
    sec1btn = alert("Salom bu yerda M.Khan ning qancha web sayt yasaglarini va animatsiyalar hatto oyin oynashingiz mumkin")
    sec1btn = alert("Uning uchun ong tomondi menu ni bosib ushayerdan tanglang")
}

let headertext1 = document.getElementById("head1")
let headertext2 = document.getElementById("head2")
let headertext3 = document.getElementById("head3")
headertext1.onclick = function () { alert("Xaliberi Ishga tushirilmagan") }
headertext2.onclick = function () { alert("Xaliberi Ishga tushirilmagan") }
headertext3.onclick = function () { alert("Xaliberi Ishga tushirilmagan") }

const themeBtn = document.querySelector('.c-theme-btn')
    const changeTheme = () => {
        document.documentElement.classList.toggle('theme--night')
        let state = document.documentElement.classList.contains('theme--night')
        state ? themeBtn.classList.add('is-active') : themeBtn.classList.remove('is-active')
    }
 
           
      
//     theme.addEventListener("click",function kechasiboldi() {
//         let kechbol2 = document.getElementById("moon-black")
//         kechbol2.style.display = "none"
    
//         let kech = document.getElementById("moon")
//         kech.style.display = "block"
    
//         let bgcolor1 = document.getElementById("bg")
//         bgcolor1.style.background = "linear-gradient(264deg, rgba(19,165,204,1) 25%, rgba(0,125,255,1) 79%)"
    
//         let menucolor = document.getElementById("menu")
//         menucolor.style.background = "rgb(0, 192, 250)"
    
//         let buttonbg = document.getElementById("head-btn")
//         buttonbg.style.background = "#35d700"
    
//         let bigdumaloq = document.getElementById("bigdumaloq")
//         bigdumaloq.style.background = "#5956e9"
    
//         let sarudumaloq = document.getElementById("sarudumaloq")
//         sarudumaloq.style.background = "#f4d25b"
//     }
// )
    

