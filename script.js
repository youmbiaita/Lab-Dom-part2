// Part 1
let root = document;
const mainEl = document.querySelector("main");
console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
mainEl.appendChild(h1);
h1.textContent = "DOM Manipulation";
mainEl.classList.add("flex-ctr");

//Part2: Menu Bar
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0E9AA7";
topMenuEl.classList.add("flex-around");

// Part3: Adding Menu Buttons
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];
menuLinks.forEach(link => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

//Part3 of Part Two
//1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part4 : Adding menu Interaction

const topMenuLinks = topMenuEl.getElementsByTagName("a");
console.log(topMenuLinks)
topMenuEl.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  }
  console.log(evt.target.textContent);
  if (!evt.target.classList.contains("active")) {
    evt.target.classList.add("active");
    Array.from(topMenuLinks).forEach(link => {
      if (link !== evt.target) {
        link.classList.remove("active");
      }
    })
//Part5: Adding Submenu Iteraction
    if (evt.target.textContent !== "about") {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  } else {
    evt.target.classList.remove("active");
    subMenuEl.style.top = "0";
  }
  buildSubmenu(evt.target.textContent);
});

function buildSubmenu (selectedItem){
  subMenuEl.innerHTML = "";
  menuLinks.forEach(link => {
    if(link.text === selectedItem && selectedItem !== "about") {
      link.subLinks.forEach(subLink => {
        const a = document.createElement("a");
        a.setAttribute("href", subLink.href);
        a.textContent = subLink.text;
        subMenuEl.appendChild(a);
      })
    }
  })
}

subMenuEl.addEventListener("click", function (evt){
  evt.preventDefault();
  if (evt.target.tagName !== "A") {
    return;
  }
  console.log(evt.target.textContent);
  subMenuEl.style.top = "0";
  Array.from(topMenuLinks).forEach(link => {
    link.classList.remove("active");
  })

  const h1 = document.createElement("h1");
subMenuEl.appendChild(h1);
h1.textContent = "a";
})




