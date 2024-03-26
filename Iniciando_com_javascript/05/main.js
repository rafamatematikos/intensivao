/*Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/

const boolean = 5 == 8

let typeOfVar = typeof(boolean)

if (typeOfVar === "boolean") {
  alert("É um boleano")
} else {
  alert("Não é um booleano")
}