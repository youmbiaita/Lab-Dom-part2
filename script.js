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
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
menuLinks.forEach((link, i) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});
const names2 = ["Join", "Customer Service", "Address"];
const names3 = ["Blog", "Register", "Login", "Log Out"];
const colors = ["red", "blue", "gold", "dark grey"];
names2.forEach((liNames2) => {
  const li2 = document.createElement("li");
  const aTag1 = document.createElement("a");
  aTag1;
  aTag1.textContent = liNames2;
  li2.appendChild(aTag1);
  //   ol1.appendChild(li2);
});

//Part3 of Part Two
//1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector("sub-menu");
subMenuEl.style.height = "100%";