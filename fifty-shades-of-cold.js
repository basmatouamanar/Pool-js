import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
    const head = document.querySelector("head")
    const style = document.createElement("style")
    let styles = ""
    colors.forEach((element) => {
        styles += `.${element} {\n background: ${element}; \n}`

    });
    style.textContent = styles
    head.appendChild(style)
}

export const generateColdShades = () => {
    const body = document.querySelector("body")
     const coldWords = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];
    colors.forEach(color => {
         if (coldWords.some(cold => color.toLowerCase().includes(cold))){

             const div = document.createElement("div")
             //div.classList.add(color)
             div.className = color
             div.textContent = color
             body.appendChild(div)
         }
    })
}

export const choseShade = (arg) => {
    const divs = document.querySelectorAll("div")
    divs.forEach(div => {
        const text = div.textContent
        div.className = arg
        div.textContent = text
    })
}