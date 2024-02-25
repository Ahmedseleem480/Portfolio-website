let droplist = document.querySelector(".droplist")
console.log(droplist)
droplist.addEventListener("click", () => {
    document.querySelector(".list").style.cssText = "right: 0;"
})
let closeNav = document.querySelector(".closeNav")
closeNav.addEventListener("click", () => {
    document.querySelector(".list").style.cssText = "right: -100%"
})