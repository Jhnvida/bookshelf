# Bookshelf (Estante de Livros)

Uma aplicação web desenvolvida em React para organizar e gerenciar a sua coleção pessoal de livros. O projeto permite visualizar os livros cadastrados, filtrar por gênero literário, pesquisar por título, adicionar novos livros com busca e seleção de capa via Open Library API e acompanhar o status de leitura de cada obra.

## Funcionalidades

- **Catálogo de Livros**: Exibição dos livros em formato de cartões com imagem de capa, título, autor, gênero e status de leitura.
- **Filtro e Pesquisa**: Busca dinâmica por título e filtragem por categorias/gêneros literários (Ficção, Romance, Comédia, Mistério, Suspense, Infantil, Aventura, Fantasia, Clássicos, Quadrinhos, Ficção Científica).
- **Adicionar Livro**: Formulário para cadastro de novos livros com busca automática de capas integrada à Open Library API e seleção entre opções encontradas.
- **Contador de Coleção**: Indicador visual da quantidade total de itens exibidos na estante.
- **Gerenciamento de Leitura**: Classificação do status de leitura do livro (_Quero Ler_, _Lendo_, _Lido_).
- **Remoção de Livros**: Exclusão de livros da estante.
- **Persistência Local**: Salvamento automático dos dados no `localStorage` do navegador para manter sua biblioteca salva entre sessões.

## Tecnologias Utilizadas

- **Frontend:**
    - [React 19](https://react.dev/) (com React Compiler)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Vite](https://vitejs.dev/)
    - [CSS Modules](https://github.com/css-modules/css-modules) para estilização
    - [Lucide React](https://lucide.dev/) para ícones
- **Integracões e APIs:**
    - [Open Library API](https://openlibrary.org/developers/api) para busca de capas de livros
- **Qualidade de Código & Linting:**
    - [Oxlint](https://oxc.rs/)
    - [Stylelint](https://stylelint.io/)

## Estrutura do Projeto

A estrutura de pastas principal dentro de `src/` está organizada da seguinte forma:

- `/assets`: Recursos estáticos da aplicação.
- `/components`: Componentes modulares e reutilizáveis (`AddBook`, `BooksFilter`, `Bookshelf`, `Container`, `Counter`, `Header`).
- `/hooks`: Custom hooks com a lógica de estado, filtros e integração de capas (`useBooks`, `useBooksFilter`, `useCover`).
- `/styles`: Estilos globais e variáveis CSS (`index.css`).
- `/types`: Definições de tipos e interfaces do TypeScript (`Book`).
- `/utils`: Funções utilitárias e constantes (lista de gêneros literários).

## Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (recomendado versão 18 ou superior)
- Um gerenciador de pacotes como `npm`, `yarn` ou `pnpm`

## Instalação e Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/Jhnvida/bookshelf.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd bookshelf
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Como Executar

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
npm run dev
```

Acesse a aplicação no seu navegador padrão (geralmente em `http://localhost:5173`).

## Outros Comandos

- **Verificação de linter (JS/TS)**: `npm run lint`
- **Verificação de linter (CSS)**: `npm run lint:css`
- **Correção automática de CSS**: `npm run lint:css:fix`
- **Build de produção**: `npm run build`
- **Visualizar build**: `npm run preview`

## Como Usar

- **Visualizar Coleção**: Navegue pela página principal para ver os livros salvos no seu armazenamento local.
- **Filtrar e Pesquisar**: Use a barra de busca no topo para encontrar um livro pelo título ou clique nos botões de gênero para filtrar a lista.
- **Cadastrar Livro**: Clique no botão "+ Adicionar Livro", preencha o título e o autor, clique em "Buscar" para carregar as capas via Open Library API, selecione a capa desejada e clique em "Salvar Livro".
- **Excluir Livro**: Clique no ícone de lixeira no cartão do livro para removê-lo da sua estante.
