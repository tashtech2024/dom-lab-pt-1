// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

// ? Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');

// ?Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//? Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.background = 'var(--main-bg)'; // CSS is working without this , should I still have this?
// ? Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = ('<h1>DOM Manipulation</h1>');

//? Add a class of flex-ctr to mainEl : !Hint: Use the Element.classList API.

mainEl.classList.add("flex-ctr");
console.log(mainEl);

//? Part 2: Creating a Menu Bar

//?Next, create a blank menu bar that we can use to later add some interactivity to the page:

//? Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector('nav');
//?Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.background = 'var(--top-menu-bg)';
//? Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';
//? Add a class of flex-around to topMenuEl.
topMenuEl.className = 'flex-around';
console.log(topMenuEl);

//? Part 3: Adding Menu Buttons

// copied the following data structure to the top of your index.js file; you will use it to create your menu buttons. ^^^^^^^^^^^^

// Iterate over the entire menuLinks array and for each "link" object:
for (let i = 0; i < menuLinks.length; i++) {
    const a = document.createElement('a'); // Create an <a> element.
    a.setAttribute('href', menuLinks[i].href) //Set the new element's content to the value of the text property of the "link" object.
    a.textContent = menuLinks[i].text // On the new element, add an href attribute with its value set to the href property of the "link" object.
    topMenuEl.appendChild(a); // Append the new element to the topMenuEl element
}
