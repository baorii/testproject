//<p> with red text
const p = document.createElement('p'); 


const container = document.querySelector('#container'); //selects first element with container id 

const div = document.createElement('div')//creates div element
div.textContent = "Hey I'm Red!"; //text within div element
div.setAttribute('style', 'color: red');//attributes of text

container.appendChild(div); //adding div to container node