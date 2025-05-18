// #region Verifica o idioma de entrada
var lang_input = null;
const lang = document.getElementById("lang");

document.addEventListener("DOMContentLoaded", function() {
   
    switch(lang.value) {
        case "Inglês":
            lang_input = "en";
            break;
        case "Português":
            lang_input = "pt";
            break;
        case "Espanhol":
            lang_input = "sp";
            break;
        case "Italiano":
            lang_input = "it";
            break;
        default:
            lang_input = "en";
    }
});

function atualizarLangInput() {
    switch(lang.value) {
        case "Inglês":
            lang_input = "en";
            break;
        case "Português":
            lang_input = "pt";
            break;
        case "Espanhol":
            lang_input = "es";
            break;
        case "Italiano":
            lang_input = "it";
            break;
    }
}

lang.addEventListener("change", atualizarLangInput);


// #endregion

// #region Verifica o idioma de saída
var lang_out = null;
const lang_output = document.getElementById("lang-out");

document.addEventListener("DOMContentLoaded", function() {
    switch(lang_output.value) {
        case "Inglês":
            lang_out = "en";
            break;
        case "Português":
            lang_out = "pt";
            break;
        case "Espanhol":
            lang_out = "sp";
            break;
        case "Italiano":
            lang_out = "it";
            break;
        default:
            lang_out = "en";
    }
});

function atualizarLangOutPut() {
    switch(lang_output.value) {
        case "Inglês":
            lang_out = "en";
            break;
        case "Português":
            lang_out = "pt";
            break;
        case "Espanhol":
            lang_out = "es";
            break;
        case "Italiano":
            lang_out = "it";
            break;
    }
}

lang_output.addEventListener("change", atualizarLangOutPut);
// #endregion

// #region Realiza a tradução
const botao_pesquisar = document.getElementById("btn-pesquisar");

botao_pesquisar.addEventListener("click", async function() {
    const resposta = document.getElementById("text-resposta");

    //Recebe o elemento da caixa de texto
    const text = document.getElementById("text-pergunta");

    //Resposta caso não haja texto inserido
    if (text.value == "") {
        resposta.style.color = "rgb(187, 76, 2)";        
        resposta.value = "Insira um texto para ser traduzido!";
    } else {
        //Resposta caso os idiomas de entrada e saída sejam iguais
        if (lang_input == lang_out) {
            resposta.style.color = "rgb(187, 76, 2)";        
            resposta.value = "Selecione idiomas diferentes!";
        } else {
            //Zera o texto se presente
            resposta.value = "";
            resposta.style.color = "white";

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