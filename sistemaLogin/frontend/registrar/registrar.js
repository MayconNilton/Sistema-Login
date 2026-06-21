const botaoRegistra = document.getElementById("button")

botaoRegistra.addEventListener("click",  function(){

    const login = document.getElementById("login").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const confirmarSenha = document.getElementById("confirmarSenha").value

    if (senha !== confirmarSenha){
        alert("Erro! As senha nao são iguais")
        return
    }
})
