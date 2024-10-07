function customRender(reactElement, mainCotainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.probs.href)
    domElement.setAttribute('target', reactElement.probs.target)
    
    mainCotainer.appendChild(domElement)
}
const reactElement = {
    type : "a",
    probs : {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'click me to visit google'
}

const mainCotainer = document.querySelector("#root")

customRender(reactElement , mainCotainer)
