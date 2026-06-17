# Donation Compass

Donation Compass é uma aplicação web front-end para cadastro, busca, visualização e gerenciamento de campanhas de doação. O projeto foi desenvolvido com React, Vite, React Router, Tailwind CSS, Material UI, Bootstrap e persistência local via `localStorage`.

## Descrição do software

O sistema oferece uma interface para usuários criarem conta, acessarem campanhas de arrecadação, filtrarem campanhas existentes e gerenciarem campanhas próprias. Por ser um front-end sem back-end, os dados são armazenados no navegador do usuário.

### Principais funcionalidades

- Página inicial institucional com apresentação da proposta do Donation Compass.
- Cadastro e login de usuários.
- Listagem de campanhas de arrecadação.
- Busca por título, organização e localização.
- Criação, edição e exclusão de campanhas.
- Modal de detalhes da campanha com ação de doação.
- Edição e exclusão dos dados do usuário logado.
- Persistência local de usuários e campanhas com `localStorage`.

### Rotas principais

- `/`: landing page.
- `/login`: tela de login e cadastro.
- `/Donations`: listagem e busca de campanhas.
- `/DonationsEdit`: criação, edição e exclusão de campanhas.
- `/PaginaEditarCadastro`: edição de cadastro.

## Tecnologias

- Node.js 22
- npm 10, declarado em `packageManager`
- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Material UI
- Bootstrap
- React Icons
- ESLint

## Arquitetura alvo

Foi criada uma estrutura paralela para evolução incremental do projeto, sem migrar as telas existentes nesta etapa. A decisão evita mudanças visuais e reduz risco: primeiro o projeto passa a ter um padrão claro de organização, depois cada tela pode ser migrada com revisão isolada.

```text
src/
  app/
    index.jsx
    providers/
      index.jsx
    router/
      index.jsx
  components/
    ComponentName/
      index.jsx
      data.js
      style.js
  pages/
    PageName/
      index.jsx
  shared/
    contexts/
      ContextName/
        index.jsx
    storage/
      data.js
  assets/
  index.css
  main.jsx
```

### Regra de organização

- Cada pasta de componente deve ter no máximo `index.jsx`, `data.js` e `style.js`.
- `index.jsx` deve concentrar a composição do componente.
- `data.js` deve guardar dados estáticos, mocks ou constantes locais do componente.
- `style.js` deve centralizar classes, tokens ou objetos de estilo locais.
- Código compartilhado deve ficar em `src/shared`, não dentro de componentes.
- Bootstrap da aplicação, providers e rotas devem ficar em `src/app`.

### Motivo da estrutura

- **Baixo acoplamento:** componentes deixam de depender da organização por autor e passam a depender de responsabilidade.
- **Alta coesão:** arquivos relacionados ao mesmo componente ficam juntos.
- **Atomicidade:** cada pasta representa uma unidade pequena e previsível.
- **Evolução incremental:** telas antigas podem ser migradas uma por vez sem reescrever fluxo visual.
- **Revisão simples:** mudanças ficam localizadas em poucas pastas e com nomes padronizados.

## Análise dos principais problemas detectados

### Problemas funcionais

- `src/Components/MiguelComponents/SignUpForm.jsx`: chama `setError`, mas não declara `error`/`setError`. O cadastro pode quebrar em tempo de execução ao validar campos vazios ou e-mail duplicado.
- `src/Components/MiguelComponents/SignInForm.jsx`: obtém `setUser` do contexto, mas não atualiza o usuário autenticado após login. A navegação ocorre, porém o estado global pode continuar sem usuário logado.
- `src/Components/TaylorComponents/NavBar.jsx`: o logout executa `setUser(user)`, mantendo o mesmo usuário no contexto. O comportamento esperado seria limpar a sessão com `setUser(null)`.
- `src/Components/EduardoComponents/PageEdit.jsx`: acessa `location.state.user` diretamente. Se a rota for aberta sem `state`, a página quebra.
- `src/Components/EduardoComponents/ModalEdit.jsx`: o campo "Nome" usa `value={data.name}` e não chama `onChange`, enquanto o restante do formulário usa `formData`. Isso impede edição consistente do nome.
- `src/Components/TaylorComponents/Search.jsx`: chama `handleSearchChange()` imediatamente após `setState`. Como atualizações de estado são assíncronas, a busca pode enviar valores anteriores.
- `src/Components/ErycComponents/DonationsEdit.jsx`: gera IDs com `prev.length + 1`, o que pode criar IDs repetidos após exclusões.
- `src/Components/TaylorComponents/Donations.jsx`: assume que `title`, `company` e `location` sempre existem. Dados incompletos em `localStorage` podem causar erro ao chamar `toLowerCase()`.

### Code smells

- `src/router/routes.jsx`: imports usam capitalização diferente dos arquivos reais (`header`, `Navbar`, `pageEdit`). Isso pode funcionar no Windows, mas tende a quebrar em ambientes case-sensitive, como Linux/CI.
- `src/Components/MiguelComponents/SignUpForm.jsx`: salva senha em texto puro no `localStorage`. Isso é aceitável apenas para protótipo local/acadêmico, nunca para produção.
- `src/Components/MiguelComponents/SignUpForm.jsx` e `src/Components/TaylorComponents/NavBar.jsx`: mantêm `console.log` no código de interface.
- `src/Components/ErycComponents/DonationsEdit.jsx`: mistura UI, validação, persistência, regra de negócio e manipulação de modal no mesmo componente.
- `src/Components/MiguelComponents/SignInForm.jsx` e `src/Components/MiguelComponents/SignUpForm.jsx`: autenticação, persistência e validação estão acopladas diretamente aos componentes.
- `src/index.css`, `src/Components/MiguelComponents/Miguelstyles.css` e CSSs de componentes: usam seletores globais como `body`, `li`, `ul` e `*`, criando risco de efeitos colaterais entre telas.
- O projeto mistura Tailwind CSS, CSS global, CSS por componente, Material UI e Bootstrap, o que aumenta o custo de manutenção visual.
- `src/main.jsx`: importa `ReactDOM` e `createRoot`, mas usa apenas `ReactDOM.createRoot`, gerando código morto.
- Contextos em `src/context/UserContext.jsx` e `src/context/DonationsContext.jsx`: não validam `children` e exportam hook/componente no mesmo arquivo, gerando alertas de Fast Refresh no lint.

## Estratégias de refatoração utilizadas

Nesta etapa foi aplicada uma refatoração estrutural preparatória:

- Declaração de Node.js 22 e npm 10 em `package.json`.
- Atualização do `package-lock.json` para `lockfileVersion: 3`, compatível com npm moderno.
- Criação de `src/app` para futura centralização de aplicação, providers e rotas.
- Criação de `src/components` com pastas atômicas e arquivos vazios para migração gradual.
- Criação de `src/pages` com páginas-alvo separadas por responsabilidade.
- Criação de `src/shared` para contextos e dados compartilhados.
- Manutenção das telas legadas sem reajuste visual ou migração funcional nesta etapa.

### Status da versao 1.0.2

Esta etapa estabiliza a aplicacao para execucao e organiza o refactor em tres ideias de commit:

- `fix: restore app build and routes`: remove duplicacoes de JSX/export, corrige imports com capitalizacao incorreta e ajusta o bootstrap React.
- `fix: repair auth search and donation flows`: atualiza login/logout, busca com estado correto, filtros defensivos e IDs de doacao sem colisao apos exclusoes.
- `refactor: centralize browser storage access`: concentra leitura e escrita de `localStorage` em `src/shared/storage/localStorage.js` e substitui `alert`, `confirm` e `console.log` por feedback controlado.

### Próximos passos recomendados

- Migrar uma tela por vez da estrutura legada para a estrutura alvo.
- Migrar cadastro, login, doacoes e edicao de usuario para a estrutura alvo em `src/app`, `src/pages` e `src/shared`.
- Padronizar estilos gradualmente em `style.js`.
- Adicionar testes após extrair regras de negócio para funções testáveis.

## Testes implementados e cobertura

Não há testes automatizados implementados neste projeto no estado atual.

- O `package.json` possui scripts para `dev`, `build`, `lint` e `preview`.
- Não existe script `test`.
- Não há dependências de teste como Vitest, Jest, React Testing Library, Cypress ou Playwright.
- A cobertura automatizada atual é **0%**, porque não existe suíte de testes nem ferramenta de coverage configurada.

### Testes recomendados

- Testes unitários para validação de cadastro, login, logout e filtros de campanhas.
- Testes de componentes para `SignInForm`, `SignUpForm`, `Search`, `Donations`, `DonationsEdit`, `NavBar` e `ModalEdit`.
- Testes de integração para cadastro, login, criação de campanha e listagem filtrada.
- Testes end-to-end para as rotas principais.
- Meta inicial de cobertura sugerida: 70% para componentes e regras centrais após extração da lógica.

## Instalação e execução

### Pré-requisitos

- Node.js 22.
- npm 10 ou superior.

O projeto declara Node 22 e npm 10 em `package.json`.

### Instalar dependências

```bash
npm install
```

Se o npm global estiver desatualizado, use Corepack:

```bash
corepack npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite. O padrão costuma ser:

```text
http://localhost:5173
```

### Gerar build de produção

```bash
npm run build
```

### Visualizar build localmente

```bash
npm run preview
```

### Executar lint

```bash
npm run lint
```

No estado atual, o lint ainda reflete problemas da estrutura legada e deve ser usado como lista objetiva de correções pendentes.

## Desenvolvedores

- [Miguel Fermo](https://github.com/miguelfermo)
- [Eduardo Ribarski](https://github.com/ribarski)
- [Taylor Teixeira](https://github.com/taylorteixeira)
- [Eryc Jacinto](https://github.com/erycmj)
- [Isis Costa](https://github.com/isiscostabb)
- [Edrik Steiner](https://github.com/edrikfsteiner)
