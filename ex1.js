const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    mensagem.innerHTML = "";

    try {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const idade = document.getElementById("idade").value;
        const senha = document.getElementById("senha").value;

        if (nome.trim() === "") {
            throw "O nome é obrigatório.";
        }

        if (nome.length < 3) {
            throw "O nome deve ter no mínimo 3 caracteres.";
        }

        if (!email.includes("@")) {
            throw "O e-mail deve conter @.";
        }

        if (isNaN(idade)) {
            throw "A idade deve ser um número.";
        }

        if (idade < 18) {
            throw "Você deve ter pelo menos 18 anos.";
        }

        if (senha.length < 6) {
            throw "A senha deve ter no mínimo 6 caracteres.";
        }

        mensagem.innerHTML = "Cadastro realizado com sucesso!";

    } catch (erro) {
        mensagem.innerHTML = erro;
    }
});