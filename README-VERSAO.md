# Arandu — versão 2.90.19

**Tipo:** versão pública cloud-only  
**App:** `dojo_arandu_v2-90-19.html`  
**Pacote público:** `DojoArandu v2.90.19p.zip`

## Resumo deste deploy

- Textura de carbono suavizada para ficar quase invisível, mantendo o padrão SVG estático de baixo custo que evita blend mode e dois gradientes móveis.
- A tag no título de cada turma da Frequência agora depende do horário e da confirmação: **Confirmado** antes do horário, **Ao vivo** durante a janela da aula, **Concluído** depois do fim. Sem treino confirmado, não há tag de estado.
- Status Adulto e Kids usam os horários configurados independentemente.
- Playwright, auditoria de contraste e auditoria HTML/UX passaram.

## Documentação que acompanha cada deploy

Em todo deploy, atualizar e verificar em conjunto:

1. `README.md` — propósito, início de uso e funções atuais para quem abre o app pela primeira vez.
2. `README-VERSAO.md` — versão, pacote e resumo das mudanças deste deploy.
3. `VALIDACAO-v<versão>.md` — testes, limitações e estado das verificações remotas.
4. `SUPABASE.md` e `ADDENDUM-SUPABASE-CLOUD-ONLY.md` — quando mudar setup, esquema ou operação do Supabase; explicitar o que foi ou não confirmado remotamente.
5. Build pública e ZIP — regenerar para que os documentos dentro do pacote coincidam com a versão publicada.

Não declarar teste em produção que não tenha sido executado e observado. A build pública não inclui dados reais de alunos.
