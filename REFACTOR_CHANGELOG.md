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

### Code smells corrigidos por categoria

| Categoria | Onde aparecia | Problema | Correcao aplicada |
| --- | --- | --- | --- |
| Duplicated Code / Codigo duplicado | `SignUpForm.jsx` e `NavBar.jsx` | Trechos finais com JSX, chaves e `export default` duplicados, quebrando parsing e build. | Remocao dos blocos duplicados e manutencao de um unico fluxo de retorno/exportacao. |
| Inconsistent Naming / Case sensitivity | `Hero/index.jsx`, `routes.jsx` e `DonationsPage.jsx` | Imports usavam `components`, `Navbar` e `pageEdit`, mas os arquivos reais usam `Components`, `NavBar` e `PageEdit`. | Padronizacao dos caminhos conforme nomes reais dos arquivos, evitando erro em ambientes case-sensitive. |
| Dead Code / Codigo morto | `main.jsx`, `DonationsEdit.jsx`, `LoginPage.jsx` e `NavBar.jsx` | Imports e variaveis nao usados, como `ReactDOM`, `TextField`, `React` e objeto `usuario`. | Remocao do codigo morto e simplificacao do bootstrap React com `createRoot`. |
| Scattered Storage Access / Baixa coesao | Login, cadastro, edicao de usuario e doacoes | Acesso direto ao `localStorage` espalhado pelos componentes. | Criacao de `src/shared/storage/localStorage.js` com `readStorage` e `writeStorage`. |
| Temporal Coupling / Estado assincrono mal usado | `Search.jsx` | A busca chamava callback logo apos `setState`, enviando valores antigos. | Criada funcao `updateSearchTerms`, que calcula o proximo estado antes de chamar `onSearchChange`. |
| Primitive Obsession / Suposicao de tipo | `Donations.jsx` | Filtros chamavam `toLowerCase()` assumindo que todos os campos eram strings validas. | Criado `normalizeSearchValue` para tratar `null`, `undefined` e outros tipos sem quebrar a tela. |
| Fragile ID Generation / ID fragil | `DonationsEdit.jsx` | IDs eram gerados com `prev.length + 1`, podendo repetir apos exclusoes. | Criado `getNextDonationId`, baseado no maior ID existente. |
| UI Side Effects / Acoplamento com navegador | `DonationsEdit.jsx` e `ModalEdit.jsx` | Uso de `alert` e `window.confirm` interrompia o fluxo e acoplava regra de UI ao navegador. | Substituicao por mensagens de erro e estado de confirmacao dentro da interface. |
| Incorrect State Management / Estado incorreto | `SignInForm.jsx` e `NavBar.jsx` | Login nao atualizava usuario global; logout mantinha o mesmo usuario com `setUser(user)`. | Login passou a chamar `setUser(user)` e logout passou a limpar a sessao com `setUser(null)`. |
| Missing Props Validation / Contrato implicito | `Overlay.jsx` e providers legados | Props eram usadas sem validacao formal, gerando erro no lint e contrato pouco claro. | Inclusao de `PropTypes` para callbacks e `children`. |
| Dependency Drift / Dependencia nao declarada | `package.json` e componentes com `PropTypes` | O projeto usava `prop-types`, mas a dependencia nao estava declarada. | Declaracao oficial de `prop-types` e atualizacao do `package-lock.json`. |

### Code smells ainda pendentes

- Large Component / God Component: `DonationsEdit.jsx` ainda concentra UI, validacao, persistencia e regras de doacao.
- Security smell: senhas continuam salvas em texto puro no `localStorage`, aceitavel apenas para prototipo academico.
- CSS Scattering: o projeto ainda mistura Tailwind, CSS global, CSS por componente e objetos de estilo.
- Arquitetura paralela: `src/app` e `src/shared` existem, mas parte do app ainda roda pela estrutura legada.
- Baixa cobertura: ainda nao existe suite de testes automatizados para proteger os fluxos refatorados.

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
