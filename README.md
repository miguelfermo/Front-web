# Donation Compass

Donation Compass e uma aplicacao web em React + Vite para cadastro, busca, visualizacao e gerenciamento de campanhas de doacao. Nesta versao, a sessao do usuario e os dados das campanhas ficam no navegador, sem backend.

## Resumo

O projeto foi reorganizado para uma arquitetura orientada por features. A aplicacao hoje separa bootstrap, rotas, estado global, componentes compartilhados e features de dominio, com uma migracao incremental feita para reduzir acoplamento e facilitar manutencao.

## Arquitetura atual

### `src/app`

Camada de inicializacao da aplicacao.

- `src/app/index.jsx` monta o `RouterProvider`
- `src/app/providers/index.jsx` compoe os providers globais
- `src/app/router/index.jsx` centraliza as rotas

### `src/features/auth`

Fluxo de autenticacao e edicao de cadastro.

- `components/`: `AuthLayout`, `Overlay`, `SignInForm`, `SignUpForm`, `ProfileEditModal`, `RequireAuth`
- `context/`: `AuthContext` e `AuthProvider`
- `hooks/`: `useAuth`
- `pages/`: `LoginPage` e `PageEdit`
- `services/`: `authService`

### `src/features/donations`

Fluxo de campanhas, filtragem, edicao e modal de interacao.

- `components/`: `NavBar`, `Search`, `Donations`, `DonationCard`, `DonationForm`, `DonationList`, `DonationModal`, `AddDonationButton`, `EmptyDonationState`, `FooterDiv`, `Modal`
- `context/`: `DonationsContext` e `DonationsProvider`
- `hooks/`: `useDonation` e `useDonations`
- `pages/`: `DonationsPage` e `DonationsEditPage`
- `services/`: `donationService`, `donationStorage`, `userDonationStorage`
- `utils/`: `initialInputState`

### `src/features/hero`

Landing page institucional.

- `components/`: `HeroHeader`, `HeroContent`, `HeroCard`, `HeroContentButton`, `HeroFooter`
- `data/`: `heroData`
- `pages/`: `HeroPage`

### `src/shared`

Codigo reutilizavel entre features.

- `shared/ui`: `Button`, `Input`, `Card`, `Modal`, `Title`, `Subtitle`, `Paragraph`, `ActionButtons`
- `shared/api`: cliente de API centralizado
- `shared/storage`: helpers de persistencia local

## Padroes adotados

- Feature-oriented structure para agrupar codigo por responsabilidade
- Componentizacao para reduzir componentes grandes e blocos repetidos
- Single Responsibility Principle nos componentes principais
- Separation of Concerns entre UI, estado, persistencia e roteamento
- Providers globais concentrados em `AppProviders`
- Roteamento protegido com `RequireAuth`
- Persistencia local com `localStorage`
- Alias `@/` para simplificar imports a partir de `src/`

## Fluxos principais

### Autenticacao

- `LoginPage` exibe o layout animado de login e cadastro
- `AuthLayout` controla a troca entre `SignInForm` e `SignUpForm`
- `Overlay` aciona a alternancia visual entre os paineis
- `ProfileEditModal` permite editar ou excluir o cadastro autenticado
- `RequireAuth` bloqueia acesso sem sessao ativa

### Campanhas

- `DonationsPage` renderiza a barra superior, a busca e a listagem filtrada
- `Search` coleta os filtros de titulo, empresa e local
- `Donations` aplica os filtros e abre o modal da campanha selecionada
- `DonationsEditPage` concentra a manutencao de campanhas com formularios e listas dedicadas

### Home

- `HeroPage` compoe a pagina inicial com header, conteudo e footer
- `HeroContent` monta a secao principal sobre a imagem de fundo
- `HeroCard` e `HeroContentButton` estruturam o call to action

## Processo de refatoracao

A base original estava mais espalhada e dependia de arquivos legados e caminhos paralelos. A organizacao atual seguiu estes passos:

1. Centralizacao do bootstrap em `src/app`
2. Separacao do estado global em providers especificos por dominio
3. Migracao para features coesas em `src/features`
4. Extracao de subcomponentes para reduzir duplicacao
5. Consolidacao de servicos de autenticacao e persistencia
6. Mantencao de compatibilidade durante a transicao, quando necessario

## O que foi melhorado

- Componentes grandes foram quebrados em partes menores e reutilizaveis
- A navegacao principal ficou declarativa em um unico arquivo de rotas
- A autenticacao passou a ser encapsulada por contexto e servico
- O fluxo de campanhas ficou mais previsivel com hooks e componentes dedicados
- A landing page foi isolada em uma feature propria
- A camada compartilhada ganhou componentes base para evitar repeticao

## Tecnologias utilizadas

- React 18
- Vite
- React Router DOM
- Vitest
- Testing Library
- Tailwind CSS
- ESLint
- PropTypes
- localStorage do navegador

## Testes

A base possui testes para os fluxos principais de autenticacao, campanhas e storage.

- `src/features/auth/services/authService.test.js`
- `src/features/auth/context/AuthProvider.test.jsx`
- `src/features/auth/components/RequireAuth.test.jsx`
- `src/features/auth/components/SignInForm.test.jsx`
- `src/features/auth/components/SignUpForm.test.jsx`
- `src/shared/storage/localStorage.test.js`
- `src/features/donations/components/Donations.test.jsx`
- `src/features/donations/components/Modal.test.jsx`
- `src/features/donations/services/userDonationStorage.test.js`

## Como executar

Instalar dependencias:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar build:

```bash
npm run build
```

Executar testes:

```bash
npm run test
```

Executar lint:

```bash
npm run lint
```

Rodar preview da build:

```bash
npm run preview
```

## Estrutura resumida

```txt
src/
  app/
  features/
    auth/
    donations/
    hero/
  shared/
```

## Proximos passos

- Concluir a remocao completa de qualquer estrutura legada remanescente
- Expandir a cobertura de testes para rotas e composicao do shell da aplicacao
- Evoluir a separacao de dominio se novas features forem adicionadas
- Revisar helpers e estilos repetidos quando surgirem novos pontos de duplicacao

