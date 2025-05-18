// #region Verifica o idioma de entrada
const lang = document.getElementById("lang");
var lang_input = null;

document.addEventListener("DOMContentLoaded", function() {
    const lang = document.getElementById("lang");
   
    if (lang.value == "Inglês") {
        lang_input = "en";
    }

    else if (lang.value == "Português") {
        lang_input = "pt";
    }
});

function atualizarLangInput() {
    if (lang.value == "Inglês") {
        lang_input = "en";
    }

    else if (lang.value == "Português") {
        lang_input = "pt";
    }
}

lang.addEventListener("change", atualizarLangInput);
// #endregion

// #region Verifica o idioma de saída
const lang_output = document.getElementById("lang-out");
var lang_out = null;

document.addEventListener("DOMContentLoaded", function() {
    const lang_output = document.getElementById("lang-out");
   
    if (lang_output.value == "Inglês") {
        lang_out = "en";
    }

    else if (lang_output.value == "Português") {
        lang_out = "pt";
    }
});

function atualizarLangOutput() {
    if (lang_output.value == "Inglês") {
        lang_out = "en";
    }

    else if (lang_output.value == "Português") {
        lang_out = "pt";
    }
}

lang_output.addEventListener("change", atualizarLangOutput);
// #endregion

// #region Realiza a tradução
const botao_pesquisar = document.getElementById("btn-pesquisar");

botao_pesquisar.addEventListener("click", async function() {
    const resposta = document.getElementById("text-resposta");

    if (lang_input == lang_out) {
        resposta.style.color = "rgb(187, 76, 2)";        
        resposta.value = "Selecione idiomas diferentes!";
    } else {
        //Zera o texto se presente
        resposta.value = "";
        resposta.style.color = "white";

        //Recebe o elemento da caixa de texto
        const text = document.getElementById("text-pergunta");

        //Variáveis com a URL e a chave de acesso da API
        const url = `https://api.mymemory.translated.net/get?q=${text.value}&langpair=${lang_input}|${lang_out}`;
        
        //Faz a requisição da API do Gemini
        const response = await fetch(url);

        //Recebe os dados da API para utilizarmos no projeto
        const dados = await response.json();

        const answerAPI = dados.matches[0].translation;
        console.log(dados);

        resposta.value = answerAPI;
    }
})
// #endregion

// #region Limpa os textos
    const botao_limpar = document.getElementById("btn-limpar");

botao_limpar.addEventListener("click", function() {
    const pergunta = document.getElementById("text-pergunta");
    const resposta = document.getElementById("text-resposta");

    pergunta.value = "";
    resposta.value = "";
})
// #endregion