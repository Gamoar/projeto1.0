const formulario = document.getElementById("formulariocadastro");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
    };

    fetch("http://127.0.0.1:5501/Login.html?#", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na solicitação");
        }
        return response.json();
    })
    .then(data => {
        console.log("Resposta do servidor:", data);
        alert("Dados enviados com sucesso");
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar os dados");
    });
});
