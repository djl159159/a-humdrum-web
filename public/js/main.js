console.dir(window);
console.log(window.innerHeight, window.innerWidth)

var all = document.querySelector(".all")

all.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px"
all.style.height = window.innerHeight + "px"
all.style.width = window.innerWidth + "px "
setInterval(() => {
    all.style.height = window.innerHeight + "px"
    all.style.width = window.innerWidth + "px "
    all.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px"
}, 10)
