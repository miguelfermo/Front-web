# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

O formato segue as recomendações do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), e este projeto segue versionamento semântico sempre que aplicável.

## [Não publicado]

### Adicionado

- Documentação técnica completa no `README.md`.
- Descrição do software, funcionalidades principais e rotas.
- Análise dos principais problemas funcionais e code smells encontrados.
- Registro das estratégias de refatoração aplicadas e recomendadas.
- Descrição do estado atual dos testes e da cobertura automatizada.
- Instruções de instalação, execução, build, preview e lint.

### Alterado

- Reestruturado o conteúdo do `README.md` para facilitar avaliação técnica do projeto.
- Atualizado este `CHANGELOG.md` para seguir a estrutura do Keep a Changelog.

### Observado

- `npm run build` executa com sucesso, mas emite avisos de fontes não resolvidas referenciadas em `src/index.css`.
- `npm run lint` falha no estado atual com erros de variáveis/imports não usados, `setError` indefinido e props sem validação.
- O projeto ainda não possui suíte de testes automatizados nem ferramenta de cobertura.

## [1.0.0] - 2026-05-30

### Adicionado

- Estrutura inicial do front-end Donation Compass.
- Landing page institucional.
- Fluxo de login e cadastro de usuários.
- Listagem e busca de campanhas de arrecadação.
- Criação, edição e exclusão de campanhas.
- Edição e exclusão de cadastro de usuário.
- Persistência local de usuários e campanhas via `localStorage`.
- Configuração inicial com React, Vite, React Router, Tailwind CSS, Material UI, Bootstrap e ESLint.
