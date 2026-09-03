// øvelse 2
let rootDOM = document.querySelector("#root")

console.log(rootDOM);

// øvelse 3
let pElm = document.createElement("p")
pElm.textContent="HTML fra JavaScript"

rootDOM.append(pElm)

// øvelse 4
pElm.classList.add("highlight")

// øvelse 5
let imgElm = document.createElement("img")
imgElm.setAttribute("src","https://placehold.co/300")
imgElm.setAttribute("alt","placeholder image")

rootDOM.append(imgElm)
// øvelse 5

let artElm = document.createElement("article")
let artH1Elm = document.createElement("h1")
let artParagraphElm = document.createElement("p")

artH1Elm.textContent = "this is a header"
artParagraphElm = "This is a paragraph"

artElm.append(artH1Elm,artParagraphElm)

rootDOM.append(artElm)