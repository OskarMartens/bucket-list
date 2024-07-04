const list = document.querySelector(".list");
//1
const paragraph1 = document.createElement("p");
paragraph1.innerHTML = "Go skydiving";
document.querySelector(".list").appendChild(paragraph1);

//2
const paragraph3 = document.createElement("p");
paragraph3.innerHTML = "Donate blood at least 100 times (afterend)";
list.insertAdjacentElement("afterend", paragraph3);

//3
console.log(list.innerHTML);

//4
const newItem = "<p>Go to Antarctica</p>";

//5
// list.innerHTML = newItem;

//6
list.insertAdjacentHTML("beforebegin", newItem);

//7
var childCount = list.childElementCount;

for(var i = 1; i < 4; i++){
    const property = document.createElement("p");
    property.innerHTML = `<p>${childCount + i} New Item</p>`;
    document.querySelector(".list").appendChild(property);
}

//8
console.log("ChildCount: " + list.children.length);

//9
const header = document.querySelector(".owner");
header.innerHTML = "Oskar's"
console.log(header.innerHTML);

// 10
const replacement = document.createElement("h1");
replacement.innerHTML = "<h1>Hello World!</h1>";
const firstChild = list.firstElementChild;

list.replaceChild(replacement, firstChild);

//11
const newReplacement = document.createElement("p");
newReplacement.innerHTML = "<p>Climb a mountain.</p>"
const secondChild = list.children[2];

list.replaceChild(newReplacement, secondChild);

//12
list.removeChild(list.lastElementChild);