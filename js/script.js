function moveRandomEl(elm){

elm.style.position="absolute"

elm.style.top=Math.random()*80+"%"

elm.style.left=Math.random()*80+"%"

}

const moveRandom=document.querySelector("#move-random")

moveRandom.addEventListener("mouseenter",(e)=>{

moveRandomEl(e.target)

})