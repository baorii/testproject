//<p> with red text
const p = document.createElement('p'); 


const container = document.querySelector('#container'); //selects first element with container id 

const div = document.createElement('div')//creates div element
div.textContent = "Hey I'm Red!"; //text within div element
div.setAttribute('style', 'color: red');//attributes of text

container.appendChild(div); //adding div to container node

const div2 = document.createElement('div');
div2.innerHTML = "<h3>I'm a blue h3<h3>";
div2.firstChild.setAttribute('style', 'color: blue');

container.appendChild(div2);

/*an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:

another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/
