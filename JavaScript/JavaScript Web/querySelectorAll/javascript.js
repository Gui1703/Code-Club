/*
    getElementById() - Trás apenas um elemento (element)
    getElementByClassName() - Trás diversos elementos (HTML Collection)
    getElementByTagName - Trás diversos elementos (HTML Collection)

    querySelector - Trás apenas um elemento, o primeiro que encontrar (element)
    querySelectorAll - Trás TODOS os elementos que encontrar (NodeList)

    NodeList x HTML Collection
*/

const element = document.querySelectorAll('p')

element.forEach(element => {
    console.log(element)
})
