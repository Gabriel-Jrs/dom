const computador = {
    marca: "dell",
    processador: "core i5",
    memoria: "8GB",
    hd: "1TB"
}


function CriarNo() {
    const elementoMarca = document.createElement("h1")
    elementoMarca.innerText = `${computador.marca}`

    const elementoProc = document.createElement("h2")
    elementoProc.innerText = `${computador.processador}`

    const elementoRam = document.createElement("h2")
    elementoRam.innerText = `${computador.memoria}`

    const elementoHd = document.createElement("p")
    elementoHd.innerText = `${computador.hd}`

    const divPC = document.createElement("div")
    divPC.classList.add("Produto")
    divPC.appendChild(elementoMarca)
    divPC.appendChild(elementoProc)
    divPC.appendChild(elementoRam)
    divPC.appendChild(elementoHd)

    document.body.appendChild(divPC)


}
