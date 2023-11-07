const pianoKeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")
const keys = document.querySelectorAll(".key span")
const keysArray = []

let audio = new Audio(`src/audios/a.wav`)

const playTune = (key) => {
    audio.src = `src/audios/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)
}

pianoKeys.forEach((key) => {
    keysArray.push(key.dataset.key)
    // console.log(keysArray)
    key.addEventListener("click", () => playTune(key.dataset.key))
})

document.addEventListener('keydown', (e) => {
    if(keysArray.includes(e.key.toLowerCase())) {
        playTune(e.key)
    }
})

volumeSlider.addEventListener("change", () => {
    // console.log(volumeSlider)
    // console.log(volumeSlider.value)
    audio.volume = volumeSlider.value
    // console.log(audio.volume)
})

keysCheck.addEventListener("click", () => {
    showHideKeys()
})

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}




