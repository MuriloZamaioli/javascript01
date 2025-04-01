let salario = parseFloat(prompt("Digite o seu salário: "))
let reaj = parseFloat(prompt("Digite a porcentagem do reajuste desejado : "))
let total = salario + (salario * (reaj/100))
alert("O total do salário reajustado é: " + total)