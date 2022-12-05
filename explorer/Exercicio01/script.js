


let firstNumber = Number(prompt('Digite o primeiro número: '));
let secondNumber = Number(prompt('Digite o segundo número: '));


function sum(firstNumber, secondNumber) {
    return firstNumber+secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function div(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function multi(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function rest(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function oddOrEven(number) {
    let oddOrEven = number % 2 == 0 ? 'par' : 'ímpar';
    return oddOrEven;
}

function sameNumbers(firstNumber, secondNumber) {
    let isSame;
    return sameNumber = firstNumber == secondNumber ? 'iguais' : 'diferentes';
}



alert(`A soma dos dois números é: ${sum(firstNumber, secondNumber)}`);
alert(`A subtração dos dois números é: ${sub(firstNumber, secondNumber)}`)
alert(`A divisão dos dois números é: ${div(firstNumber, secondNumber)}`)
alert(`A multiplicação dos dois números é: ${multi(firstNumber, secondNumber)}`)
alert(`O resto da divisão dos dois números é: ${rest(firstNumber, secondNumber)}`)
alert(`A soma dos dois números é ${oddOrEven(sum(firstNumber, secondNumber))} : ${sum(firstNumber, secondNumber)}`)
alert(`Os números inseridos são ${sameNumbers(firstNumber, secondNumber)}.`)

