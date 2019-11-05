const btn = 
  document.querySelector('#button') 

const rainbow = 
  ['red','orange','yellow','green','blue','rebeccapurple','violet']

function change() {
  return document.body.style.background = rainbow[Math.floor(7*Math.random())]  //get the style of the dom
}

btn.addEventListener('click', change)


// get everything (all DOM nodes) back from the window/DOM, and convert it to an array (type Object) 2 ways
  // use querySelector
  // typeof Array.from(document.all) , [...document.all]
// get a specific element, then look at it's child nodes/children
  // get nodes as return value, not HTMLcollection because nodes will get you text
  // so dont use methods that return html.  Use .childNodes instead of .children
//get the last item of a list
//prefer full path over css short cuts
  // document.querySelector('[class="dropdown-content"] :nth-child(3)') over document.querySelector('a:last-child')
//get an element and set a class attribute on the element (setAttribute)
//get that class attribute by classname (class is a reserved word in the dom) (className)
//remove the class attribute
// create an element, maybe a list item, and give it a text node (give it some text)
  //const flashy = document.createElement('li');
  //flashy.textContent = 'Flash';

/*
1. Create the element node
2. Create the text node
3. Append or insert the text node to the element node
*/

//elem = document.querySelector('[class="dropbtn"]')
//elem.appendChild(flash)
// elem.insertBefore(flashy, flash) new before the old.  
//remove an element
  // elem.removeChild(flashy)
  // elem.replaceChild(new, old)
//get the text of an element
  //document.querySelector('[href="./qa-pcloud.html"]').text but: 
  // document.querySelector('[class="dropbtn"]').childNodes[0] is more reliable.  .childNodes is a great method
//set some CSS to a list element
 // elem.childNodes[1].style.border = "red 2px solid"  //better to wrap the value in a class on an external stylesheet
 // background-color becomes backgroundColor in the consol
  // elem.childNodes[1].style.backgroundColor = "blue"
  // elem.childNodes[1].style.backgroundColor = ""

// hide an element
  // elem.style.display = 'none';  make it re-appear by giving 'block' or empty string
  //   elem.style.padding = '2%'

//add a click listener, so that something happends when i click on the page
// document.body.addEventListener("click", () => alert('You Clicked!') ); the click and return key press are the same event

// .toogle is good for debugging 

// addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`))
  // passing an arguement, automatically passes the event to the function.
// document.body.addEventListener("click", (event) => alert(event))
// addEventListener('keydown', (event) => console.log(`You pressed the ${event.key === 'c' && event.ctrlKey} character`))
  // the above returns true if my keydown key is equal to cntrl-c
// don't use anonymous functions .  onceParagraph.removeEventListener('click',remove);

/*
function remove(event) {
console.log('Enjoy this while it lasts!');
Use Touch Events With Caution
Touch events are complex and difficult to implement. Many of the properties and
methods mentioned above are still marked as being experimental and not widely
implemented in browsers.
274 JavaScript: Novice to Ninja, 2nd Edition
onceParagraph.style.backgroundColor = 'pink';
onceParagraph.removeEventListener('click',remove);
}
*/