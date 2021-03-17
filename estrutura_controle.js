//
var nome, nota01, nota02;
nome = prompt("Digite o nome do Aluno")
nota01 = prompt("Digite a primeira nota")
nota02 = prompt("Digite a segunda nota")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >= 50){
    alert("Aprovado! " + nome)
}
else
    alert("Reprovado " + nome)