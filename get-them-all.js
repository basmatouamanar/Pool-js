export const getArchitects = () => {
    const architect = document.getElementsByTagName("a")
    const NanArchitect = document.querySelectorAll("body *:not(a)")
    return [Array.from(architect), Array.from(NanArchitect)]
}


// document.getElementsByTagName("a");
// document.querySelectorAll("body *:not(a)");
export const getClassical = () => {
    let architect = document.getElementsByTagName("a")
    architect = Array.from(architect)
    let classical = architect.filter(element => element.classList.contains("classical"))
    let Nonclassical = architect.filter(element => !element.classList.contains("classical"))
    return [classical, Nonclassical]
}
//element.classList.contains

export const getActive = () => {
    let architect = document.getElementsByTagName("a")
    architect = Array.from(architect)
    let classical = architect.filter(el => el.classList.contains("classical"))
    let active = classical.filter(element => element.classList.contains("active"))
    let nonActive = classical.filter(element => !element.classList.contains("active"))
    return [active, nonActive]

}

export const getBonannoPisano = () => {
    let bonannopisano = document.getElementById("BonannoPisano")
    let architect = document.getElementsByTagName("a")
     architect = Array.from(architect)
    let classical = architect.filter(el => el.classList.contains("classical"))
    let active = classical
    .filter(element => element.classList.contains("active"))
    .filter(element => element.id !== ("BonannoPisano"))
    return [bonannopisano, active]
}

