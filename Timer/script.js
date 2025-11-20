const display = document.getElementById('display')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resetBtn = document.getElementById('resetBtn')

let hours = 0
let minutes = 0
let seconds = 0
let deciseconds = 0
let intervalId = null
let isRunning = false

function updateDisplay() {
  const h = hours
  const m = minutes < 10 ? '0' + minutes : minutes
  const s = seconds < 10 ? '0' + seconds : seconds
  const ds = deciseconds

  display.textContent = `${h}:${m}:${s}:${ds}`
}

function increment() {
  deciseconds++

  if (deciseconds === 10) {
    deciseconds = 0
    seconds++

    if (seconds === 60) {
      seconds = 0
      minutes++

      if (minutes === 60) {
        minutes = 0
        hours++
      }
    }
  }
  updateDisplay()
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true
    intervalId = setInterval(increment, 100)
  }
})

pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false
    clearInterval(intervalId)
    intervalId = null
  }
})

resetBtn.addEventListener('click', () => {
  isRunning = false
  clearInterval(intervalId)
  intervalId = null

  hours = 0
  minutes = 0
  seconds = 0
  deciseconds = 0

  updateDisplay()
})

updateDisplay()