var all = document.querySelector(".all")

//目录元素
var nav = document.querySelector("nav")
var cataloguehome = document.querySelector(".homebtn")
var cnav = document.querySelector(".cnav")
var catalogue = document.querySelector(".catalogue")
var cataloguefooter = document.querySelector(".cfooter")
var cUl = document.querySelector("#aaa")
var cP = document.querySelectorAll("li>p")


nav.style.width = window.innerWidth + "px "
catalogue.style.height = window.innerHeight + "px"
setInterval(() => {
    nav.style.width = window.innerWidth + "px "
    catalogue.style.height = window.innerHeight + "px"
}, 10)

//目录弹出
cUl.addEventListener("mouseover", (e) => {
    // console.dir(e.target.nextElementSibling.style)
    // console.log(i.children[1].style);
    if (e.target.tagName == "P") {
        for (let i of cP) {
            i.style.color = "rgb(180, 180, 180)"
            i.style.left = "10px"
            i.nextElementSibling.style.left = "300px"
        }
        e.target.style.color = "rgb(226, 255, 252)"
        e.target.nextElementSibling.style.left = "100px"
    }
})
//目录弹出
cUl.addEventListener("click", (e) => {
    // console.dir(e.target.nextElementSibling.style)
    // console.log(i.children[1].style);
    //console.log(e.target);
    if (e.target.tagName == "LI") {
        alert(e.target.innerHTML)
    }
})

//显示设置
cataloguefooter.addEventListener("click", (e) => {
    install.style.display = "block"
    closeCatalogue()
})
//点home出目录
cataloguehome.addEventListener("mouseover", () => {
    catalogue.style.left = "0px"
    console.dir(catalogue);
})

//目录回归并初始化
setInterval(() => {
    document.onmousemove = (e) => {
        if (e.pageX > 300) {
            closeCatalogue()
        }
    }
}, 1000)

function closeCatalogue() {
    catalogue.style.left = "-300px"
    for (let i of cP) {
        i.style.left = "60px"
        i.nextElementSibling.style.left = "300px"
        i.style.color = "rgb(180, 180, 180)"
    }
}