var altura = 0
var largura = 0
var vidas = 1
var tempo = 20 //em segundos

var criaMosquitoTempo = 3000

var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
	var criaMosquitoTempo = 3000

} else if (level === 'dificil') {
	var criaMosquitoTempo = 1500

} else if (level === 'chucknorris') {
	var criaMosquitoTempo = 1000

}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	} else {
		document.querySelector("#cronometro").innerHTML = tempo
	}
}, 1000)

function posicaoRandomica() {
	if (document.querySelector('#mosquito')) {
		document.querySelector('#mosquito').remove()

		if (vidas > 3) {
			window.location.href = " fim_de_jogo.html"
		} else {
			document.querySelector("#v" + vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}
	}



	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
	mosquito.style.left = posicaoX + "px"
	mosquito.style.top = posicaoY + "px"
	mosquito.style.position = "absolute"
	mosquito.id = 'mosquito'

	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	switch (classe) {
		case 0:
			return "mosquito1"
		case 1:
			return "mosquito2"
		case 2:
			return "mosquito3"
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	switch (classe) {
		case 0:
			return "ladoA"
		case 1:
			return "ladoB"
	}
}