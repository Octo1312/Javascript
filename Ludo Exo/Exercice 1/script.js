const btn = document.querySelector(".btn")
const rectangle = document.querySelector(".rectangle")

    btn.addEventListener('click', () => {
        rectangle.style.backgroundColor = "red";
    })

const btn2 = document.querySelector(".btn2")
const rectangle2 = document.querySelector(".rectangle2")

    btn2.addEventListener('mouseenter', () => {
        rectangle2.style.width = "50px";
        rectangle2.style.height = "50px";
        rectangle2.style.border = "1px pink solid";
    })

const btn3 = document.querySelector(".btn3")
const rectangle3 = document.querySelector(".rectangle3")

    btn3.addEventListener('mouseleave', () => {
        rectangle3.style.marginLeft = "5rem"
    })