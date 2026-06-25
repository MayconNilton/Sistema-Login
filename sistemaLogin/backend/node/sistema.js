const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const usuarios = []

app.post("/registrar", function (req, res) {
    const login = req.body.login
    const email = req.body.email
    const senha = req.body.senha

    usuarios.push({
        login:login,
        email:email,
        senha:senha,
    })

    res.send("Usuario Cadastrato com sucesso")
})

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000")
})


