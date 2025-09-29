document.querySelector(".main-input").addEventListener("click",()=> {
    document.querySelector(".main-input").style.display = 'none'
    document.querySelector(".text-input").style.display = 'block'
})

// set navigation bar 
document.getElementById("hamburger").addEventListener("click",() => {
    let navp = document.querySelectorAll(".sidebar p")
    let li = document.querySelectorAll(".sidebar li")
    document.querySelector(".sidebar").classList.toggle("sidebarWidth")
    document.querySelector(".parent").classList.toggle("parentGrid")
    for (let i = 0; i < navp.length; i++) {
        navp[i].classList.toggle('sidebarDisplay')
        li[i].classList.toggle('collapse')
    }
})

// quill text editor

