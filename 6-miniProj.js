//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red


const h1 = document.querySelector("h1")
const randomColor = ()=>{
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}
setInterval(()=>{
    h1.style.color = randomColor()
}, 1000)

// 2
const challengeDone = document.querySelector("ul>:first-child")
challengeDone.style.backgroundColor = "green"
// console.log(challengeDone)

// 3 and 4
const li = document.querySelectorAll("li")
for (let i =1; i < li.length; i++){
    // if (i === 1){
    //     li[i].style.backgroundColor = "yellow"
    // }else {
    //     li[i].style.backgroundColor = "red"
    // }

    if(li[i].textContent.includes('Ongoing') ){
        li[i].style.backgroundColor = "yellow"
    }else if (li[i].textContent.includes('Coming')){
        li[i].style.backgroundColor = "red"
    }
}