# Arquivos CSS desnecessários (podem ser deletados)

Os seguintes arquivos foram refatorados para usar Tailwind CSS e não são mais necessários:

1. `src/Components/IsisComponents/header.css` - Refatorado em Header.jsx
2. `src/Components/IsisComponents/footer.css` - Refatorado em Footer.jsx
3. `src/Components/IsisComponents/telainicial.css` - Refatorado em Telainicial.jsx
4. `src/Components/MiguelComponents/Miguelstyles.css` - Refatorado em componentes individuais
5. `src/App.css` - Arquivo vazio

## Arquivos mantidos com CSS necessário

- `src/index.css` - Mantido para configurações globais, fontes e Tailwind
- `src/Components/MiguelComponents/LayoutStyles.css` - Mantido para animações complexas de transição de painel

## Dependências removidas do package.json

- @emotion/react
- @emotion/styled
- @mui/material
- bootstrap
- mui

Execute `npm install` após remover essas dependências para atualizar node_modules.
