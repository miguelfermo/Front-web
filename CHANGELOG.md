# Changelog

O changelog abaixo resume a evolucao tecnica do projeto e destaca a transicao para a arquitetura atual.

## [Unreleased]

### Adicionado

- Documentacao atualizada no `README.md` com a arquitetura vigente, o mapa de features e os fluxos principais da aplicacao.
- Registro do processo de migracao de uma base legada para uma estrutura orientada por features.
- Consolidacao da visao de componentizacao aplicada em autenticacao, campanhas e landing page.
- Registro explicito dos principais code smells tratados na base atual, com mapeamento entre problema, solucao e pratica de Clean Code.
- Documentacao do repositorio alinhada ao estado atual da estrutura em `src/app`, `src/features` e `src/shared`.

### Alterado

- Bootstrap centralizado em `src/app`.
- Providers globais compostos em `AppProviders`.
- Autenticacao isolada em `src/features/auth` com contexto, hooks, servicos e paginas proprias.
- Fluxo de campanhas isolado em `src/features/donations` com componentes menores para listagem, formulario, modal e filtragem.
- Landing page isolada em `src/features/hero` com header, content, footer e dados separados.
- Codigo compartilhado movido para `src/shared` para reutilizacao entre features.
- Rotas consolidadas em `src/app/router/index.jsx`, com `RequireAuth` protegendo `/donations`, `/donations/edit/` e `/register/edit/`.
- Providers globais consolidados em `src/app/providers/index.jsx`, combinando `AuthProvider` e `DonationsProvider`.
- `src/main.jsx` simplificado para carregar `AppProviders` e `App`.
- `src/app/index.jsx` reduzido a um ponto de entrada que apenas instancia o `RouterProvider`.

### Refatorado

- `src/features/auth/components/AuthLayout.jsx` passou a ser o shell visual da tela de login, controlando a troca entre os formularios de entrada e cadastro.
- `src/features/auth/components/Overlay.jsx` concentrou a camada animada de alternancia entre os paineis de login e cadastro, substituindo duplicacao de markup.
- `src/features/auth/components/SignInForm.jsx` e `SignUpForm.jsx` foram simplificados para delegar autenticacao ao `useAuth`, centralizando validacao e fluxo de navegacao.
- `src/features/auth/components/ProfileEditModal.jsx` assumiu edicao e exclusao de cadastro, com fluxo de confirmacao mais explicito e integracao com `useAuth`.
- `src/features/auth/context/AuthProvider.jsx` encapsula side effects de login, logout, cadastro, edicao e exclusao, sem expor mutacao direta de estado para consumidores.
- `src/features/auth/services/authService.js` concentra persistencia de usuarios e sessao, removendo acesso direto ao storage dos componentes de UI.
- `src/features/auth/pages/LoginPage.jsx` e `src/features/auth/pages/PageEdit.jsx` passaram a compor telas especificas, reduzindo responsabilidade dos componentes de dominio.
- `src/features/donations/components/Donations.jsx` extraiu a logica de filtragem para `matchesFilters` e a renderizacao de itens para `DonationCard`, deixando o container mais previsivel.
- `src/features/donations/components/NavBar.jsx` ganhou nomes de estado e handlers mais semanticos, com fluxo de menu e modal mais legivel.
- `src/features/donations/components/Search.jsx` passou a usar `SEARCH_FIELDS` e um unico estado agregado `terms`, eliminando repeticao de JSX e estados dispersos.
- `src/features/donations/components/Modal.jsx` desestruturou `campaign` e moveu as opcoes de doacao para `DONATION_OPTIONS`, reduzindo duplicacao e melhorando leitura.
- `src/features/donations/pages/DonationsPage.jsx` isolou o estado de filtros da listagem principal e fez a comunicacao com `Search` e `Donations` de forma declarativa.
- `src/features/donations/pages/DonationsEditPage.jsx` organizou a manutencao de campanhas em torno de `AddDonationButton`, `DonationList`, `DonationForm` e `DonationModal`.
- `src/features/donations/context/DonationsProvider.jsx` passou a fornecer o estado da feature por contexto dedicado.
- `src/features/donations/hooks/useDonation.js` concentrou carregamento, validacao, persistencia, edicao e exclusao de campanhas em um unico hook de dominio.
- `src/features/donations/services/donationStorage.js`, `donationService.js`, `userDonationStorage.js` e `utils/initialInputState.js` separaram persistencia, transformacao e estado inicial.
- `src/features/hero/pages/HeroPage.jsx` passou a compor `HeroHeader`, `HeroContent` e `HeroFooter` como pagina de entrada.
- `src/features/hero/components/HeroContent.jsx`, `HeroHeader.jsx`, `HeroFooter.jsx`, `HeroCard.jsx` e `HeroContentButton.jsx` passaram a dividir layout, conteudo e CTA em componentes de responsabilidade unica.
- `src/features/hero/data/heroData.js` concentra conteudos estaticos da home, reduzindo hardcode dentro da interface.
- `src/shared/ui/*` consolidou componentes visuais reutilizaveis para evitar repeticao de botao, input, modal, titulo, subtitulo, paragrafo e acoes.
- `src/shared/storage/localStorage.js` ficou como camada unica de leitura e escrita do storage do navegador.

### Observado

- Esta entrada reflete principalmente a reorganizacao da base e a documentacao do estado atual, sem alterar o comportamento funcional nesta rodada.
- A migracao continua incremental e ainda pode existir compatibilidade temporaria com caminhos historicos ou arquivos legados no historico do repositorio.

### Code Smells Identificados e Tratados

#### Scattered Architecture / Feature Scattering

Situacao anterior:
- Rotas, providers, contexts, services e componentes estavam espalhados em diretorios paralelos, com fluxos duplicados entre `src/Components`, `src/context`, `src/pages`, `src/router` e `src/shared/contexts`.
- Havia ponto de entrada de aplicacao duplicado em diferentes camadas, com responsabilidade difusa sobre bootstrap, roteamento e providers.
- A feature de autenticacao e a feature de campanhas apareciam fragmentadas entre componentes legados e paginas de composicao.

Solucao aplicada:
- Centralizacao do bootstrap em `src/app`, consolidacao de rotas em um unico router, e reorganizacao do codigo por features em `src/features` com utilitarios compartilhados em `src/shared`.
- Reagrupamento das responsabilidades por dominio: autenticacao, campanhas e home.
- Padronizacao do caminho de importacao com alias `@/` e concentracao de codigo compartilhado em `src/shared`.

Pratica aplicada:
- Feature-Oriented Structure
- Separation of Concerns
- High Cohesion
- Consistent module boundaries

#### Large Class / God Component

Situacao anterior:
- Telas de autenticacao, campanhas e home concentravam estado, regras de negocio, markup e integracao com storage em componentes grandes e de manutencao cara.
- Formularios e modais acumulavam validacao, persistencia e renderizacao no mesmo escopo.
- O componente principal de campanhas acumulava filtragem, selecao, modal e renderizacao da lista ao mesmo tempo.

Solucao aplicada:
- Extracao de subcomponentes e paginas especificas, como `AuthLayout`, `Overlay`, `DonationCard`, `DonationForm`, `DonationList`, `DonationModal`, `HeroHeader`, `HeroContent` e `HeroFooter`.
- Separacao do shell visual, da interacao de usuario e da persistencia em unidades menores.
- Quebra de telas em componentes de composicao e em hooks de dominio.

Pratica aplicada:
- Single Responsibility Principle
- Component Composition
- Extract Class
- High Cohesion
- Low Cognitive Load

#### Duplicated Code

Situacao anterior:
- Estruturas similares de interface e logica de renderizacao se repetiam em campos de busca, opcoes de doacao, botoes, cards e blocos de layout.
- Campos de busca eram blocos quase iguais, diferindo apenas em icone, placeholder e chave de estado.
- Opcoes de doacao e partes do modal eram recriadas manualmente em vez de derivar de configuracao.
- Componentes visuais basicos eram repetidos em varios pontos da UI, com classes e estrutura semelhantes.

Solucao aplicada:
- Uso de arrays de configuracao, mapeamento por dados e componentes reutilizaveis para eliminar repeticao visual e estrutural.
- Criacao de estruturas de dados como `SEARCH_FIELDS` e `DONATION_OPTIONS`.
- Reaproveitamento de componentes base em `src/shared/ui`.
- Extracao de `DonationCard` para a lista de campanhas.

Pratica aplicada:
- DRY
- Data Driven Components
- Reuse over Copy/Paste
- Component Reuse
- Mapping over configuration

#### Long Method

Situacao anterior:
- Funcoes de interacao misturavam validacao, persistencia, montagem de objetos e atualizacao de estado em blocos longos e de leitura dificil.
- A validacao de campanha ficava presa no fluxo de salvar e nao era isolada.
- A logica de selecao, edicao e delecao de campanhas estava concentrada em um unico hook.
- A acao de doacao no modal fazia mais de uma coisa sem separar montagens de payload e persistencia.

Solucao aplicada:
- Separacao da logica em funcoes menores e mais previsiveis, como `validateForm`, `saveDonation`, `handleDonate`, `login`, `register`, `updateUser`, `deleteUser` e `initAuth`.
- Extracao de helpers de dominio como `matchesFilters`, `resetForm`, `updateTerm`, `toggleDropdown`, `openEditModal` e `closeEditModal`.
- Separacao de carregamento, validacao, persistencia e transicao de estado em funcoes menores.

Pratica aplicada:
- Extract Method
- SRP
- Readability First
- Stepwise Refinement
- Small Functions

#### Inappropriate Intimacy / Feature Envy

Situacao anterior:
- Componentes de UI acessavam `localStorage` diretamente e misturavam detalhes de persistencia com comportamento visual.
- Telas de autenticacao manipulavam o formato de dados do usuario em vez de delegar para services.
- A UI conhecia detalhes de storage, chaves e estrutura de persistencia de campanhas e usuarios.

Solucao aplicada:
- Centralizacao da persistencia em `authService`, `donationStorage`, `userDonationStorage` e `shared/storage/localStorage`, deixando os componentes consumirem apenas os hooks e services apropriados.
- A UI passou a receber dados e acionar services, sem implementar acesso ao storage diretamente.
- O contrato entre camada visual e dominio ficou mais simples: componentes emitem eventos, services executam mutacoes.

Pratica aplicada:
- Separation of Concerns
- Encapsulation
- Service Layer
- Tell, Don't Ask
- Boundary Respect

#### God Context / Hidden Side Effects

Situacao anterior:
- O estado global permitia mutacoes diretas e nao deixava claros os side effects de login, logout, cadastro, edicao e exclusao.
- Qualquer consumidor podia alterar o usuario sem passar por uma operacao de dominio.
- A atualizacao de sessao podia acontecer sem sincronizar `localStorage`, tornando o comportamento inconsistente.

Solucao aplicada:
- `AuthProvider` passou a expor acoes nomeadas, encapsulando persistencia e atualizacao do usuario por meio de metodos explicitamente definidos.
- Os efeitos colaterais foram transferidos para a camada de service e orquestrados pelo provider.
- O estado passou a ser atualizado apenas por operacoes de dominio com nome semantico.

Pratica aplicada:
- Encapsulation
- Command-like API
- Controlled Mutation
- Explicit Intent
- State Ownership

#### Dead Code / Stub and Missing Route Protection

Situacao anterior:
- Existiam pontos de entrada paralelos e rotas sem protecao consistente, o que deixava partes do fluxo expostas ou inoperantes.
- Havia paginas stub ou rotas que nao entregavam a tela funcional correspondente.
- A navegacao direta para rotas autenticadas nao era bloqueada de forma consistente.

Solucao aplicada:
- Remocao de entradas stub, consolidacao do roteamento em `src/app/router/index.jsx` e protecao das rotas autenticadas com `RequireAuth`.
- Remocao da dependencia de rotas duplicadas e padronizacao do fluxo por `createBrowserRouter`.
- Encapsulamento das rotas privadas com redirecionamento para `/login` quando nao ha sessao.

Pratica aplicada:
- Clean Routing
- Defensive Programming
- Removal of Dead Code
- Guarded Routes
- Explicit Application Shell

#### Inconsistent Naming and CSS Scattering

Situacao anterior:
- Nomes de estados, handlers, arquivos e estruturas eram inconsistentes, e havia dispersao de estilo entre arquivos legados e utilitarios modernos.
- Variaveis de estado e funcoes tinham nomes pouco semanticos, dificultando rastreio do fluxo.
- Havia mistura de classes, estilos legados e organizacao inconsistente de layout.

Solucao aplicada:
- Padronizacao de nomes semanticos, migracao para Tailwind CSS e concentracao dos estilos no proprio componente quando necessario.
- Renomeacao de handlers para refletir intencao real.
- Uso de classes utilitarias proximas ao componente que as consome.
- Reducao da necessidade de folhas de estilo externas para a maior parte da interface.

Pratica aplicada:
- Semantic Naming
- Colocation
- Utility First CSS
- Consistent Naming
- Local Styling Ownership

## [1.1.2] - 2026-06-21

### Refatorado

- `Donations.jsx`: extraído subcomponente `DonationCard` para a renderização de cada item da lista; extraída função `matchesFilters` para a lógica de filtragem, antes embutida diretamente no `.filter`.
- `Modal.jsx`: `campaign` passou a ser desestruturado no topo do componente em vez de repetir `campaign.title`, `campaign.location`, etc.; lista de opções de doação extraída para a constante `DONATION_OPTIONS`, renderizada via `.map`.
- `NavBar.jsx`: estados e handlers renomeados para maior clareza semântica (`openModal` → `isEditModalOpen`, `dropdownOpen` → `isDropdownOpen`, `handleOpenModal`/`handleCloseModal` → `openEditModal`/`closeEditModal`).
- `Search.jsx`: os três campos de busca (termo, empresa, local), antes blocos JSX quase idênticos, unificados em um array de configuração `SEARCH_FIELDS` mapeado; os três `useState` separados consolidados em um único estado `terms`.
- `FooterDiv.jsx`: listas de links "Recursos"/"Empresa" extraídas para as constantes `RESOURCE_LINKS`/`COMPANY_LINKS` e renderizadas por um novo subcomponente `FooterLinkList`; ícones sociais extraídos para o array `SOCIAL_ICONS` e renderizados via `.map`; indentação do arquivo corrigida.

### Code Smells Identificados e Tratados

#### Duplicated Code / Long Method

**Situação anterior:**
Em `src/Components/TaylorComponents/`, vários componentes repetiam blocos de JSX quase idênticos (campos de busca em `Search.jsx`, links e ícones em `FooterDiv.jsx`, acesso repetido a propriedades de `campaign` em `Modal.jsx`) e concentravam lógica de renderização e filtragem em funções únicas e extensas (`Donations.jsx`).

**Solução aplicada:**
Extração de subcomponentes (`DonationCard`, `FooterLinkList`), de funções auxiliares (`matchesFilters`) e de estruturas de dados (`SEARCH_FIELDS`, `DONATION_OPTIONS`, `RESOURCE_LINKS`, `COMPANY_LINKS`, `SOCIAL_ICONS`), eliminando duplicação e reduzindo o tamanho e a complexidade dos componentes principais.

**Prática aplicada:**
- DRY (Don't Repeat Yourself);
- Single Responsibility Principle (SRP);
- Data Driven Components.

### Observado

- Nenhuma classe CSS, texto, `data-testid`, prop ou estrutura de DOM foi alterada nesta versão.
- Suítes de teste existentes (`Donations.test.jsx`, `Modal.test.jsx`, `Search.test.jsx`) continuam válidas sem necessidade de ajustes.

## [1.1.1] - 2026-06-19

### Corrigido

- Removidos `import React` desnecessários em todos os arquivos JSX e de teste (React 18 com transform automático não exige o import).
- Adicionados imports explícitos de `beforeEach` e `vi` do Vitest nos arquivos de teste que usavam as funções como globais implícitas, resolvendo erro `no-undef` do ESLint.
- Adicionado `// eslint-disable-next-line react/prop-types` no mock de `DonationsProvider` em `Donations.test.jsx`, onde prop-types não é aplicável a funções de mock.
- Corrigido `vitest.config.js` para incluir `@vitejs/plugin-react`, habilitando o transform JSX automático nos arquivos de teste.

### Alterado

- `AuthContext` extraído de `AuthProvider.jsx` para `src/features/auth/context/AuthContext.js`, eliminando o aviso `react-refresh/only-export-components` que impedia `npm run lint` de passar com zero warnings.
- `useAuth.js` atualizado para importar `AuthContext` de `AuthContext.js` em vez de reexportá-lo de `AuthProvider.jsx`.
- `AuthProvider.test.jsx` atualizado para importar `useAuth` de `../hooks/useAuth` em vez de `./AuthProvider`.

### Adicionado

- Dependência `@vitest/coverage-v8` para geração de relatório de cobertura via `npx vitest run --coverage`.

### Code Smells Identificados e Tratados

#### Improper Input Validation / NaN Safety

**Situação anterior:**
A validação de `input.value` em `DonationsEdit.jsx` usava `Number(input.value) <= 0`. Como `NaN <= 0` retorna `false` em JavaScript, entradas não-numéricas passavam pela validação sem serem bloqueadas.

**Solução aplicada:**
Condição alterada para `isNaN(Number(input.value)) || Number(input.value) <= 0`, rejeitando explicitamente valores que não convertam em número válido.

**Prática aplicada:**
- Defensive Programming;
- Null/NaN Safety.

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato segue as recomendações do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto segue versionamento semântico sempre que aplicável.

## [1.1.0] - 2026-06-18

### Adicionado

- Estrutura `src/features/auth/` com separação por responsabilidade: `components/`, `context/`, `hooks/`, `services/` e `pages/`.
- `src/features/auth/services/authService.js` centralizando toda a lógica de autenticação: `login`, `register`, `logout`, `updateUser`, `deleteUser` e `initAuth`.
- Suíte de testes unitários com `Vitest`, incluindo `src/features/auth/services/authService.test.js` e `src/shared/storage/localStorage.test.js`.
- Dependência de ambiente `happy-dom` adicionada para execução de testes em `Vitest`, evitando conflito compatibilidade ESM/CJS com `jsdom`.
- Script `npm test` para execução da suíte de testes.
- `src/features/auth/context/AuthProvider.jsx` substituindo `UserContext`: expõe `user`, `login`, `register`, `logout`, `updateUser`, `deleteUser` e `loading`.
- `src/features/auth/hooks/useAuth.js` como ponto único de acesso ao contexto de autenticação.
- `src/features/auth/components/RequireAuth.jsx` protegendo rotas privadas (`/Donations`, `/DonationsEdit`) com redirecionamento automático para `/login`.
- `src/shared/api/apiClient.js` com instância Axios centralizada, pronta para interceptors futuros.
- Persistência de sessão: usuário autenticado é restaurado do `localStorage` ao recarregar a página via `authService.initAuth`.

### Alterado

- `src/main.jsx` substituindo `UserProvider` por `AuthProvider`.
- `src/app/router/index.jsx` corrigindo import de `LoginPage` (apontava para stub `pages/Login/index.jsx` que retornava `null`) e adicionando `RequireAuth` nas rotas protegidas.
- `NavBar.jsx` migrado de `useUser` para `useAuth`; logout agora chama `logout()` do contexto em vez de `setUser(null)` direto.
- `Search.jsx` migrado de `useUser` para `useAuth`.
- Correção da suíte de testes `Vitest`: adicionados imports de `React` em arquivos JSX, ajustados mocks e validações em `SignInForm`, `SignUpForm`, `Search`, `Modal` e `Donations` para rodar com `happy-dom`.
- `ModalEdit.jsx` migrado de `useUser` para `useAuth`; edição e exclusão de cadastro delegadas para `updateUser` e `deleteUser` do contexto, removendo manipulação direta de `localStorage`.

### Removido

- `src/Components/MiguelComponents/Layout.jsx` substituído por `AuthLayout.jsx`.
- `src/Components/MiguelComponents/SignInForm.jsx` movido para `features/auth/components/`.
- `src/Components/MiguelComponents/SignUpForm.jsx` movido para `features/auth/components/`.
- `src/Components/MiguelComponents/Overlay.jsx` movido para `features/auth/components/`.
- `src/Components/MiguelComponents/LayoutStyles.css` movido para `features/auth/components/`.
- `src/Components/MiguelComponents/Miguelstyles.css` removido (CSS legado substituído por Tailwind).
- `src/pages/LoginPage.jsx` e `src/pages/Login/index.jsx` substituídos por `features/auth/pages/LoginPage.jsx`.
- `src/context/UserContext.jsx` substituído por `AuthProvider`; imports atualizados em todos os consumidores.

### Refatorado

- Separação clara de responsabilidades no fluxo de autenticação: UI (`SignInForm`, `SignUpForm`) não acessa mais `localStorage` diretamente; toda persistência passa pelo `authService`.
- `AuthLayout.jsx` encapsula o contêiner animado de login/cadastro, isolando o estado de painel (`rightPanelActive`) da página.

### Code Smells Identificados e Tratados

#### Inappropriate Intimacy / Feature Envy

**Situação anterior:**
`SignInForm` e `SignUpForm` acessavam `localStorage` diretamente, misturando lógica de UI com lógica de persistência. `ModalEdit` também manipulava `localStorage` diretamente para editar e deletar usuários.

**Solução aplicada:**
Criação de `authService.js` centralizando toda operação de armazenamento. Os componentes de UI passaram a delegar ao contexto via `useAuth`.

**Prática aplicada:**
- Single Responsibility Principle (SRP);
- Separation of Concerns (SoC).

#### God Context / Large Class

**Situação anterior:**
`UserContext` expunha `setUser` diretamente, fazendo com que qualquer componente pudesse mutá-lo livremente sem controle de side effects (sem persistir no `localStorage`, sem limpar sessão, etc.).

**Solução aplicada:**
`AuthProvider` expõe apenas ações nomeadas (`login`, `logout`, `register`, `updateUser`, `deleteUser`), ocultando o setter e garantindo que toda mutação de estado seja acompanhada de persistência.

**Prática aplicada:**
- Encapsulamento;
- Command Pattern.

#### Dead Code / Stub

**Situação anterior:**
`src/pages/Login/index.jsx` retornava `null`. O router importava esse stub, tornando a rota `/login` completamente inoperante.

**Solução aplicada:**
Arquivo removido e router atualizado para importar a `LoginPage` real de `features/auth/pages/`.

**Prática aplicada:**
- Remoção de código morto;
- Clean routing.

#### Missing Route Protection

**Situação anterior:**
Rotas `/Donations` e `/DonationsEdit` eram acessíveis sem autenticação via URL direta.

**Solução aplicada:**
`RequireAuth` envolve as rotas privadas, redirecionando para `/login` quando não há usuário autenticado.

**Prática aplicada:**
- Defensive Programming;
- Separation of Concerns.

#### Scattered Architecture (Feature Scattering)

**Situação anterior:**
Código de autenticação distribuído em `src/Components/MiguelComponents/`, `src/pages/`, `src/context/` e `src/shared/contexts/` sem agrupamento por feature.

**Solução aplicada:**
Toda a feature de autenticação consolidada em `src/features/auth/` seguindo estrutura feature-based.

**Prática aplicada:**
- High Cohesion;
- Feature-Oriented Structure.

### Adicionado

- Atualização feita para Node.js 22 em `package.json`.
- `packageManager` com npm 10 em `package.json`.
- Estrutura alvo em `src/app` para futura centralização de bootstrap, providers e rotas.
- Estrutura alvo em `src/components` com pastas atômicas e arquivos `index.jsx`, `data.js` e `style.js` quando aplicável.
- Estrutura alvo em `src/pages` para migração gradual das telas.
- Estrutura alvo em `src/shared` para contextos e dados compartilhados.
- Documentação da arquitetura alvo e dos motivos técnicos no `README.md`.

### Alterado

- Atualizado `package-lock.json` para `lockfileVersion: 3`, gerado por npm moderno via Corepack.
- Atualizado `README.md` para refletir Node 22, organização proposta e estratégia incremental.
- Atualizado `package.json` para remover dependências de interface legadas (`@mui/material`, `@emotion/react`, `@emotion/styled`, `bootstrap`, `mui`).
- Simplificado `src/index.css` para manter apenas configurações globais, fontes e Tailwind.
- Refatorados componentes legados para Tailwind CSS com classes utilitárias em vez de arquivos CSS isolados.

### Refatorado

- Projeto completamente migrado para Tailwind CSS em Header, Footer, TelaInicial, login, cadastro, modais e listagens.
- Componentes de `MiguelComponents`, `EduardoComponents`, `ErycComponents` e `TaylorComponents` adaptados para Tailwind.
- Mantido apenas `src/Components/MiguelComponents/LayoutStyles.css` para animações específicas de transição de painel.
- Atualizado `tailwind.config.js` com cores e fontes customizadas.
- Documentação de limpeza e finalização consolidada no `CHANGELOG.md`.

### Observado

- As telas legadas foram mantidas sem reajuste visual nesta etapa.
- Os arquivos da nova estrutura de componentes foram criados vazios ou mínimos para servir como base de migração.
- O projeto ainda não possui suíte de testes automatizados nem ferramenta de cobertura.
- O lint foi estabilizado na versao `1.0.2`; novas pendencias devem ser tratadas em versoes futuras.

## [1.0.2] - 2026-06-17

### Corrigido

- Removidas duplicacoes de JSX/export em `SignUpForm.jsx` e `NavBar.jsx`.
- Corrigidos imports com capitalizacao incorreta em `Hero/index.jsx` e `router/routes.jsx`.
- Corrigido login para atualizar o usuario autenticado no contexto.
- Corrigido logout para limpar a sessao com `setUser(null)`.
- Corrigida busca de doacoes para enviar os valores atualizados ao componente pai.
- Corrigidos filtros de doacoes para tolerar dados incompletos vindos do storage.
- Corrigida geracao de IDs de doacoes para evitar colisoes apos exclusoes.
- Protegida a pagina de edicao de cadastro contra acesso sem `location.state`.

### Refatorado

- Criado `src/shared/storage/localStorage.js` para centralizar leitura e escrita no browser storage.
- Substituidos `alert`, `confirm` e `console.log` por feedback controlado na interface.
- Ajustado `main.jsx` para usar `createRoot` diretamente.
- Adicionada validacao de `children` nos providers legados.

### Alterado

- Atualizada a versao do pacote para `1.0.2`.
- Atualizado `package-lock.json` para `lockfileVersion: 3`.
- Declarada a dependencia `prop-types`, ja utilizada por componentes existentes.

### Validado

- `npm run lint`.
- `npm run build`.

## [1.0.0] - 2026-05-30

### Adicionado

- Estrutura inicial do front-end Donation Compass.
- Landing page institucional.
- Fluxo de login e cadastro de usuários.
- Listagem e busca de campanhas de arrecadação.
- Criação, edição e exclusão de campanhas.
- Edição e exclusão de cadastro de usuário.
- Persistência local de usuários e campanhas via `localStorage`.
- Configuração inicial com React, Vite, Tailwind CSS, Material UI, Bootstrap, React Router e ESLint.

## [1.0.1] - 2026-06-05

### Adicionado
- Estrutura modular em src/components, organizada por contexto e responsabilidade.
- Página HeroScreen responsável pela composição da tela inicial.
- Componentes especializados para título, textos, botões e cartões da seção Hero.
- Arquivo data.js para centralização dos conteúdos estáticos da tela inicial.
- Organização hierárquica de componentes visando reutilização e escalabilidade.
- Padronização de nomes de imagens utilizando convenção kebab-case.

### Alterado
- Reestruturação da arquitetura do front-end para uma abordagem baseada em componentes.
- Substituição da implementação monolítica da antiga TelaInicial.jsx.
- Remoção dos arquivos CSS específicos em favor da utilização de Tailwind CSS.
- Simplificação da rota principal através da abstração da página HeroScreen.
- Padronização da organização dos arquivos utilizando index.jsx.


### Refatorado
- Extração do conteúdo estático da interface para estruturas de dados independentes.
- Separação entre conteúdo, layout e apresentação.
- Redução do acoplamento entre componentes.
- Aumento da coesão através do agrupamento de arquivos relacionados.
- Melhoria da legibilidade e manutenção do código.
- Melhorias de Arquitetura

## Antes

A arquitetura anterior possuía:
- Componentes concentrando múltiplas responsabilidades.
- Mistura entre conteúdo, layout e estilização.
- Arquivos CSS independentes para cada componente.
- Estrutura de diretórios sem separação clara por domínio.
- Alto acoplamento entre as partes da página principal.
- Grande quantidade de conteúdo estático diretamente dentro dos componentes.

## Depois

A arquitetura passou a adotar:
- Componentização em múltiplos níveis.
- Componentes com responsabilidade única.
- Centralização dos dados em arquivos específicos.
- Estrutura baseada em contexto funcional.
- Separação entre apresentação e conteúdo.
- Reutilização e composição de componentes.
- Padronização de nomenclatura e organização.
- Code Smells Identificados e Tratados
- Large Class / God Component

### Situação anterior
TelaInicial.jsx concentrava:
- Layout;
- Conteúdo textual;
- Estrutura da página;
- Navegação;
- Estilização.

Caracterizando um componente excessivamente grande e com múltiplas responsabilidades.

### Solução aplicada
- Quebra do componente em unidades menores.

Criação de:
- HeroScreen
- HeroContent
- HeroCard
- HeroContentTitle
- HeroContentParagraph
- HeroContentButton

Prática aplicada
- Single Responsibility Principle (SRP);
- Component Composition;

Alta coesão.
- Divergent Change
- Situação anterior

Qualquer alteração textual ou estrutural exigia modificações em um único arquivo extenso.

## Solução aplicada

Separação do conteúdo em data.js, permitindo alterações independentes da estrutura visual.

Prática aplicada
Separation of Concerns;
Encapsulamento.
Shotgun Surgery
Situação anterior

Mudanças em elementos da Hero exigiam alterações em vários trechos do mesmo componente.

Solução aplicada

Separação em componentes especializados e reutilizáveis.

Prática aplicada
Componentização;
Baixo acoplamento.
Duplicated Code
Situação anterior

Estruturas semelhantes de títulos e parágrafos tendiam a se repetir.

Solução aplicada

Criação de componentes reutilizáveis.

Prática aplicada
DRY (Don't Repeat Yourself).
Primitive Obsession
Situação anterior

Grande quantidade de textos hardcoded dentro do JSX.

Solução aplicada

Centralização das informações em data.js.

Prática aplicada
- Data Driven Components;
- Separation of Concerns.
- Inconsistent Naming
- Situação anterior

Existência de nomenclaturas inconsistentes:
- HeaderDN;
- Telainicial;
- arquivos com diferentes padrões de escrita.

### Solução aplicada

Padronização da nomenclatura dos componentes e imagens.

### Prática aplicada
- Convention over Configuration;
- Consistência semântica.
- Excessive Coupling

### Situação anterior
A rota principal precisava conhecer diretamente:
- Header;
- TelaInicial;
- Footer.

### Solução aplicada
Introdução da abstração HeroScreen.

Prática aplicada
- Encapsulamento;
- Baixo acoplamento.
- CSS Scattering

Situação anterior
Estilos distribuídos em múltiplos arquivos:
- header.css;
- footer.css;
- telainicial.css.

Gerando maior dispersão e dificuldade de manutenção.

Solução aplicada
Adoção de Tailwind CSS.

Prática aplicada
- Colocation;
- Utility First CSS.
- Baixa Coesão da Estrutura

Situação anterior
- Arquivos relacionados encontravam-se dispersos dentro de uma única pasta.

### Arquitetura Antiga
src
|___Components
    |___IsiComponents
        |___footer.css
        |___Footer.jsx
        |___header.css
        |___Header.jsx
        |___TelaInicial.css
        |___TelaInicial.jsx

### Solução aplicada

Organização baseada em contexto:
components
├── Header
├── Footer
├── HeroContent
   ├── HeroCard
   ├── HeroContentTitle
   ├── HeroContentParagraph
   ├── HeroContentButton
   ├── data.js
   └── index.jsx

Prática aplicada
- High Cohesion;
- Feature-Oriented Structure.

Princípios de Clean Code Aplicados
- Single Responsibility Principle (SRP);
- Separation of Concerns (SoC);
- DRY (Don't Repeat Yourself);
- Baixo acoplamento;
- Alta coesão;
- Encapsulamento;
- Component Composition;
- Convention over Configuration;
- Data Driven Components;
- Feature-Oriented Structure;
- Utility First CSS;
- Maior legibilidade e manutenibilidade;
- Maior escalabilidade da arquitetura;
- Melhor reutilização dos componentes;
- Redução da complexidade ciclomática dos componentes de alto nível.

### Resultado Esperado

A nova arquitetura proporciona:
- Melhor legibilidade do código;
- Maior facilidade de manutenção;
- Menor impacto de futuras alterações;
- Maior reutilização de componentes;
- Maior escalabilidade da aplicação;
- Redução do acoplamento entre módulos;
- Melhor aderência às práticas de Clean Code e princípios SOLID.

## [1.0.2] - 2026-06-17
Organização das cores para seguir mesmo padrão do css antigo e remoção de arquivos de contextualização para limpeza do repositório

## [1.0.3] - 2026-06-21
Aplicação de componentes em todas as telas que faziam uso da estrutura antiga/individual dos mesmos.
