# README.md

# Donation Compass

Donation Compass é uma aplicação web desenvolvida para cadastro, busca, visualização e gerenciamento de campanhas de arrecadação. O sistema foi criado como um projeto acadêmico utilizando React e Vite, permitindo que usuários criem campanhas e realizem consultas de maneira simples através do armazenamento local do navegador.

---

# Descrição do Software

O sistema permite que usuários se cadastrem, realizem login e gerenciem campanhas de arrecadação. Como não existe back-end nesta versão, todas as informações são armazenadas utilizando `localStorage`.

## Principais Funcionalidades

* Página inicial institucional;
* Cadastro e autenticação de usuários;
* Listagem de campanhas de doação;
* Busca por título, organização e localização;
* Criação, edição e exclusão de campanhas;
* Visualização dos detalhes das campanhas;
* Edição e exclusão dos dados do usuário;
* Persistência local utilizando `localStorage`.

---

# Tecnologias Utilizadas

* Node.js 22
* npm 10
* React 18
* Vite
* React Router DOM
* Tailwind CSS
* React Icons
* ESLint

---

# Rotas Principais

| Rota                    | Descrição                     |
| ----------------------- | ----------------------------- |
| `/`                     | Página inicial                |
| `/login`                | Login e cadastro              |
| `/Donations`            | Listagem e busca de campanhas |
| `/DonationsEdit`        | Gerenciamento de campanhas    |
| `/PaginaEditarCadastro` | Edição de cadastro            |

---

# Principais Problemas Detectados

Durante a análise do projeto foram identificados diversos code smells e problemas estruturais.

## Large Class / God Component

O componente `DonationsEdit.jsx` concentrava:

* Interface;
* Validação;
* Persistência;
* Regras de negócio;
* Manipulação do modal.

### Solução aplicada

Separação gradual das responsabilidades e centralização das operações de armazenamento.

---

## Duplicated Code

Existiam duplicações em:

* `SignUpForm.jsx`;
* `NavBar.jsx`.

### Solução aplicada

Remoção dos trechos duplicados.

---

## Dead Code

Foram encontrados imports e variáveis não utilizados.

### Solução aplicada

Remoção do código morto e simplificação do bootstrap React.

---

## Primitive Obsession

Filtros assumiam que todos os campos eram strings válidas.

### Solução aplicada

Tratamento defensivo para valores nulos ou indefinidos.

---

## Inconsistent Naming

Imports utilizavam capitalização diferente da dos arquivos reais.

### Solução aplicada

Padronização da nomenclatura dos arquivos e importações.

---

## Temporal Coupling

A busca executava callbacks imediatamente após atualizações de estado.

### Solução aplicada

Correção do fluxo para trabalhar com o próximo estado calculado.

---

## Excessive Coupling

Autenticação, persistência e interface estavam fortemente acopladas.

### Solução aplicada

Centralização das operações em módulos compartilhados.

---

## CSS Scattering

O projeto misturava:

* CSS global;
* CSS por componente;
* Bootstrap;
* Material UI;
* Tailwind CSS.

### Solução aplicada

Migração completa para Tailwind CSS.

---

# Estratégias de Refatoração

Foram aplicados princípios de Clean Code e boas práticas de desenvolvimento.

## Princípios Aplicados

* Single Responsibility Principle (SRP);
* Separation of Concerns;
* DRY (Don't Repeat Yourself);
* Encapsulamento;
* Alta coesão;
* Baixo acoplamento;
* Component Composition;
* Feature-Oriented Structure;
* Convention over Configuration.

## Melhorias Realizadas

* Reorganização da estrutura do projeto;
* Migração para Tailwind CSS;
* Remoção de dependências desnecessárias;
* Centralização do acesso ao localStorage;
* Padronização de nomes;
* Inclusão de PropTypes;
* Redução do acoplamento;
* Aumento da coesão;
* Correções de autenticação;
* Correções nos filtros e buscas.

---

# Integração com Linter

O projeto utiliza ESLint para padronização do código.

Validações executadas:

```bash
npm run lint
npm run build
```

---

# Testes e Cobertura

O projeto possui suíte de testes unitários implementada com Vitest e Testing Library.

## Executar testes

```bash
npm test
```

## Executar testes com cobertura

```bash
npx vitest run --coverage
```

## Cobertura atual

| Métrica    | Cobertura |
| ---------- | --------- |
| Statements | 93,95%    |
| Branches   | 95,00%    |
| Functions  | 87,23%    |
| Lines      | 94,24%    |

## Suítes implementadas

* `authService.test.js` — login, registro, logout, update, delete e initAuth;
* `localStorage.test.js` — leitura, escrita e fallback do storage compartilhado;
* `AuthProvider.test.jsx` — estado de autenticação via contexto;
* `RequireAuth.test.jsx` — proteção de rotas privadas;
* `SignInForm.test.jsx` — formulário de login e tratamento de erros;
* `SignUpForm.test.jsx` — formulário de cadastro e tratamento de erros;
* `Donations.test.jsx` — listagem, filtro e abertura de modal;
* `Modal.test.jsx` — exibição de detalhes e fechamento;
* `Search.test.jsx` — inputs de busca e limpeza de campos.

---

# Instalação

## Instalar dependências

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Executar lint

```bash
npm run lint
```

---

# Desenvolvedores

* Miguel Fermo
* Eduardo Ribarski
* Taylor Teixeira
* Eryc Jacinto
* Isis Costa
* Edrik Steiner
