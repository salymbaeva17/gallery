const largeImg = document.querySelector(".lg-img")
const smallImages = document.querySelectorAll(".sm-img")
const smallBox = document.querySelector(".small-box")


smallBox.addEventListener("click",(e)=>{
    if(e.target.classList[0] === 'sm-img'){
        largeImg.src = e.target.src
        smallImages.forEach(el => el.classList.remove('active-img'))
        e.target.classList.add('active-img')
    }
})
