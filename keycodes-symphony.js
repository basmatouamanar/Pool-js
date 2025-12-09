export const compose = () => {
    let body = document.querySelector("body")
    document.addEventListener("keydown", (e) => {
        if (e.key <= 'z' && e.key >= 'a') {
            let div = document.createElement("div")
            div.className = "note"
            div.textContent = e.key
            const color = e.key.charCodeAt(0) * 10
            div.style.background = `hsl(${color}, 70%, 70%)`
            body.appendChild(div)
        }
        if (e.key === "Backspace") {
            const note = document.querySelectorAll(".note")
            if (note.length > 0) {
                note[note.length - 1].remove()
            }
        }
        if (e.key === "Escape") {
            const note = document.querySelectorAll(".note")
            if (note.length > 0) {
                note.forEach(nt => {
                    nt.remove()
                })
            }
        }

    })

};

/*
 if (e.key === "Backspace") {
      const notes = document.querySelectorAll(".note");
      if (notes.length > 0) {
        notes[notes.length - 1].remove();
      }
    }

    if (e.key === "Escape") {
      const notes = document.querySelectorAll(".note");
      notes.forEach((div) => div.remove());
    }
  });

*/