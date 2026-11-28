# Arandu — versão 2.90.18

**Tipo:** versão pública cloud-only  
**App:** `dojo_arandu_v2-90-18.html`  
**Pacote público:** `DojoArandu v2.90.18p.zip`

## Resumo deste deploy

- Corrige o custo visual associado à textura de carbono: a camada deixou de usar dois gradientes CSS repetidos, blend mode e posição fixed no perfil móvel. Agora usa um microtile SVG estático, sem mistura de camadas, e se desloca junto com a página em telas pequenas.
- A textura continua visível no celular e no desktop. O teste de regressão confirma camada visível, `position:absolute` e `mix-blend-mode:normal` no viewport móvel.
- Playwright e auditorias locais passaram. No benchmark de Chromium headless em viewport 390×844, o RAF marcou 60 FPS nos dois arquivos; essa simulação não reproduz o hardware do celular da usuária, mas não mostrou regressão na build corrigida.

## Documentação que acompanha cada deploy

Em todo deploy, atualizar e verificar em conjunto:

1. `README.md` — propósito, início de uso e funções atuais para quem abre o app pela primeira vez.
2. `README-VERSAO.md` — versão, pacote e resumo das mudanças deste deploy.
3. `VALIDACAO-v<versão>.md` — testes, limitações e estado das verificações remotas.
4. `SUPABASE.md` e `ADDENDUM-SUPABASE-CLOUD-ONLY.md` — quando mudar setup, esquema ou operação do Supabase; explicitar o que foi ou não confirmado remotamente.
5. Build pública e ZIP — regenerar para que os documentos dentro do pacote coincidam com a versão publicada.

Não declarar teste em produção que não tenha sido executado e observado. A build pública não inclui dados reais de alunos.
