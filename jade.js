document.body.classList.add("MenuFechado")

function OpenMenu() {
    document.body.classList.remove("MenuFechado")

    document.body.classList.add("MenuAberto")
}

function CloseMenu() {
    document.body.classList.remove("MenuAberto")

    document.body.classList.add("MenuFechado")
}