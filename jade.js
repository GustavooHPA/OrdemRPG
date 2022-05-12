document.body.classList.add("MenuFechado")

function OpenMenu() {
    document.body.classList.remove("MenuFechado")

    document.body.classList.add("MenuAberto")

    console.log('PORRA')
}

function CloseMenu() {
    document.body.classList.remove("MenuAberto")

    document.body.classList.add("MenuFechado")
}