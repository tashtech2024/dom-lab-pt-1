const mainEl = document.querySelector('main');

mainEl.style.background = 'var(--main-bg)'; // CSS is working without this , should I still have this?

mainEl.innerHTML = ('<h1>DOM Manipulation</h1>');

mainEl.className = 'flexctr';

console.log(mainEl);
console.dir(mainEl);

// const mainEl = document.querySelector('main');
// document.getElementById("mainEl").innerHTML = DOM Manipulation;

// console.log(mainEl);

// let mainEl2 = document.getElementById("DOM Manipulation").innerHTML;
// document.getElementById("mainEl2").innerHTML =

// const ul = document.createElement('ul');
// ul.textContent = 'DOM Manipulation';

// document.getElementById("mainEl").innerHTML = "<h1>DOM Manipulation</h1>"

// console.log(h1);
// console.dir(h1);

// console.log(main);

// const test1 = ['Testing Page'];
// console.log(test1);