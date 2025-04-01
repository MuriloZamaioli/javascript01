let num1 = parseFloat(prompt("Digite um número: "))
let num2 = parseFloat(prompt("Digite um número: "))
let operacao = prompt("Escolha qual tipo de operação: \n 1-Adição \n 2-Subtração \n 3-Multiplicação \n 4-Divisão")

if(operacao=="1"){
    alert("O resultado da Adição é " + (num1 + num2))
}
else if(operacao=="2"){
    alert("O resultado da Subtração é " + (num1-num2))
}
else if(operacao=="3"){
    alert("O resultado Multiplicação é " + (num1*num2))
}
else if(operacao=="4"){
    alert("O resultado Divisão é " + (num1/num2))
}
else{
    alert("Tente novamente")
}
