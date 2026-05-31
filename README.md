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

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Material UI
- Bootstrap
- React Icons
- ESLint

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

### Resultado das validações

- `npm run build`: executado com sucesso.
- `npm run build`: emitiu avisos porque as fontes referenciadas em `src/index.css` (`../Fontes/Simple-Farmhouse.ttf` e `../Fontes/SANTELLO.ttf`) não foram resolvidas no build.
- `npm run lint`: falhou com 20 erros e 2 avisos, incluindo `setError` indefinido, imports/variáveis não usados e ausência de validação de props.

## Estratégias de refatoração utilizadas

Nesta entrega, a refatoração aplicada foi documental: o `README.md` foi reestruturado para registrar funcionamento, problemas encontrados, validações executadas, lacunas de testes e instruções de execução. Também foi criado/atualizado o `CHANGELOG.md` no formato recomendado pelo Keep a Changelog.

Não foram alterados componentes, regras de negócio ou estilos da aplicação nesta etapa.

### Estratégias recomendadas para o código

- Corrigir primeiro os defeitos funcionais de login, cadastro, logout e acesso defensivo a `location.state`.
- Normalizar nomes de arquivos e imports para evitar falhas em sistemas case-sensitive.
- Extrair acesso a `localStorage` para serviços ou hooks específicos, como `useUsersStorage` e `useDonationsStorage`.
- Separar validação e regra de negócio em funções puras testáveis.
- Substituir `alert`, `confirm` e `console.log` por feedback controlado na interface e logs apropriados para desenvolvimento.
- Padronizar a estratégia de estilos para reduzir colisões globais.
- Criar componentes reutilizáveis para botões, campos de formulário, mensagens de erro e modais.
- Gerar IDs estáveis para campanhas com `crypto.randomUUID()` ou biblioteca apropriada.
- Tratar dados ausentes ou inválidos vindos do `localStorage` antes de renderizar listas e filtros.

## Testes implementados e cobertura

Não há testes automatizados implementados neste projeto no estado atual.

- O `package.json` possui scripts para `dev`, `build`, `lint` e `preview`.
- Não existe script `test`.
- Não há dependências de teste como Vitest, Jest, React Testing Library, Cypress ou Playwright.
- A cobertura automatizada atual é **0%**, porque não existe suíte de testes nem ferramenta de coverage configurada.

### Testes recomendados

- Testes unitários para validação de cadastro, login, logout e filtros de campanhas.
- Testes de componentes para `SignInForm`, `SignUpForm`, `Search`, `Donations`, `DonationsEdit`, `NavBar` e `ModalEdit`.
- Testes de integração para cadastro, login, criação de campanha, edição de campanha e listagem filtrada.
- Testes end-to-end para as rotas principais (`/`, `/login`, `/Donations`, `/DonationsEdit`).
- Meta inicial de cobertura sugerida: 70% para componentes e regras centrais após extração da lógica para funções testáveis.

## Instalação e execução

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalar dependências

```bash
npm install
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

No estado atual, o lint falha e deve ser usado como lista objetiva de correções pendentes antes de considerar o projeto pronto para integração contínua.

## Desenvolvedores

- [Miguel Fermo](https://github.com/miguelfermo)
- [Eduardo Ribarski](https://github.com/ribarski)
- [Taylor Teixeira](https://github.com/taylorteixeira)
- [Eryc Jacinto](https://github.com/erycmj)
- [Isis Costa](https://github.com/isiscostabb)
