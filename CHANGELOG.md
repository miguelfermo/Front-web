# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato segue as recomendações do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto segue versionamento semântico sempre que aplicável.

## [1.1.0] - 2026-06-18

### Adicionado

- Estrutura `src/features/auth/` com separação por responsabilidade: `components/`, `context/`, `hooks/`, `services/` e `pages/`.
- `src/features/auth/services/authService.js` centralizando toda a lógica de autenticação: `login`, `register`, `logout`, `updateUser`, `deleteUser` e `initAuth`.
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