function valordVenda() {
    let vendas = []  
    let contador = 0 
    let totalVendas = 0 
    let vvenda = parseFloat(prompt("Digite quantas vendas você teve?"))
    
    for (let i = 0; i < vvenda; i++) {
        let valorVenda = parseFloat(prompt(`Digite o valor da venda ${i + 1}:`)) 
        vendas.push(valorVenda)  
        totalVendas += valorVenda  
        contador++  
    }

    vendas(contador, totalVendas) 
}

function vendas(cont, total) {
    if(contador==0){
        console.log("NAO HA VENDAS!")
        menu()
    }
    else{
    console.log(`Total de vendas: ${cont}`)
    console.log(`Valor total das vendas: R$ ${total.toFixed(2)}`)
    }
}
function vdispesas(){
    let valordes = []  
    let contador = 0 
    let totalDespesas = 0 
    let despesas = parseFloat(prompt("Digite quantas vendas você teve?"))
    
    for (let i = 0; i < despesas; i++) {
        let totalDespesas = parseFloat(prompt(`Digite o valor da despesa ${i + 1}:`)) 
        vendas.push(valorVenda)  
        totalDespesas += valordes 
        contador++  
    }

    despesas(contador, totalDespesas)
}
function despesas(cont, total) {
    if(contador==0){
        console.log("NAO HA DESPESAS!")
        menu()
    }
    else{
    console.log(`Total de DESPESAS: ${cont}`)
    console.log(`Valor total das DESPESAS: R$ ${total.toFixed(2)}`)
    }
}
function desejo(esc) {
    switch (esc) {
        case "1":
            valordVenda(esc)
            break
        case "2":
            vendas(esc)
            break
        case "3":
            vdispesas(esc)
            break
        case "4":
            despesas(esc)
            break
    }


}

function menu() {
    let escolha = 0
    do {
        escolha = prompt(`
    1) Inserir Valor de uma Venda
	2) Ver status das vendas do dia (numero de vendas e valor total vendido)
	3) Inserir Valor de uma Despesa 
	4) Ver total de despesas do dia
	5) Encerrar `)

        if (escolha >= "1" && escolha <= "4") {
            desejo = (escolha)

        }

    } while (escolha != "5")
}
menu()
