const botaoRegistra = document.getElementById("button")

botaoRegistra.addEventListener("click",  function(){

    const login = document.getElementById("login").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const confirmarSenha = document.getElementById("confirmarSenha").value

    if (senha !== confirmarSenha){
        alert("Erro! As senha não são iguais")
        return
    }

    fetch("http://localhost:3000/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            login: login,
            email: email,
            senha: senha,
        })
    })
    .then(function (resposta){
        return resposta.text()
    })
    .then(function (mensagem){
        alert(mensagem)
    })
})


