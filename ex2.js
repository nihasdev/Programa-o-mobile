const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("listaErros").innerHTML = "";

    document.querySelectorAll(".erro").forEach(campo => {
        campo.innerHTML = "";
    });

    let erros = [];

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const nascimento = document.getElementById("nascimento").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (nome.trim() === "") {
        erros.push("Nome é obrigatório.");
        document.getElementById("erroNome").innerHTML = "Nome é obrigatório.";
    }

    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {
        erros.push("CPF deve conter 11 dígitos.");
        document.getElementById("erroCpf").innerHTML = "CPF inválido.";
    }

    const hoje = new Date();
    const dataNascimento = new Date(nascimento);

    if (dataNascimento > hoje) {
        erros.push("A data de nascimento não pode ser futura.");
        document.getElementById("erroNascimento").innerHTML =
            "Data inválida.";
    }

    if (senha.length < 6) {
        erros.push("A senha deve ter no mínimo 6 caracteres.");
        document.getElementById("erroSenha").innerHTML =
            "Senha muito curta.";
    }

    if (senha !== confirmarSenha) {
        erros.push("As senhas não coincidem.");
        document.getElementById("erroConfirmarSenha").innerHTML =
            "As senhas devem ser iguais.";
    }

    if (erros.length > 0) {
        let lista = "<ul>";

        erros.forEach(erro => {
            lista += `<li>${erro}</li>`;
        });

        lista += "</ul>";

        document.getElementById("listaErros").innerHTML = lista;

    } else {
        document.getElementById("listaErros").innerHTML =
            "Cadastro realizado com sucesso!";
    }
});