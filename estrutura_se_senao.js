var valor01, valor02, resultado, operacao;

function acaoBotao(params){

valor01 = prompt("Insira o primeiro valor: ")
operacao = prompt("Insra a operação Ex: + , - , / , * : ")
valor02 = prompt("Insira o segundo valor: ")

if (operacao == "+"){
    resultado = parseInt(valor01) + parseInt(valor02)
}else if(operacao == "-"){
    resultado = parseInt(valor01) - parseInt(valor02)
}else if(operacao == "/"){
    resultado = parseInt(valor01) / parseInt(valor02)
}else if(operacao == "*"){
    resultado = parseInt(valor01) * parseInt(valor02)
}

document.getElementById("paragrafo").innerText = resultado

}
 