# Bookshelf — Estante de Livros

Aplicação web desenvolvida em React para organização e gestão de coleções pessoais de livros, concebida como laboratório prático para o estudo e a aplicação aprofundada dos principais **React Hooks** nativos.

---

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?style=flat&logo=cssmodules&logoColor=white)](https://github.com/css-modules/css-modules)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?style=flat&logo=oxc&logoColor=white)](https://oxc.rs/)
[![Stylelint](https://img.shields.io/badge/Linter-Stylelint-263238?style=flat&logo=stylelint&logoColor=white)](https://stylelint.io/)
[![Licença Privada](https://img.shields.io/badge/License-Privado-lightgrey?style=flat)](#licença)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Aprendizado e Aplicação dos Hooks](#aprendizado-e-aplicação-dos-hooks)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Padrões de Versionamento](#padrões-de-versionamento)
- [Licença](#licença)

---

## Visão Geral

O **Bookshelf** é uma aplicação focada na experiência do usuário para catalogar e acompanhar o progresso de leituras. O projeto foi estruturado com o objetivo primordial de explorar a fundo o ciclo de vida, a reatividade e os padrões de gerenciamento de estado do React, servindo como referência prática de arquitetura limpa de componentes funcionais.

A aplicação opera inteiramente no navegador do usuário com persistência automática no `localStorage`, permitindo filtrar o acervo por gênero literário, realizar buscas instantâneas por título e classificar as obras por estágios de leitura.

---

## Aprendizado e Aplicação dos Hooks

Este repositório serve como laboratório prático para os Hooks nativos do React. Abaixo estão os conceitos e a implementação de cada um no código-fonte:

### 1. `useState`

- **Conceito:** Gerenciamento de estados locais previsíveis que disparam re-renderização quando atualizados.
- **Implementação:**
    - `src/App.tsx`: controla a alternância e a visibilidade do formulário de cadastro (`visibleForm`).
    - `src/hooks/useBooksFilter.ts`: armazena o termo digitado na barra de busca (`searchText`) e a categoria selecionada no seletor de gêneros (`selectedGenre`).

### 2. `useEffect`

- **Conceito:** Execução de efeitos colaterais e sincronização com APIs externas e o DOM fora do fluxo de renderização puro.
- **Implementação:**
    - `src/hooks/useBooks.ts`: sincroniza a leitura inicial e a persistência contínua do acervo no `localStorage` do navegador.
    - `src/components/AddBook/index.tsx`: acionado na montagem do modal de cadastro em conjunto com o `useRef` para disparar foco imediato no primeiro campo de entrada.

### 3. `useContext`

- **Conceito:** Compartilhamento seguro de estados e despachos de ações através da árvore de componentes, eliminando _prop drilling_.
- **Implementação:**
    - `src/contexts/BooksContext.tsx`: centraliza e distribui a lista de livros, as ações de mutação (inclusão/exclusão) e o estado global de filtragem para toda a aplicação por meio do hook customizado `useBooksContext()`.

### 4. `useReducer`

- **Conceito:** Alternativa robusta ao `useState` para controle de fluxos de estado complexos baseados em ações tipadas (padrão _Action/Reducer_).
- **Implementação:**
    - `src/hooks/useBooks.ts`: orquestra as mutações do acervo literário através das ações `SET_BOOKS` (carga inicial), `ADD_BOOK` (inserção atômica) e `DELETE_BOOK` (remoção referencial), assegurando imutabilidade e previsibilidade.

### 5. `useRef`

- **Conceito:** Criação de referências mutáveis persistentes entre renderizações sem disparar re-renderizações indesejadas, além de acesso direto a nós do DOM.
- **Implementação:**
    - `src/components/AddBook/index.tsx`: captura o nó DOM do elemento `<input>` (`titleInputRef`), aplicando a instrução `focus()` ao abrir o modal para proporcionar uma experiência fluida de digitação.

---

## Funcionalidades Principais

- **Catálogo Interativo:** Apresentação visual dos livros em cartões contendo imagem de capa, título, autor, gênero e selo de status de leitura.
- **Busca e Filtragem em Tempo Real:** Filtragem dinâmica simultânea por gênero literário e busca textual aproximada por título da obra.
- **Cadastro Completo:** Formulário validado para inclusão de novos títulos com seleção de gênero e estado inicial de leitura.
- **Classificação de Leitura:** Rastreamento do ciclo de leitura com os estados: _Quero Ler_, _Lendo_ e _Lido_.
- **Remoção de Obras:** Exclusão rápida e segura de títulos da estante com atualização imediata da interface.
- **Persistência no Navegador:** Sincronização automática dos dados com o `localStorage`, mantendo o catálogo salvo entre sessões.

---

## Tecnologias Utilizadas

### Frontend

- **[React 19](https://react.dev/):** Biblioteca para interfaces de usuário, com compilação otimizada via React Compiler.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática rigorosa para componentes, modelos de dados e reducers.
- **[Vite](https://vitejs.dev/):** Ambiente de desenvolvimento e empacotador de produção de alta velocidade.
- **[CSS Modules](https://github.com/css-modules/css-modules):** Estilização modular com escopo encapsulado por componente.
- **[Lucide React](https://lucide.dev/):** Pacote de ícones vetoriais leves e consistentes.

### Qualidade de Código & Análise Estática

- **[Oxlint](https://oxc.rs/):** Linter JavaScript/TypeScript de alta performance baseado em Rust.
- **[Stylelint](https://stylelint.io/):** Padronização e validação de regras de folhas de estilo CSS (`stylelint-config-standard`, `stylelint-config-clean-order`).

---

## Estrutura do Projeto

```text
bookshelf/
├── public/                 # Recursos públicos estáticos
├── src/
│   ├── assets/             # Imagens e vetores estáticos
│   ├── components/         # Componentes React da interface
│   │   ├── AddBook/        # Formulário e modal de novo livro
│   │   ├── BooksFilter/    # Controles de filtro por categoria e busca
│   │   ├── Bookshelf/      # Grid responsivo e listagem dos cartões de livros
│   │   ├── Container/      # Componente de estrutura e layout central
│   │   ├── Counter/        # Contador métrico da coleção e botão de ação
│   │   └── Header/         # Cabeçalho da aplicação
│   ├── contexts/           # Provedores de contexto React (BooksContext)
│   ├── hooks/              # Hooks customizados (useBooks, useBooksFilter)
│   ├── styles/             # Variáveis globais de cores, tipografia e reset
│   ├── types/              # Definições de tipos e interfaces TypeScript
│   ├── utils/              # Funções utilitárias e constantes auxiliares
│   ├── App.tsx             # Componente raiz da aplicação
│   ├── App.module.css      # Estilização do componente raiz
│   └── main.tsx            # Ponto de entrada da aplicação
├── .oxlintrc.json          # Configuração do Oxlint
├── .stylelintrc.json       # Configuração do Stylelint
├── package.json            # Manifesto de dependências e scripts npm
├── tsconfig.json           # Configurações do compilador TypeScript
└── vite.config.ts          # Configurações do Vite
```

---

## Pré-requisitos

Antes de iniciar a configuração local, certifique-se de ter instalado em seu ambiente:

- [Node.js](https://nodejs.org/) (versão 18.0.0 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes padrão que acompanha o Node.js)

---

## Instalação e Execução

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/Jhnvida/bookshelf.git
    cd bookshelf
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4. **Acesse no navegador:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador padrão.

---

## Scripts Disponíveis

| Comando                | Descrição                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `npm run dev`          | Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR).     |
| `npm run build`        | Valida as tipagens via `tsc -b` e compila o código para produção na pasta `dist/`. |
| `npm run preview`      | Executa um servidor HTTP local para inspecionar o pacote compilado de produção.    |
| `npm run lint`         | Executa a análise estática do código TypeScript/React utilizando o Oxlint.         |
| `npm run lint:css`     | Verifica a conformidade das regras de estilo nos arquivos `.css` via Stylelint.    |
| `npm run lint:css:fix` | Corrige automaticamente as inconsistências de estilo detectadas pelo Stylelint.    |

---

## Padrões de Versionamento

Este repositório adota a convenção de [Conventional Commits](https://www.conventionalcommits.org/pt-br/) para o histórico de alterações:

- `feat:` Novas funcionalidades.
- `fix:` Correções de bugs.
- `docs:` Alterações e melhorias na documentação.
- `style:` Formatação de código sem impacto no comportamento funcional.
- `refactor:` Refatorações de código sem adição de novos recursos.
- `perf:` Otimizações de desempenho.
- `test:` Inclusão ou ajuste de testes.
- `build:` Modificações no ecossistema de compilação ou dependências.
- `chore:` Tarefas rotineiras de manutenção e infraestrutura.

---

## Licença

Este projeto é de caráter pessoal e para fins de estudo. Não possui uma licença pública de código aberto concedida para reprodução comercial. Todos os direitos sobre a implementação são reservados ao autor.
