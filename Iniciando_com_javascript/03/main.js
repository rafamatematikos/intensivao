/*Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/

const number = 78

let typeOfVar = typeof(number)

if (typeOfVar === "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}