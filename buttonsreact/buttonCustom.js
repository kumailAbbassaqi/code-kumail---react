function customRender(reactElement, mainCotainer) {
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.childern
   domElement.setAttribute('style', reactElement.probs.style)

   domElement.onclick = () => {
    window.open(reactElement.props.href, reactElement.props.target);
};

   mainCotainer.appendChild(domElement)
}

const reactElement = {
    type: 'button',
    probs: {
        style : "cursor: pointer; color: green; background: white; border: none",
        href: 'https://google.com',
        target: '_blank'
        
    },
    childern : "hey friend click me"
}
mainCotainer = document.getElementById('root')

customRender(reactElement , mainCotainer)