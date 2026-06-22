# Changelog

O changelog abaixo resume a evolucao tecnica do projeto e destaca a transicao para a arquitetura atual.

## [Unreleased]

### Adicionado

- Documentacao atualizada no `README.md` com a arquitetura vigente, o mapa de features e os fluxos principais da aplicacao.
- Registro do processo de migracao de uma base legada para uma estrutura orientada por features.
- Consolidacao da visao de componentizacao aplicada em autenticacao, campanhas e landing page.

### Alterado

- Bootstrap centralizado em `src/app`.
- Providers globais compostos em `AppProviders`.
- Autenticacao isolada em `src/features/auth` com contexto, hooks, servicos e paginas proprias.
- Fluxo de campanhas isolado em `src/features/donations` com componentes menores para listagem, formulario, modal e filtragem.
- Landing page isolada em `src/features/hero` com header, content, footer e dados separados.
- Codigo compartilhado movido para `src/shared` para reutilizacao entre features.

### Refatorado

- `AuthLayout` e `Overlay` passaram a compor a experiencia visual de login e cadastro.
- `ProfileEditModal` centraliza edicao e exclusao de cadastro via `useAuth`.
- `Donations` usa `matchesFilters` e `DonationCard` para simplificar filtragem e renderizacao.
- `DonationsEditPage` organiza manutencao de campanhas com `DonationForm`, `DonationList`, `DonationModal` e `AddDonationButton`.
- `HeroPage` consolida `HeroHeader`, `HeroContent`, `HeroCard`, `HeroContentButton` e `HeroFooter`.
- `RequireAuth` protege as rotas autenticadas.

### Observado

- Esta entrada reflete principalmente a reorganizacao da base e a documentacao do estado atual, sem alterar o comportamento funcional nesta rodada.
- A migracao continua incremental e ainda pode existir compatibilidade temporaria com caminhos historicos ou arquivos legados no historico do repositorio.

## [1.1.2] - 2026-06-21

### Refatorado

- `Donations.jsx`: extraido `DonationCard` para renderizacao de cada item e `matchesFilters` para a logica de filtragem.
- `Modal.jsx`: campanha desestruturada no topo do componente e opcoes de doacao concentradas em `DONATION_OPTIONS`.
- `NavBar.jsx`: estados e handlers renomeados para maior clareza semantica.
- `Search.jsx`: tres campos de busca consolidados em configuracao orientada por dados.
- `FooterDiv.jsx`: links e icones extraidos para constantes e renderizados por subcomponentes dedicados.

### Code Smells Identificados e Tratados

#### Duplicated Code / Long Method

Situacao anterior:
- Componentes repetiam blocos de JSX quase identicos e misturavam renderizacao com regras de filtro.

Solucao aplicada:
- Extracao de subcomponentes, funcoes auxiliares e estruturas de dados para reduzir duplicacao e complexidade.

Pratica aplicada:
- DRY
- SRP
- Data Driven Components

### Observado

- Nenhuma classe CSS, texto, `data-testid`, prop ou estrutura de DOM foi alterada nesta versao.
- As suites de teste existentes continuaram validas sem ajuste estrutural.

## [1.1.1] - 2026-06-19

### Corrigido

- Removidos `import React` desnecessarios em arquivos JSX e de teste.
- Adicionados imports explicitos de `beforeEach` e `vi` do Vitest nos testes que dependiam desses globais.
- Corrigido mock de `DonationsProvider` em `Donations.test.jsx` para evitar aviso de `prop-types`.
- Atualizado `vitest.config.js` para incluir `@vitejs/plugin-react`.

### Alterado

- `AuthContext` extraido de `AuthProvider.jsx` para `src/features/auth/context/AuthContext.js`.
- `useAuth.js` atualizado para consumir o novo `AuthContext`.
- `AuthProvider.test.jsx` ajustado para importar `useAuth` do hook real.

### Adicionado

- Dependencia `@vitest/coverage-v8` para gerar relatorios de cobertura.

## [1.1.0] - 2026-06-18

### Adicionado

- Estrutura `src/features/auth/` com `components`, `context`, `hooks`, `services` e `pages`.
- `authService.js` centralizando login, cadastro, logout, atualizacao, exclusao e inicializacao da sessao.
- `AuthProvider` e `useAuth` como ponto unico de acesso ao estado de autenticacao.
- `RequireAuth` protegendo rotas privadas com redirecionamento para `/login`.
- `apiClient.js` como instancia Axios centralizada.
- Restauracao de sessao autenticada via `localStorage` no carregamento.

### Alterado

- `main.jsx` passou a usar `AuthProvider`.
- `router/index.jsx` passou a proteger rotas autenticadas.
- Fluxos de login e cadastro migraram para a estrutura nova de autenticacao.

### Removido

- Estruturas antigas da autenticacao foram substituidas pela feature `auth`.
- Paginas stub e pontos de entrada paralelos foram eliminados.

## [1.0.2] - 2026-06-17

### Corrigido

- Duplicacoes de JSX/export em formularios e navegacao.
- Imports com capitalizacao incorreta.
- Fluxos de login, logout, busca e edicao vinculados ao contexto correto.

### Refatorado

- Centralizacao da leitura e escrita no `localStorage`.
- Ajustes no `main.jsx` para `createRoot`.

### Validado

- `npm run lint`
- `npm run build`

## [1.0.1] - 2026-06-05

### Adicionado

- Estrutura modular inicial baseada em componentes.
- Pagina principal composta por hero, header e footer.
- Componentes especializados para conteudo estatico e CTA.

### Refatorado

- Separacao entre conteudo, layout e apresentacao.
- Reducao de acoplamento entre partes da interface.

## [1.0.0] - 2026-05-30

### Adicionado

- Estrutura inicial do front-end Donation Compass.
- Landing page institucional.
- Fluxo de login e cadastro.
- Listagem e busca de campanhas.
- Criacao, edicao e exclusao de campanhas.
- Persistencia local de usuarios e campanhas via `localStorage`.

