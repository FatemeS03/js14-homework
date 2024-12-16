/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];
let text = prompt("please write a beautiful sentence!")
text= text.split("")
console.log (text)
const word = document.querySelector("#word")
let colorfulText =text.forEach((item)=> {
   const span = document.createElement("span")
   const randomColor = colors[Math.floor(Math.random()* 5)]
 item = span.textContent
  span.style.color = randomColor
  word.appendChild(span)
});

        

        
        
    
