let game = false
let randomNumber
let playerGuess
let attemptCount = 1
let number = 15

function GameGuessTheNumber() {

    while (true) {
        if (game === false) {
            alert('Начнем новую игру!')
            startGame()
        }

        // игра
        while (game) {

            playerGuess = prompt(`Введите число от 1 до ${number}`)
            // проверка корректности введенных данных
            if (answerChecker(playerGuess)) {
                // проверка числа 
                if (+playerGuess === randomNumber) {

                    alert('Поздравляю! Вы выйграли!')
                    TheEndOfTheGame()
                }

                // подсказки
                else {
                    if (+playerGuess > randomNumber)
                        alert(`Слишком много, попытка номер ${attemptCount}`)
                    if (+playerGuess < randomNumber)
                        alert(`Слишком мало, попытка номер ${attemptCount}`)

                    if (attemptCount === 5) {
                        alert('Вы проиграли :(')
                        TheEndOfTheGame()
                    }
                    // конец игры при > 5
                    attemptCount++
                    

                }
            }
            else {
                alert('Введены неккоректные данные. Попробуйте снова')
            }

        }

    }
}
function numberRange() {
    number = prompt('Введите диапозон загадываемых чисел, в котором хотите играть. По умолчанию 15');
    if (number == '') number = 15;
    return number

}

function startGame() {
    game = true

    numberRange()

    if (answerChecker(number)) {
        alert(`Компьютер загадал число от 1 до ${number}, у вас 5 попыток на разгадку`)
        randomNumber = Math.floor(Math.random() * number) + 1;
    }
    else {
        alert('Введены неккоректные данные. Попробуйте снова')
        startGame()
    }

}

function TheEndOfTheGame() {
    game = false
    attemptCount = 1
}

function answerChecker(s) {
    return (!isNaN(s))
}


GameGuessTheNumber()