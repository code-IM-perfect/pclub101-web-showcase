const timeP = document.querySelector(".three p")

const timeStyle = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
});

timeP.textContent = timeStyle.format(Date.now())
const interval = setInterval(function() {
    timeP.textContent = timeStyle.format(Date.now())
}, 1000);

const colors = function() {
    document.querySelector("body").classList.toggle("dark-mode")
}

const back = [
    "dark1.jpg",
    "dark2.png",
    "dark3.jpg",
    "dark4.png",
    "dark5.png",
    "dark6.png",
    "light3.jpg",
    "light1.png",
    "light2.jpg",
]

var background;
var lastBg = background;

const five = document.querySelector(".five");

const wallpaper = function(){
    background = "img/"+back[Math.floor(Math.random()*1000)%back.length]
    while(background==lastBg){
        background = "img/"+back[Math.floor(Math.random()*1000)%back.length]
    }
    five.style.backgroundImage=`url(${background})`
    five.style.backgroundColor="black"
    if(background.includes("dark")){
        five.classList.add("dark-mode")
    }else{
        five.classList.remove("dark-mode")
    }
    lastBg = background
}