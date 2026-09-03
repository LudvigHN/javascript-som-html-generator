let rootDOM = document.querySelector("#root")

console.log(rootDOM);

let pElm = document.createElement("p")
pElm.textContent="HTML fra JavaScript"

rootDOM.append(pElm)