let tower = document.getElementById("tower") || (() => {
    const t = document.createElement("div")
    t.id = "tower"
    document.body.appendChild(t)
    return t
})()

let bricks = []

export const build = (n) => {
    let i = 1
    let interval = setInterval(() => {
        if (i > n) {
            clearInterval(interval)
            return
        }
        const brick = document.createElement("div")
        brick.id = `brick-${i}`
        if (i % 3 == 2) {
            brick.dataset.foundation = "true"
        }
        tower.appendChild(brick)
        bricks.push(brick)
        i++
    }, 100)
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id)
        if (!brick) return 
        if (brick.dataset.foundation === "true") {
            brick.dataset.repaired = 'in progress'
        } else {
            brick.dataset.repaired = 'true'
        }
    })
}

export const destroy = () => {
    const last = bricks.pop();
    if (last) last.remove();
}
