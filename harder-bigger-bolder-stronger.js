export const generateLetters = () => {
    const body = document.querySelector("body")
    let size = 11

    for (let i = 0; i < 120; i++) {
        const div = document.createElement("div")

        const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
        div.textContent = letter

        div.style.fontSize = size + "px"
        size++

        if (i < 40) div.style.fontWeight = "300"
        else if (i < 80) div.style.fontWeight = "400"
        else div.style.fontWeight = "600"

        body.appendChild(div)
    }
}
