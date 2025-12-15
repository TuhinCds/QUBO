// সব NavDefClick কে select করো
const navLists = document.querySelectorAll(".NavDefClick");

navLists.forEach((lists) => {
    const buttons = lists.querySelectorAll("li button")

    buttons.forEach((btns ,index) => [
        btns.addEventListener('click', () => {

            navLists.forEach(l => {
                l.querySelectorAll("li button").forEach(u => u.classList.remove("active"))
            })
            navLists.forEach(btnsTr => {
                const btnsAll = btnsTr.querySelectorAll("li button")
                if (btnsAll[index]) btnsAll[index].classList.add("active")
            })
        })
    ])
})
// leftContentBtns
const leftContentBtns = document.querySelector('.main-header .leftContentBtns')
const leftContentBtnsAll = leftContentBtns.querySelectorAll("button")
const lineHr = document.querySelector(".lineHr")

leftContentBtnsAll.forEach(btns => {
    btns.addEventListener('click', () => {
        leftContentBtnsAll.forEach(btns2 => {
        btns2.classList.remove("active")
    })
    btns.classList.add("active")
    })
})

const forYoubBtn = document.getElementById("forYoubBtn")
const ProjectsBtn = document.getElementById("ProjectsBtn")


forYoubBtn.addEventListener("click", () => {
    localStorage.setItem("islineHr", 'false')
        forYoubBtn.classList.add("active")
        ProjectsBtn.classList.remove("active")
        lineHr.classList.remove("RightSide")
})
ProjectsBtn.addEventListener("click", () => {
    localStorage.setItem("islineHr", 'true')
    forYoubBtn.classList.remove("active")
    ProjectsBtn.classList.add("active")
    lineHr.classList.add("RightSide")
})

let lineHrData = localStorage.getItem("islineHr")
if (lineHrData === "true") {
    lineHr.classList.add("RightSide")
    forYoubBtn.classList.remove("active")
    ProjectsBtn.classList.add("active")
} else {
    lineHr.classList.remove("RightSide")
    forYoubBtn.classList.add("active")
    ProjectsBtn.classList.remove("active")
}