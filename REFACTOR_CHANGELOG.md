# Refactor Changelog

## Versao 1.0.2 - Clean Code Stabilization

Branch: `refactor/clean-code-1.0.2`

### Commits incluídos

- `d17e4b3 fix: stabilize refactor build and app flows`
- `356054f docs: document refactor version 1.0.2`

### O que foi feito

- Corrigidos finais duplicados em `SignUpForm.jsx` e `NavBar.jsx`.
- Corrigidos imports com capitalizacao incorreta em rotas e paginas.
- Corrigido login para salvar o usuario autenticado no contexto.
- Corrigido logout para limpar a sessao com `setUser(null)`.
- Corrigida busca para enviar ao componente pai os valores atualizados.
- Corrigidos filtros de doacoes para aceitar dados incompletos sem quebrar a tela.
- Corrigida geracao de IDs de doacoes para evitar repeticao apos exclusoes.
- Protegida a pagina de edicao de cadastro contra acesso direto sem `location.state`.
- Centralizado o acesso ao `localStorage` em `src/shared/storage/localStorage.js`.
- Removidos usos diretos de `alert`, `confirm` e `console.log` nos fluxos ajustados.

### O que foi alterado

- `package.json` atualizado para `1.0.2`.
- `package-lock.json` atualizado para `lockfileVersion: 3`.
- Dependencia `prop-types` declarada oficialmente.
- `main.jsx` passou a usar `createRoot` diretamente.
- Providers legados receberam validacao de `children`.
- `README.md` e `CHANGELOG.md` passaram a documentar a etapa `1.0.2`.

### Validacao

- `npm run lint`: aprovado.
- `npm run build`: aprovado.
- Servidor local Vite iniciado em `http://127.0.0.1:5173/`.

### Pendencias futuras

- Migrar os fluxos restantes para a arquitetura alvo em `src/app`, `src/pages` e `src/shared`.
- Adicionar testes automatizados para login, cadastro, busca, filtros e doacoes.
- Revisar avisos de fontes em `src/index.css`.
- Avaliar vulnerabilidades apontadas por `npm install`.
