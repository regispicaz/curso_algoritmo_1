
function acaoBotao() {
    
    var nome, limite, contador, idade
    limite = prompt("Digite quantas vezes será verificada a idade: ")
    
    contador = 0
    while(contador < limite){
        nome = prompt("Digite Seu nome: ")
        idade = prompt("Digite a idade de " + nome + " :")
        if (idade >= 18)
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade"
        else
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade"
        contador++
    }

    

}