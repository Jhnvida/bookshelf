# Bookshelf (Estante de Livros)

Uma aplicação web desenvolvida em React para organizar e gerenciar a sua coleção pessoal de livros. Este projeto foi desenvolvido com o **objetivo principal de estudar e aplicar na prática os principais React Hooks**: `useState`, `useEffect`, `useContext`, `useRef` e `useReducer`.

A aplicação permite visualizar os livros cadastrados, filtrar por gênero literário, pesquisar por título, adicionar novos livros e acompanhar o status de leitura de cada obra.

## Aprendizado e Aplicação dos Hooks

Este projeto serve como um laboratório para entender o funcionamento e os casos de uso ideais para os Hooks nativos do React. Abaixo está a explicação de como cada um foi implementado:

### 1. `useState`

**O que é:** Hook utilizado para criar e gerenciar estados locais que, ao serem atualizados, causam a re-renderização do componente.
**Onde foi utilizado:**

- No `App.tsx` para controlar a exibição do formulário de adicionar livros (`visibleForm`).
- No custom hook `useBooksFilter.ts` para armazenar o texto da pesquisa (`searchText`) e o gênero selecionado no filtro (`selectedGenre`).

### 2. `useEffect`

**O que é:** Hook utilizado para lidar com efeitos colaterais em componentes funcionais (como chamadas de API, manipulação direta do DOM, subscrições, ou leitura do `localStorage`).
**Onde foi utilizado:**

- No custom hook `useBooks.ts` para carregar a lista de livros salva no `localStorage` do navegador apenas uma vez (quando o componente é montado).
- No componente `AddBook/index.tsx` juntamente com o `useRef`, para focar automaticamente no campo de "Título do Livro" assim que o formulário é renderizado na tela.

### 3. `useContext`

**O que é:** Hook utilizado para compartilhar estados e funções globalmente entre componentes sem a necessidade de passar "props" manualmente por cada nível da árvore de componentes (prop drilling).
**Onde foi utilizado:**

- No `BooksContext.tsx` e acessado nos componentes através do hook customizado `useBooksContext()`. Ele provê para toda a aplicação a lista de livros, as funções de adicionar e remover livros, os filtros ativos e as funções de modificação desses filtros.

### 4. `useReducer`

**O que é:** Hook alternativo ao `useState`, ideal para gerenciar estados mais complexos que envolvem múltiplas sub-operações ou dependem do estado anterior de maneira estruturada (padrão Action/Reducer).
**Onde foi utilizado:**

- No custom hook `useBooks.ts`, o `useReducer` foi implementado para gerenciar a lista de livros. Ele processa ações distintas: `SET_BOOKS` (inicia a lista a partir do localStorage), `ADD_BOOK` (adiciona um livro ao array) e `DELETE_BOOK` (remove um livro do array). Essa abordagem centraliza a lógica de alteração do estado dos livros de forma previsível e isolada.

### 5. `useRef`

**O que é:** Hook que permite criar uma referência mutável que persiste durante todo o ciclo de vida do componente, sem causar re-renderizações ao ser alterada. Também é frequentemente usado para acessar elementos DOM diretamente.
**Onde foi utilizado:**

- No componente `AddBook/index.tsx` (`titleInputRef`), para capturar a referência do elemento `<input>` de Título e, utilizando o `useEffect`, forçar o foco automático no campo (`focus()`) no exato instante em que a tela de adição é aberta, melhorando a experiência do usuário (UX).

---

## Funcionalidades

- **Catálogo de Livros**: Exibição dos livros em formato de cartões com imagem de capa, título, autor, gênero e status de leitura.
- **Filtro e Pesquisa**: Busca dinâmica por título e filtragem por categorias/gêneros literários.
- **Adicionar Livro**: Formulário para cadastro de novos livros com campos detalhados.
- **Gerenciamento de Leitura**: Classificação do status de leitura do livro (_Quero Ler_, _Lendo_, _Lido_).
- **Remoção de Livros**: Exclusão de livros da estante.
- **Persistência Local**: Salvamento automático dos dados no `localStorage` do navegador.

## Tecnologias Utilizadas

- **Frontend:**
    - [React 19](https://react.dev/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Vite](https://vitejs.dev/)
    - [CSS Modules](https://github.com/css-modules/css-modules) para estilização
    - [Lucide React](https://lucide.dev/) para ícones
- **Qualidade de Código:**
    - [Oxlint](https://oxc.rs/)
    - [Stylelint](https://stylelint.io/)

## Como Executar

1. Clone o repositório e acesse a pasta do projeto:

    ```bash
    git clone https://github.com/Jhnvida/bookshelf.git
    cd bookshelf
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

Acesse a aplicação no seu navegador (geralmente em `http://localhost:5173`).
