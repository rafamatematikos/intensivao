/*
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

const number = 43
const restOfDiv = number % 2

if (restOfDiv === 0) {
  alert('É um número par')
} else {
  alert('É um numero ímpar')
}
