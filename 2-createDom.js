//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)

const firstPara= document.querySelector("p")
console.log(firstPara)

//todo3. Get each of the paragraph using document.querySelector(#id)

const first = document.querySelector("#first")
const second = document.querySelector("#second")
const third = document.querySelector("#third")
const fourth = document.querySelector("#fourth")

//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
 
const p = document.querySelectorAll("p")
console.log(p)

//todo5. Loop through the nodeList and get the text content of each paragraph
 
p.forEach((para)=> console.log(para.textContent))


//todo6. Set a text content to the fourth paragraph

fourth.textContent += " hi everybody"


//todo7. Set id and class attribute for all the paragraphs using different methods
// روش اول
const pClass= p.forEach((para,index)=> para.classList.add("add"+ (index + 1)))

const pId= p.forEach((para, index)=>para.id ="p"+ index)
console.log(p)

// روش دوم
for (let i = 0; i< p.length; i++){
    p[i].setAttribute("class","class"+ i)
    p[i].setAttribute("id","id"+i )
}
console.log(p)

//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

first.style.color = "red"
second.style.backgroundColor = "blue"
third.style.fontSize = "50px"
fourth.style.textAlign = "center"

//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

for(let i =0; i< p.length; i++){
    if (i % 2 === 0){
        p[i].style.color = "green"
    }else{
        p[i].style.color = "red"
    }
}