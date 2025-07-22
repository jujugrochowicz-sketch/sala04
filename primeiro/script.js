function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById('resposta')
    resposta.textContent = numero1 + numero2
}

function subtracao(){
    var numero1 = document.getElementById("n3").valueAsNumber
    var numero2 = document.getElementById("n4").valueAsNumber
    var resposta = document.getElementById('Resposta')
    resposta.textContent = numero1 - numero2
}