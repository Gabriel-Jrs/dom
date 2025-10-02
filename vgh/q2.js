function menu() {
    let pokemons = []
    let pokemonAtual = 0

    let escolha = ""
    do {
        escolha = prompt(`
Menu:
a) Gerar pokemão
b) Ver taxas de captura do pokemão atual
c) Histórico de pokemãos gerados
e) Encerrar`)

        switch (escolha) {
            case "a":
                let resultado 
                break
            case "b":
                (pokemonAtual) {
                    mostrarTaxasCaptura(pokemonAtual)
                break
            case "c":
                mostrarHistorico(pokemons)
                break
        }

    } while (escolha !== "e")
}