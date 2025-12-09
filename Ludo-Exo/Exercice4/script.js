const result = document.querySelector('.result');
const input = document.querySelectorAll('input');

input[0].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    result.style.background = `rgb(${r}, ${g}, ${b})`;
})

input[1].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    result.style.background = `rgb(${r}, ${g}, ${b})`;
})

input[2].addEventListener("change", () => {
    let r = input[0].value;
    let g = input[1].value;
    let b = input[2].value;
    result.style.background = `rgb(${r}, ${g}, ${b})`;
})

input[3].addEventListener("change", () => {
    let padding = input[3].value;
    result.style.padding = `${padding}px`;
})

input[4].addEventListener("change", () => {
    let height = input[4].value;
    result.style.height = `${height}px`;
})
input[5].addEventListener("change", () => {
    let width = input[5].value;
    result.style.width = `${width}px`;
})
input[6].addEventListener("change", () => {
    let cornered = input[6].value;
    result.style.borderRadius = `${cornered}px`;
})
input[7].addEventListener("change", () => {
    let rotation = input[7].value;
    result.style.transform = `rotate(${rotation}deg)`;
})