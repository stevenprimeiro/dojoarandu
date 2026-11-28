# Arandu — versão 2.90.13

**Tipo:** versão pública cloud-only  
**App:** `dojo_arandu_v2-90-13.html`  
**Pacote público:** `DojoArandu v2.90.13p.zip`

## Resumo desta versão

- Indicador de conexão com a nuvem no canto superior direito da caixa de login.
- Configurações da lista de alunos ao lado da busca, com botões para ordenar por apelido ou graduação e escolher apelido/nome completo.
- Despesas de cartão de crédito parceladas por mês, com confirmação individual de cada parcela e soma financeira apenas das parcelas confirmadas.
- Correções de Destaque 1, cores das paletas, textura sutil de carbono e apresentação responsiva da lista de alunos para revisar.

## Documentação que acompanha cada deploy

Em todo deploy, atualizar e verificar em conjunto:

1. `README.md` — propósito, início de uso e funções atuais para quem abre o app pela primeira vez.
2. `README-VERSAO.md` — versão, pacote e resumo das mudanças deste deploy.
3. `VALIDACAO-v<versão>.md` — testes, limitações e estado das verificações remotas.
4. `SUPABASE.md` e `ADDENDUM-SUPABASE-CLOUD-ONLY.md` — somente quando mudar setup, esquema ou operação do Supabase; manter explícito o que foi ou não confirmado remotamente.
5. Build pública e ZIP — regenerar para que os documentos dentro do pacote coincidam com a versão publicada.

Não declarar teste em produção que não tenha sido executado e observado. A build pública não inclui dados reais de alunos.
