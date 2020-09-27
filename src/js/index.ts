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
node.setAttribute("id","novy")
node.classList.add("healthy")
node.appendChild(textnode)
document.getElementById("list").appendChild(node)




