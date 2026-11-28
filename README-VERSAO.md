# Arandu — versão 2.90.17

**Tipo:** versão pública cloud-only  
**App:** `dojo_arandu_v2-90-17.html`  
**Pacote público:** `DojoArandu v2.90.17p.zip`

## Resumo deste deploy

- Textura de carbono mantida visível também em celulares e dispositivos com perfil de baixo efeito visual.
- Na faixa semanal da Frequência, cada bolinha verde indica uma turma confirmada. Adulto e Kids têm indicadores separados; não há ponto sem confirmação.
- Na versão web, o menu da lista de alunos voltou a permitir mostrar/ocultar colunas. Essas opções não aparecem na interface móvel.
- Ordenação da tabela usa cor da faixa antes dos graus: branca, azul, roxa, marrom e preta; 0 a 4 graus dentro de cada cor.
- Limpeza preparada a partir do backup enviado: conservar somente as chamadas a partir de 23/11/2026, inclusive. Original arquivado e conteúdo preservado verificado. **A limpeza no Supabase remoto ainda exige executar a consulta SQL, após revisar a prévia e fazer backup atual.**

## Documentação que acompanha cada deploy

Em todo deploy, atualizar e verificar em conjunto:

1. `README.md` — propósito, início de uso e funções atuais para quem abre o app pela primeira vez.
2. `README-VERSAO.md` — versão, pacote e resumo das mudanças deste deploy.
3. `VALIDACAO-v<versão>.md` — testes, limitações e estado das verificações remotas.
4. `SUPABASE.md` e `ADDENDUM-SUPABASE-CLOUD-ONLY.md` — quando mudar setup, esquema ou operação do Supabase; explicitar o que foi ou não confirmado remotamente.
5. Build pública e ZIP — regenerar para que os documentos dentro do pacote coincidam com a versão publicada.

Não declarar teste em produção que não tenha sido executado e observado. A build pública não inclui dados reais de alunos.
