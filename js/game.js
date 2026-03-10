let heartsFound=0
const totalHearts=3

const icons=['🎁','🌹','🧸','🍬','💐','🧁','💌','🎀','🌸']

const container=document.querySelector(".hiding-spots")



icons.sort(()=>Math.random()-0.5)

let heartPositions=new Set()

while(heartPositions.size<totalHearts){

heartPositions.add(Math.floor(Math.random()*icons.length))

}

icons.forEach((icon,index)=>{

const el=document.createElement("div")

el.innerText=icon

el.addEventListener("click",()=>{

if(el.classList.contains("checked")) return

el.classList.add("checked")

if(heartPositions.has(index)){

el.innerText="❤️"

heartsFound++

document.getElementById("counter").innerText=heartsFound

sparkle(el)

if(heartsFound===totalHearts){

container.style.pointerEvents="none"

setTimeout(showLetter,800)

}

}else{

el.classList.add("hide")

}

})

container.appendChild(el)

})

function showLetter(){

document.getElementById("game-stage").style.display="none"

document.getElementById("letter").style.display="block"

confetti()

}

function sparkle(el){

for(let i=0;i<6;i++){

const spark=document.createElement("span")

spark.innerHTML="✨"

spark.style.position="absolute"

spark.style.left=(Math.random()*40-20)+"px"
spark.style.top=(Math.random()*40-20)+"px"

el.appendChild(spark)

setTimeout(()=>spark.remove(),600)

}

}

function confetti(){

for(let i=0;i<50;i++){

const conf=document.createElement("div")

conf.classList.add("confetti")

conf.style.left=Math.random()*100+"vw"

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),3000)

}

}

createFloatingHearts()

function createFloatingHearts(){

const container=document.querySelector(".floating-hearts")

setInterval(()=>{

const heart=document.createElement("span")

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

heart.style.fontSize=(Math.random()*20+15)+"px"

heart.style.animationDuration=(Math.random()*3+3)+"s"

container.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},80)

}