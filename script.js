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

rootDOM.append(imgElm)