var rafa = {

    nome: "Leicester",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var paulo = {

    nome: "Arsenal",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var gui = {

    nome: "Tottenham",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0   
}

var leo = {

    nome: "Man City",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

function calculaPontos(jogador) {

    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
gui.pontos = calculaPontos(gui)
leo.pontos = calculaPontos(leo)

var jogadores = [rafa, paulo, gui, leo]

function exibeJogadoresNaTela(jogadores) {

    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {

        elemento += "<tr><td><img id='NovoJogador' src='" + jogadores[i].NovoJogador + "'></td>"

        elemento += "<td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"

        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
}

var tabelaTimes = document.getElementById("tabelaTimes")
tabelaTimes.innerHTML = elemento

}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {

    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)

}

function adicionarDerrota(i) {

    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarJogador() {

    var NovoJogador = document.getElementById("NovoJogador").value 

    jogadores.push({

        nome: NovoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0

})

exibeJogadoresNaTela(jogadores)

}

function ZerarPontuação(i) {

    for (var i = 0; i < jogadores.length; i++) {

        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = 0
        exibeJogadoresNaTela(jogadores)
    }
}