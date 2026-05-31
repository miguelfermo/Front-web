# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato segue as recomendações do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto segue versionamento semântico sempre que aplicável.

## [Não publicado]

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

### Observado

- As telas legadas foram mantidas sem reajuste visual nesta etapa.
- Os arquivos da nova estrutura de componentes foram criados vazios ou mínimos para servir como base de migração.
- O projeto ainda não possui suíte de testes automatizados nem ferramenta de cobertura.
- O lint ainda aponta problemas existentes na estrutura legada.

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
