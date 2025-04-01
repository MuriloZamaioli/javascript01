let nome = prompt("Digite seu nome: ")
let idade = prompt("Digite sua idade: ")

if(idade<18){
    alert("Ola "+nome+", você ainda não pode fazer aulas de direção")
}
else if(idade>=18){
    alert("Ola "+nome+", seja bem vindo(a) nossa escola! Já fez a matrícula?")
}