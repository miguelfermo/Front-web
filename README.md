# Donation Compass

Donation Compass é uma aplicação web em React + Vite para cadastro, busca, visualização e gerenciamento de campanhas de doação. O estado de autenticação e das campanhas é persistido localmente no navegador, sem backend nesta versão.

## Descrição do software

O sistema permite que usuários se autentiquem, naveguem por campanhas, filtrem resultados e gerenciem campanhas quando estiverem autenticados.

### Principais funcionalidades

- Login e cadastro de usuários
- Proteção de rotas privadas
- Listagem e busca de campanhas de doação
- Criação, edição e exclusão de campanhas
- Edição de dados cadastrais
- Persistência local com `localStorage`

## Arquitetura do projeto

O projeto foi organizado de forma incremental, mantendo a base funcional existente e reduzindo acoplamento onde havia duplicação real.

- `src/app`: bootstrap da aplicação, provedor global e roteamento
- `src/features/auth`: autenticação, contexto, serviços, páginas e componentes da feature
- `src/features/donations`: fluxo de gerenciamento de doações
- `src/shared`: componentes reutilizáveis, storage, APIs e wrappers de contexto
- `src/pages`: páginas de composição
- `src/Components`: camada legada mantida como compatibilidade enquanto a migração continua

O alias `@/` aponta para `src/`, padronizando imports a partir das camadas principais.

## Principais problemas detectados

- Bootstrap duplicado entre `src/App.jsx`, `src/app/index.jsx` e `src/main.jsx`
- Definições paralelas de rotas em `src/router/routes.jsx` e `src/app/router/index.jsx`
- Duplicação de contexto entre `src/context` e `src/shared/contexts`
- Imports profundos e inconsistentes em páginas ativas
- Estrutura legada em `src/Components` ainda necessária para parte do fluxo

## Estratégias de refatoração utilizadas

- Centralização do bootstrap em `src/app`
- Compatibilidade por reexportação para evitar quebra de consumidores legados
- Consolidação do provider root em `AppProviders`
- Padronização de imports com alias `@/`
- Manutenção do comportamento e do layout existentes
- Refatoração mínima, sem extração desnecessária de componentes

## Testes implementados

- `authService.test.js`
- `AuthProvider.test.jsx`
- `RequireAuth.test.jsx`
- `SignInForm.test.jsx`
- `SignUpForm.test.jsx`
- `localStorage.test.js`
- `Donations.test.jsx`
- `Search.test.jsx`
- `Modal.test.jsx`

## Cobertura dos testes

Métrica medida com `npx vitest run --coverage`:

- Statements: 93.95%
- Branches: 95%
- Functions: 87.23%
- Lines: 94.24%

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

## Estrutura de pastas

```txt
src/
  app/
    index.jsx
    providers/
    router/
  features/
    auth/
    donations/
  shared/
    api/
    contexts/
    storage/
    ui/
  pages/
  Components/
```

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

## Scripts disponíveis

- `npm run dev`
- `npm run build`
- `npm run test`
- `npm run lint`
- `npm run preview`

## Melhorias futuras

- Introduzir `entities/user` e `entities/donation` quando houver recorte de domínio suficiente para evitar abstração prematura
- Migrar gradualmente os componentes legados restantes em `src/Components`
- Reduzir a dependência de compatibilidade entre `src/context` e `src/shared/contexts`
- Adicionar testes para o shell de aplicação e para o roteamento principal
- Revisar os assets de fonte apontados em `src/index.css`
