# Refatoração para Tailwind CSS - Donation Compass

## 📋 Resumo da Refatoração

Este projeto foi completamente refatorado para usar **Tailwind CSS** em vez de CSS customizado e bibliotecas de UI como Material-UI e Bootstrap. A refatoração melhora a consistência, manutenibilidade e performance do projeto.

## ✅ O que foi refatorado

### Componentes
- ✅ **IsisComponents**: Header, Footer, Telainicial - migrados de CSS customizado para Tailwind
- ✅ **MiguelComponents**: SignInForm, SignUpForm, Layout, Overlay - migrados de CSS customizado para Tailwind
- ✅ **EduardoComponents**: ModalEdit, PageEdit - migrados de Material-UI para Tailwind
- ✅ **ErycComponents**: DonationsEdit - migrados de Material-UI para Tailwind
- ✅ **TaylorComponents**: Já estava usando Tailwind (mantido)
- ✅ **LoginPage**: Refatorada para usar Tailwind

### Configuração
- ✅ **tailwind.config.js**: Atualizado com cores customizadas e fontes
- ✅ **package.json**: Removidas dependências: @emotion/react, @emotion/styled, @mui/material, bootstrap, mui
- ✅ **index.css**: Limpado para manter apenas configurações globais e fontes

## 🗑️ Dependências Removidas

Execute o comando abaixo para limpar as dependências removidas:

```bash
npm install
```

Ou se preferir remover manualmente do `node_modules`:

```bash
npm uninstall @emotion/react @emotion/styled @mui/material bootstrap mui
```

## 📁 Arquivos CSS Removidos

Os seguintes arquivos podem ser deletados manualmente do repositório (não mais utilizados):

- `src/Components/IsisComponents/header.css`
- `src/Components/IsisComponents/footer.css`
- `src/Components/IsisComponents/telainicial.css`
- `src/Components/MiguelComponents/Miguelstyles.css`
- `src/App.css`

## 🎨 Cores Customizadas Disponíveis

Todas as cores foram migradas para o `tailwind.config.js` e estão disponíveis como classes Tailwind:

```
- bg-greyIsh / text-greyIsh
- bg-cardShadow / text-cardShadow
- bg-textColor / text-textColor
- bg-orange-light / text-orange-light
- bg-orange-primary / text-orange-primary
- bg-orange-dark / text-orange-dark
- bg-brown / text-brown
```

## 🔤 Fontes Customizadas

As fontes customizadas estão disponíveis como:

- `font-farmhouse` (Simple-Farmhouse)
- `font-santello` (SANTELLO)

Exemplo de uso:
```jsx
<h1 className="font-santello text-4xl">Título</h1>
```

## 🚀 Como Usar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Construir para produção**:
   ```bash
   npm run build
   ```

## 📝 Notas Importantes

- O arquivo `src/Components/MiguelComponents/LayoutStyles.css` foi mantido para animações complexas de transição de painel (necessário para o toggle entre Sign In e Sign Up)
- Todos os componentes agora usam classes Tailwind para estilos
- Inputs HTML customizados com Tailwind substituem componentes TextField do Material-UI
- Modais e overlays foram refatorados com Tailwind

## 🔄 Próximas Etapas (Opcional)

1. Deletar os arquivos CSS antigos listados acima
2. Fazer um `npm prune` para remover dependências órfãs do node_modules
3. Testar todos os componentes em diferentes resoluções
4. Considerar adicionar temas customizados ao Tailwind se necessário

## 📚 Referências

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Color System](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind Custom Fonts](https://tailwindcss.com/docs/font-family)

---

**Versão**: 1.0.0 (Refatoração Tailwind)
**Data**: 2024
