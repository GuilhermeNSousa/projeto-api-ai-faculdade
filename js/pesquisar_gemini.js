const botao_pesquisar = document.getElementById("btn-pesquisar");

botao_pesquisar.addEventListener("click", async function() {
    //Recebe o elemento da caixa de texto
    const text = document.getElementById("text-pergunta");

    //Variáveis com a URL e a chave de acesso da API
    const key = "AIzaSyCVrpSLkKyBilmPA810j7OmfLSUjH6uccs";
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + key;
    
    const dadosBody = {
        contents: [
            {
                parts:[
                    {
                        text: `${text.value}`
                    }
                ]
            }
        ]
    }

    //Faz a requisição da API do Gemini
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosBody)
    });

    //Recebe os dados da API para utilizarmos no projeto
    const dados = await response.json();

    //Pega a resposta da API e joga dentro do campo de resposta
    const answerAPI = dados.candidates[0].content.parts[0].text;

    console.log(answerAPI);

    const resposta = document.getElementById("text-resposta");
    resposta.value = answerAPI;
})

const botao_limpar = document.getElementById("btn-limpar");

botao_limpar.addEventListener("click", function() {
    const pergunta = document.getElementById("text-pergunta");
    const resposta = document.getElementById("text-resposta");

    pergunta.value = "";
    resposta.value = "";
})