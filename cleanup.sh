#!/bin/bash
# Script para limpar arquivos CSS antigos após refatoração Tailwind

echo "🧹 Iniciando limpeza de arquivos CSS antigos..."
echo ""

# Array com arquivos a deletar
files_to_delete=(
    "src/Components/IsisComponents/header.css"
    "src/Components/IsisComponents/footer.css"
    "src/Components/IsisComponents/telainicial.css"
    "src/Components/MiguelComponents/Miguelstyles.css"
    "src/App.css"
)

# Deletar cada arquivo
for file in "${files_to_delete[@]}"; do
    if [ -f "$file" ]; then
        rm "$file"
        echo "✅ Deletado: $file"
    else
        echo "⚠️  Arquivo não encontrado: $file"
    fi
done

echo ""
echo "🧹 Limpeza concluída!"
echo ""
echo "Próximos passos:"
echo "1. npm install - para atualizar dependências"
echo "2. npm prune - para remover dependências órfãs"
echo "3. npm run dev - para verificar se tudo funciona"
echo ""
echo "✨ Projeto refatorado com sucesso!"
