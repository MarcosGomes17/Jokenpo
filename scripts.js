const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const resetButton = document.querySelector('#reset')

let humanScoreNumber = 0
let machineScoreNumber = 0

resetButton.style.display = 'none'

const playHuman = (humanChoice) => {

    if (resetButton.style.display === 'none') {
        resetButton.style.display = 'block'
    }

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)

    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.remove('machine-picked')
    })

    document.querySelector(`#${machine}`).classList.add('machine-picked')

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para helena!"
    }
}

resetButton.addEventListener('click', () => {
    humanScoreNumber = 0
    machineScoreNumber = 0

    humanScore.innerHTML = humanScoreNumber
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Pontuações zeradas!"

    document.querySelectorAll('.choice').forEach(btn => {
        btn.classList.remove('machine-picked')
    })

    resetButton.style.display = 'none'

    setTimeout(() => {
        result.innerHTML = ''
    }, 3000)
})

