var all = document.querySelector(".all")
//设置元素
let install = document.querySelector(".install")
let iList = document.querySelector(".iList")
let inav = document.querySelector(".inav")
let background = document.querySelector("#bg")
let idiv = document.querySelector(".iList>li>div")
let upload = document.querySelector("#bg>input")

install.style.width = (window.innerWidth * 0.6) +"px"
inav.style.width = (window.innerWidth * 0.6) +"px"
idiv.style.width = (window.innerWidth * 0.6 - 200) +"px"
idiv.children[0].style.width = (window.innerWidth * 0.6 - 200) +"px"

setInterval(() => {
    install.style.width = (window.innerWidth * 0.6) +"px"
    inav.style.width = (window.innerWidth * 0.6) +"px"
    idiv.style.width = (window.innerWidth * 0.6 - 200) +"px"
    idiv.children[0].style.width = (window.innerWidth * 0.6 - 200) +"px"
}, 10)

//设置部分
//点击列表项颜色变化，并显示此项内容
iList.addEventListener("click", (e) => {
    for (let i of iList.children) {
        console.log(i);
        i.style.background = "rgba(80, 77, 77,0)"
        i.children[0].style.display = "none"
    }

    e.target.style.background = "rgba(44, 43, 43, 0.6)"
    e.target.children[0].style.display = "block"
})

//关闭设置
inav.children[0].addEventListener("click", () => {
    install.style.display = "none"
})

//设置背景图片
background.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName == "IMG") {
        all.style.background = "url('" + e.target.src + "') no-repeat "
        console.log(all.style);
        all.style.backgroundSize = String(window.outerWidth) + "px " + String(window.outerHeight) + "px"
    }
    e.stopPropagation()
})

//上传图片
upload.addEventListener("change",(e)=>{
    let file =e.currentTarget.files[0]
    console.dir(file)
    let form = new FormData()
    form.append(file.name,file)
    $.ajax({
        type: "POST",
        url: "/image",
        data: form,
        dataType: "json",
        processData: false,
        success: function (response) {
            console.log(response);
        }
    })
    // .done(data =>{
    //     let img = $("<img></img>")
    //     img.prop("src",) 
    //     $("#bg").append(img)
    // })
})
