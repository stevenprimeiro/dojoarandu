# Arandu — versão 2.90.16

**Tipo:** versão pública cloud-only  
**App:** `dojo_arandu_v2-90-16.html`  
**Pacote público:** `DojoArandu v2.90.16p.zip`

## Resumo deste deploy

- Configurações da lista aplicadas imediatamente ao tocar na opção, sem botões Aplicar ou Cancelar.
- Ordenação por apelido, nome ou graduação, com direção crescente/decrescente. Faixas usam a sequência de cor com graus como segundo critério: branca → azul → roxa → marrom → preta; dentro de cada faixa, sem grau → 4 graus.
- Exibição dos cartões por apelido ou nome completo.
- Textura de carbono mais visível no fundo, ainda sobreposta ao degradê.
- Novo card de despesas parceladas, listando compras, o valor correspondente à parcela do mês e a ação de confirmar pagamento.
- Despesa no cartão parcelada em 10 vezes de R$ 500, por exemplo, registra R$ 50 por mês; apenas parcelas confirmadas entram no somatório pago daquele mês.

## Documentação que acompanha cada deploy

Em todo deploy, atualizar e verificar em conjunto:

1. `README.md` — propósito, início de uso e funções atuais para quem abre o app pela primeira vez.
2. `README-VERSAO.md` — versão, pacote e resumo das mudanças deste deploy.
3. `VALIDACAO-v<versão>.md` — testes, limitações e estado das verificações remotas.
4. `SUPABASE.md` e `ADDENDUM-SUPABASE-CLOUD-ONLY.md` — quando mudar setup, esquema ou operação do Supabase; explicitar o que foi ou não confirmado remotamente.
5. Build pública e ZIP — regenerar para que os documentos dentro do pacote coincidam com a versão publicada.

Não declarar teste em produção que não tenha sido executado e observado. A build pública não inclui dados reais de alunos.
