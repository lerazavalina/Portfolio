// Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

// Bottons
 const startButton = document.querySelector('.start')
 const pauseButton = document.querySelector('.pause')
 const stopButton = document.querySelector('.stop')
 const newButton = document.querySelector('.new')

 // Listeners
startButton.addEventListener('click', () =>{
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click',() =>{
    clearInterval(interval)
})

stopButton.addEventListener('click',() =>{
    clearInterval(interval)
    clearFields()
})

newButton.addEventListener('click', () => {
    clearInterval(interval)
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText = `Result: ${hour}:${minute}:${second}:${millisecond}`
    results.append(block)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

 // Variables
 let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval

function startTimer() {
    millisecond++

    // Millisecond
    if (millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secondElement.innerText = "0" + second
        millisecond = 0
        millisecondElement.innerText = "0" + millisecond
    }

    // Second
    if (second < 9) {
        secondElement.innerText = "0" + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }

    // Minute
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    
     // Hours
    if (hour > 9) {
        hourElement.innerText = hour
    }
}

function clearFields() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"

}