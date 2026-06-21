const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/registrar", function (req, res) {
    const login = req.body.login
    const email = req.body.email
    const senha = req.body.senha
    const confirmarSenha = req.body.confirmarSenha

    console.log("Login:", login)
    console.log("Email:", email)
    console.log("Senha:", senha)
    console.log("Confirmar senha:", confirmarSenha)

    res.send("Usuario recebido no backend")
})

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000")
})

