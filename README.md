# 🌞 Buscador de Férias de Verão

Um guia interativo para encontrar os melhores destinos de verão no Brasil! Este projeto é uma aplicação web simples e intuitiva, projetada para ajudar usuários a explorar uma vasta gama de opções de lazer, incluindo praias, cachoeiras, resorts e parques aquáticos.

## 🚀 Demo Ao Vivo

**[Acesse a demonstração ao vivo aqui!](https://github.com/feliperamosdev6-hue/Projeto-ferias_de_ver-o25025/deployments/github-pages))**


---

## ✨ Funcionalidades

-   **Navegação por Categorias:** Filtre facilmente os destinos entre 🏖️ Praias, 🏞️ Cachoeiras, 🏨 Resorts e 🌊 Parques Aquáticos.
-   **+80 Destinos Curados:** Explore uma lista com mais de 80 dos melhores locais para aproveitar o calor no Brasil.
-   **Busca Inteligente:** Encontre rapidamente o destino que procura usando a barra de pesquisa.
-   **Cards Informativos:** Cada destino é apresentado com imagem, nome, localização e uma breve descrição.
-   **Links Externos:** Aprofunde sua pesquisa com links diretos para o Google Search e vídeos no YouTube para cada local.
-   **Design Responsivo:** Acesse o buscador de qualquer dispositivo, seja desktop, tablet ou celular.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com tecnologias web fundamentais, focando na simplicidade, performance e facilidade de manutenção.

-   **HTML5:** Para a estruturação semântica do conteúdo.
-   **CSS3:** Para a estilização e criação de um layout moderno e amigável.
-   **JavaScript (Vanilla):** Para a interatividade, manipulação do DOM e consumo dinâmico dos dados.
-   **JSON:** Utilizado como um banco de dados leve e de fácil edição para armazenar as informações dos destinos.

---

## 📂 Estrutura do Projeto

O projeto é organizado de forma clara para facilitar a manutenção e a adição de novos conteúdos.
/ ├── 📄 index.html # Arquivo principal da aplicação (a estrutura) ├── 🎨 style.css # Folha de estilos (a aparência) ├── ⚙️ script.js # Lógica de programação (o cérebro) | ├── 🗃️ Cachoeiras.json # Banco de dados de Cachoeiras ├── 🗃️ parques_aquaticos.json # Banco de dados de Parques Aquáticos ├── 🗃️ Praias.json # Banco de dados de Praias ├── 🗃️ resort.json # Banco de dados de Resorts | └── 🖼️ imagens/ # Pasta para armazenar as imagens dos destinos ├── 📁 cachoeiras/ ├── 📁 parques_aquaticos/ ├── 📁 praias/ └── 📁 resorts/


---

## 🏁 Como Executar o Projeto

Por ser um projeto web estático, você não precisa de um servidor. Basta seguir os passos:

1.  Clone este repositório:
    ```bash
    git clone ([https://SEU-USUARIO.github.io/SEU-REPOSITORIO/](https://feliperamosdev6-hue.github.io/Projeto-ferias_de_ver-o25025/)
    ```
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência.

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Se você conhece um destino incrível que deveria estar nesta lista, siga os passos abaixo:

1.  **Faça um Fork** deste repositório.
2.  **Crie uma nova Branch** para sua modificação:
    ```bash
    git checkout -b feature/adiciona-novo-destino
    ```
3.  **Adicione a Imagem:** Salve uma imagem do novo destino na pasta correspondente dentro de `imagens/`.
4.  **Atualize o JSON:** Abra o arquivo `.json` da categoria desejada (ex: `Praias.json`) e adicione um novo objeto com as informações do destino, mantendo o padrão existente.
5.  **Faça o Commit** de suas mudanças com uma mensagem clara:
    ```bash
    git commit -m "feat: Adiciona [Nome do Destino] à lista de [Categoria]"
    ```
6.  **Faça o Push** da sua Branch para o seu fork:
    ```bash
    git push origin feature/adiciona-novo-destino
    ```
7.  **Abra um Pull Request** no repositório original.

---

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
*Sugestão: Crie um arquivo `LICENSE` no seu repositório com o texto da licença MIT.*

