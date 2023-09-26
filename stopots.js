document.addEventListener("DOMContentLoaded", function () {
    // Seu código JavaScript aqui


    var usuarios = [
        { nomeUsuario: "usuario1", senha: "senha123" },
        { nomeUsuario: "usuario2", senha: "senha456" },
        // Adicione mais usuários conforme necessário
    ];

    var jogador1 = null;
    var jogador2 = null;
    var jogadorAtual = 1;

    function confirmarCredenciais() {
        var nomeUsuario = document.getElementById("nomeUsuarioInput").value;
        var senha = document.getElementById("senhaInput").value;
        
        var usuarioValido = usuarios.find(function(usuario) {
            return usuario.nomeUsuario === nomeUsuario && usuario.senha === senha;
        });

        if (usuarioValido) {
            if (jogadorAtual === 1) {
                jogador1 = nomeUsuario;
                jogadorAtual = 2;
                document.getElementById("nomeUsuarioInput").value = "";
                document.getElementById("senhaInput").value = "";
            } else if (jogadorAtual === 2) {
                jogador2 = nomeUsuario;
                document.getElementById("tela1").style.display = "none";
                document.getElementById("tela2").style.display = "block";
                document.getElementById("nomeUsuarioConfirmado").textContent = jogador1 + " e " + jogador2;
            }
        } else {
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    var letraSorteada = "";

    function sortearLetra() {
        var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        letraSorteada = letras[Math.floor(Math.random() * letras.length)]; // Remova a declaração "var" aqui
        console.log("Letra sorteada: " + letraSorteada); // Adicione esta linha para depuração
        document.getElementById("letraSorteada").textContent = letraSorteada;


        // Esconder tela de sorteio e mostrar tela de resposta com animação
        var telaSorteio = document.getElementById("tela3");
        var telaResposta = document.getElementById("tela4");

        telaSorteio.style.animation = "moveUp 1s ease-in-out";
        telaSorteio.style.animationFillMode = "forwards";

        setTimeout(function () {
            telaSorteio.style.display = "none";
            telaResposta.style.display = "block";
            telaResposta.style.animation = "fadeIn 1s ease-in-out";
            telaResposta.style.animationFillMode = "forwards";
        }, 1000);
    }

    function iniciarJogo() {
        var telaConfirmação = document.getElementById("tela2");
        var telaSorteio = document.getElementById("tela3");
        
        // Ocultar a tela de confirmação
        telaConfirmação.style.display = "none";

        // Aplicar a animação de entrada lateral à tela de sorteio
        telaSorteio.style.animation = "slideIn 1s ease-in-out";
        telaSorteio.style.animationFillMode = "forwards";

        // Exibir a tela de sorteio da letra
        telaSorteio.style.display = "block";

        // Ocultar a tela de respostas (se estiver visível)
        var telaResposta = document.getElementById("tela5");
        telaResposta.style.display = "none";
    }




    function adicionarOutroNome() {
        jogador1 = null;
        jogador2 = null;
        jogadorAtual = 1;
        document.getElementById("tela1").style.display = "block";
        document.getElementById("tela2").style.display = "none";
        document.getElementById("nomeUsuarioInput").value = "";
        document.getElementById("senhaInput").value = "";
    }

    function exibirResposta() {
        var telaSorteio = document.getElementById("tela3");
        var telaResposta = document.getElementById("tela4");
        
        // Aplicar a animação de saída lateral à tela de sorteio
        telaSorteio.style.animation = "slideOutLeft 1s ease-in-out";
        telaSorteio.style.animationFillMode = "forwards";
        
        setTimeout(function () {
            // Ocultar a tela de sorteio
            telaSorteio.style.display = "none";

            // Exibir a letra sorteada e a tela de resposta à direita
            document.getElementById("letraSorteadaResposta").textContent = letraSorteada;
            telaResposta.style.animation = "slideInRight 1s ease-in-out";
            telaResposta.style.animationFillMode = "forwards";
            telaResposta.style.display = "block";
        }, 1000);
    }


    function verificarRespostas() {
        // Implemente a lógica para verificar as respostas aqui
        // Você pode obter as respostas dos inputs pelos IDs (frutaInput, corInput, carroInput, cepInput, etc.)
    }

});