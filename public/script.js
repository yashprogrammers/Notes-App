document.getElementById('hamburger').addEventListener('click',()=> {
    let a = document.querySelectorAll('.sidebar p')
    document.querySelector(".sidebar").style.width = '70px'
    for (const e of a) {
        e.style.display = 'none'
    }
})

document.querySelector(".main-input").addEventListener("click",()=> {
    document.querySelector(".main-input").style.display = 'none'
    document.querySelector(".text-input").style.display = 'block'
})