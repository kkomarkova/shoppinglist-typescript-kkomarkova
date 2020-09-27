let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

let myList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");

let mList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");

console.log(myList);
console.log(mList);

let fElement:HTMLLIElement = <HTMLLIElement> document.getElementById("1");
fElement.classList.add("somethingbetween")

let uElement:HTMLLIElement =<HTMLLIElement> document.getElementById("2");
uElement.setAttribute("hidden","true")

let lop:HTMLCollectionOf<HTMLLIElement> = 
<HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");

while(lop.length>0)
{
    lop[0].className ="healthy"
}
let pElement:HTMLLIElement = <HTMLLIElement> document.getElementById("1").parentNode;
console.log(pElement);

let d = document.getElementById('list');
console.log(d.firstElementChild.classList.replace("unhealthy", "healthy"))
console.log(d.lastElementChild.classList.replace("healthy", "unhealthy"))

let node = document.createElement("li")
let textnode = document.createTextNode("Strawberries")
node.setAttribute("id","strawberries")
node.classList.add("healthy")
node.appendChild(textnode)
document.getElementById("list").appendChild(node)

let u = document.getElementById("list")
let n = document.createElement("li")
let text = document.createTextNode("Pears")
n.setAttribute("id","pears")
n.classList.add("healthy")
n.appendChild(text)

u.insertBefore(n, u.childNodes[0]);

//Move a node
let newList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");
    
// Delete element in the list
var list = document.getElementById("list")
list.removeChild(list.childNodes[0]);






