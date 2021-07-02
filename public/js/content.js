let content = document.querySelector(".content")
let conbody = document.querySelector(".conbody")

content.style.width = window.innerWidth + "px"
conbody.style.width = (window.innerWidth * 0.6) + "px"
conbody.style.left = 50%

// setInterval(() => {
//     content.style.width = window.innerWidth + "px"
//     conbody.style.width = (window.innerWidth * 0.6) + "px"
//     conbody.style.left = 50%
// },10)


setInterval(() => {
    content.style.width = window.innerWidth + "px"
    conbody.style.width = (window.innerWidth * 0.6) + "px"
    conbody.style.left = "50%"
}, 10)