//<p> with red text
const container = document.querySelector('#container'); //selects first element with container id 

const div = document.createElement('div')//creates div element
div.textContent = "Hey I'm Red!"; //text within div element
div.setAttribute('style', 'color: red');//attributes of text

container.appendChild(div); //adding div to container node

//an <h3> with blue text that says “I’m a blue h3!”
const div2 = document.createElement('div');
div2.innerHTML = "<h3>I'm a blue h3<h3>";
div2.firstChild.setAttribute('style', 'color: blue');

container.appendChild(div2);

//a <div> with a black border and pink background color
const div3 = document.createElement('div');
div3.setAttribute('style', 'border: 1px solid black; background-color: pink'); 

//<h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

//<p> that says “ME TOO!”
const p = document.createElement('p'); 
p.innerText = "ME TOO!";

//adding elements too div3 
div3.appendChild(h1);
div3.appendChild(p);

container.appendChild(div3);

