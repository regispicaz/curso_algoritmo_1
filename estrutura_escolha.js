var valor01, valor02, resultado, operacao;

function acaoBotao(params){

valor01 = prompt("Insira o primeiro valor: ")
operacao = prompt("Insra a operação Ex: + , - , / , * : ")
valor02 = prompt("Insira o segundo valor: ")

switch (operacao) {
    case "+":
        resultado = parseInt(valor01) + parseInt(valor02)
        break;
    case "-":
        resultado = parseInt(valor01) - parseInt(valor02)
        break;
    case "/":
        resultado = parseInt(valor01) / parseInt(valor02)
        break;    
    case "*":
        resultado = parseInt(valor01) * parseInt(valor02)
        break;
}
document.getElementById("paragrafo").innerText = resultado
}