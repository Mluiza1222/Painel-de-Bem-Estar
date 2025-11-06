const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado"); // corrigi 'docuent'
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");

const imagemMotivacional = document.createElement("img");
imagemMotivacional.style.width = "200px";
imagemMotivacional.style.marginTop = "15px";
document.body.appendChild(imagemMotivacional);

const conteudoPorHumor = {
    feliz: {
        frases: [
            "Que sorriso brilhante!",
            "Vá contagiar alguém com esse sorriso radiante!",
            "Nada como sentir as bochechas doerem de tanto sorrir!"
        ],
        imagens: [
            "https://media.tenor.com/4yEuW6bbRo0AAAAi/gato.gif",
            "https://th.bing.com/th/id/R.22b2b01cfcb4f0ec9e690d59e9398ba8?rik=7YNrUb84wNzrAg&pid=ImgRaw&r=0",
            "https://c.tenor.com/17LOEEY9YbUAAAAM/dog-dancing-brazil-dog.gif"
        ]
    },
    triste: {
        frases: [
            "Ficar triste é natural.",
            "Chorar sempre me traz paz, será que funciona com você?",
            "Tudo vai ficar melhor."
        ],
        imagens: [
            "https://c.tenor.com/XzMufZOst7gAAAAM/cachorro-cachorro-abra%C3%A7ando-cobertor.gif",
            "https://media.tenor.com/Nqf3-gUgySsAAAAM/cat-sad-gato-triste.gif",
            "https://c.tenor.com/VK9fA6lXCEwAAAAC/tenor.gif"
        ]
    },
    ansioso: {
        frases: [
            "Tenha coragem e seja gentil.",
            "Respire fundo e dê um passo de cada vez.",
            "Campeões não desistem! E você É um campeão!"
        ],
        imagens: [
            "https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-3.gif",
            "https://c.tenor.com/Zpjxw5QQP20AAAAd/cachorro-cachorrinho.gif",
            "https://media.tenor.com/tCksS1cRuTAAAAAd/gato.gif"
        ]
    },
    nervoso: {
        frases: [
            "Tenha coragem e seja gentil.",
            "Respire fundo e dê um passo de cada vez.",
            "Campeões não desistem! E você É um campeão!"
        ],
        imagens: [
            "https://blog-static.petlove.com.br/wp-content/uploads/2017/06/filhotes-fofos-3.gif",
            "https://c.tenor.com/Zpjxw5QQP20AAAAd/cachorro-cachorrinho.gif",
            "https://media.tenor.com/tCksS1cRuTAAAAAd/gato.gif"
        ]
    },
    motivado: {
        frases: [
            "Use essa motivação para coisas EXTRAORDINÁRIAS!!",
            "Vá contagiar aquele amigo preguiçoso com essa energia!",
            "Vá mudar o mundo com suas ideias!"
        ],
        imagens: [
            "https://3.bp.blogspot.com/-4ghvoEMp9hw/Vz0BUrV-rVI/AAAAAAAAVFI/xGWRkh10haEhNnvw_Nyi56jJGKOP1KNxQCLcB/s1600/Gif%2BCachorro%2Bno%2Btrampolim.gif",
            "https://i.giphy.com/gLugCaElYXH7589sSb.webp",
            "https://media.tenor.com/pgO-p5OBP0YAAAAM/cachorro.gif"
        ]
    },
    neutro: {
        frases: [
            "Até os dias monótonos têm potencial para se tornarem INCRÍVEIS.",
            "De boa na lagoa...",
            "Suave na nave..."
        ],
        imagens: [
            "https://th.bing.com/th/id/R.9db8d202f569b97f728a83b7d23d9a0e?rik=TqobVzqSjM69qw&pid=ImgRaw&r=0",
            "https://media.tenor.com/8a3aDSjyBxYAAAAM/dog-upsies.gif",
            "https://media.tenor.com/8kVgab4JoNgAAAAM/moritzbabybaer-vanhooren.gif"
        ]
    },
    irritado: {
        frases: [
            "Respire e mantenha a calma.",
            "Gritar em um travesseiro sempre me ajuda...",
            "Ter raiva é natural, mas controlar elaé essencial."
        ],
        imagens: [
            "https://th.bing.com/th/id/R.9db8d202f569b97f728a83b7d23d9a0e?rik=TqobVzqSjM69qw&pid=ImgRaw&r=0",
            "https://media.tenor.com/8a3aDSjyBxYAAAAM/dog-upsies.gif",
            "https://media.tenor.com/8kVgab4JoNgAAAAM/moritzbabybaer-vanhooren.gif"
        ]
    }
};

let humorAtual = "neutro";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const humor = humorInput.value.trim().toLowerCase(); 
    humorRegistrado.textContent = "Hoje você se sente: " + humor; 

    if (conteudoPorHumor[humor]) {
        humorAtual = humor;
    } else {
        humorAtual = "neutro";
    }

    localStorage.setItem("humor", humorAtual);
    humorInput.value = "";
});

window.addEventListener("load", function() {
    const humorSalvo = localStorage.getItem("humor");
    if (humorSalvo) {
        humorAtual = humorSalvo;
        humorRegistrado.textContent = "Hoje você se sente: " + humorAtual; 
    }
});

mensagemBtn.addEventListener("click", function() {
    const conteudo = conteudoPorHumor[humorAtual];

    const indiceFrase = Math.floor(Math.random() * conteudo.frases.length); 
    mensagemMotivacional.textContent = conteudo.frases[indiceFrase];

    const indiceImagem = Math.floor(Math.random() * conteudo.imagens.length); 
    imagemMotivacional.src = conteudo.imagens[indiceImagem];
});