function clicar() {
    var nome = document.getElementById("usuário")
    var usuario = String(nome.value)
    var password = document.getElementById("senha")
    var senha = String(password.value)
    var jade = `Jade Loren`
    var senhazinhajade = `MarceloEuTeAmo`
    var marco = `Marco`
    var senhazinhamarco = `marco123`
    var zahara = `Zahara`
    var senhazinhazahara = `zahara123`
    var zoe = `Zoe Felix Patel`
    var senhazinhazoe = `zoe12345`

    var cama = `Cama`
    var senhazinhacama = `nossaessasenhaeboa`

    var mestre = `MestreHPA`
    var senhazinhamestre = `senha1234`

    if (usuario == jade && senha == senhazinhajade) {
        alert("Bem vindo, Jade Loren!")
        window.location.replace("http://127.0.0.1:5500/Circo%20dos%20Horrores/jade.html")
    } else if (usuario == marco && senha == senhazinhamarco) {
        alert("Bem vindo, Marco!")
    } else if (usuario == zahara && senha == senhazinhazahara) {
        alert("Bem vinda, Zahara!")
    } else if (usuario == zoe && senha == senhazinhazoe) {
        alert("Bem vinda, Zoe Felix Patel!")
    } else if (usuario == cama && senha == senhazinhacama) {
        alert("Bem vindo, Cama!")
    } else if (usuario == mestre && senha == senhazinhamestre) {
        alert("Bem vindo, Mestre!")
    }
}