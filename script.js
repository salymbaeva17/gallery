// const largeImg = document.querySelector(".lg-img")
// const smallImg = document.querySelector(".sm-img")
//
//
// smallImg.addEventListener("click", (e)=>{
//     if (e.target.classList[0] === "sm-img"){
//         largeImg.src = e.target.src
//         console.dir(e.target.src)
//     }
// })

const bigImg = document.querySelector(".big-img")
const smallImg = document.querySelector(".small")
const images = document.querySelectorAll('.small-img')

smallImg.addEventListener('click',(event)=>{
    if(event.target.classList[0] === 'small-img'){
        bigImg.src = event.target.src
        images.forEach(el => el.classList.remove('active'))
        event.target.classList.add('active')
    }
})


// function myFunction(images) {
//     const bigSizeImg = document.getElementById("big-size-img")
//     bigSizeImg.src = images.src
//
//     bigSizeImg.parentElement.style.display = "block"
//     images.focus(images.style.border === "5px solid yellow")
// }
// myFunction()