// Função para buscar os dados de um arquivo JSON
let dados = [];
function iniciarBusca() {
    const termoBusca = document.querySelector('.search-box input').value.toLowerCase();
    const resultadosFiltrados = dados.filter(item => {
        const nomeItem = (item.praia || item.cachoeira || item.resort || item.parque_aquatico).toLowerCase();
        const nomeCidade = item.cidade.toLowerCase();
        return nomeItem.includes(termoBusca) || nomeCidade.includes(termoBusca);
    });
    exibirResultados(resultadosFiltrados);
}

// Função para exibir os resultados nos containers corretos
function exibirResultados(resultados) {
    const praiasContainer = document.getElementById('praias-container');
    const cachoeirasContainer = document.getElementById('cachoeiras-container');
    const resortsContainer = document.getElementById('resorts-container');
    const parquesAquaticosContainer = document.getElementById('parques-aquaticos-container');

    // Limpa os resultados atuais
    praiasContainer.innerHTML = '';
    cachoeirasContainer.innerHTML = '';
    resortsContainer.innerHTML = '';
    parquesAquaticosContainer.innerHTML = '';

    resultados.forEach(item => {
        if (item.praia) {
            praiasContainer.appendChild(criarCard(item, 'Praia'));
        } else if (item.cachoeira) {
            cachoeirasContainer.appendChild(criarCard(item, 'Cachoeira'));
        } else if (item.resort) {
            resortsContainer.appendChild(criarCard(item, 'Resort'));
        } else if (item.parque_aquatico) {
            parquesAquaticosContainer.appendChild(criarCard(item, 'Parque Aquático'));
        }
    });
}
async function buscarDados(url) {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
}

// Função para criar um card de sugestão
function criarCard(item, tipo) {
    const container = document.createElement('article');
    container.className = 'card';
    // Define a imagem específica como fundo do card
    container.style.backgroundImage = `url('${item.imagem}')`;

    const nome = document.createElement('p');
    // Acessa a propriedade correta
    nome.textContent = item.praia || item.cachoeira || item.resort || item.parque_aquatico; 

    const cidade = document.createElement('p');
    cidade.className = 'cidade'; // Adiciona uma classe para estilização
    cidade.textContent = item.cidade;

    const descricao = document.createElement('p');
    descricao.textContent = item.descrição;

    // Botão "Saiba mais"
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = 'Saiba mais';
    link.target = '_blank'; // Abrir o link em uma nova aba
    link.className = 'card-button';

    // Botão "Ver Vídeo"
    const videoLink = document.createElement('a');
    videoLink.href = item.video_link;
    videoLink.textContent = 'Ver Vídeo';
    videoLink.target = '_blank';
    videoLink.className = 'card-button video-button';

    // Cria uma div para agrupar o conteúdo de texto
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'card-buttons';
    buttonContainer.appendChild(link);
    buttonContainer.appendChild(videoLink);

    cardContent.appendChild(nome);
    cardContent.appendChild(cidade);
    cardContent.appendChild(descricao);
    cardContent.appendChild(buttonContainer);
    container.appendChild(cardContent);

    return container;
}

// Função principal para carregar e exibir todo o conteúdo
async function carregarConteudo() {
    // Busca os dados das praias e cachoeiras em paralelo
    const [praias, cachoeiras, resorts, parquesAquaticos] = await Promise.all([
        buscarDados('Praias.json'),
        buscarDados('Cachoeiras.json'),
        buscarDados('resort.json'),
        buscarDados('parques_aquaticos.json')
    ]);

    dados = [...praias, ...cachoeiras, ...resorts, ...parquesAquaticos]; // Armazena todos os dados
    exibirResultados(dados); // Exibe todos os resultados inicialmente
}

// Executa a função carregarConteudo assim que o DOM da página estiver pronto
document.addEventListener('DOMContentLoaded', carregarConteudo);