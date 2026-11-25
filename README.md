# Arandu · Sistema do Dojo

**Gestão do dia a dia de uma academia de jiu-jitsu** — alunos, chamada, mensalidades e treinos, em um único arquivo HTML que roda no navegador, no celular ou no computador, **sem servidor e sem nuvem**.

Criado por **Steven Primeiro** · versão **2.31**

---

## O que ele faz

| Recurso | O que faz |
|---|---|
| **Alunos** | Ficha completa: faixa e graus, idade, turma (Adulto/Kids), localidade, telefone e responsável. Busca por nome, telefone ou faixa. |
| **Frequência** | Chamada por turma, presença por dia, visitantes e sequência de treinos do dojo. |
| **Treinos** | Planejamento com mapa mental de posições do jiu-jitsu — da guarda à finalização, ligadas como um grafo que cresce da esquerda para a direita. |
| **Financeiro** | Mensalidades mês a mês, extrato por aluno, despesas por categoria, recebido × em aberto, atrasados. |
| **Cobrança** | Texto de cobrança pronto para o WhatsApp, com Pix, emoji escolhido por você e envio em um toque. |
| **Celular** | Atalho na tela inicial (PWA), funciona offline e a barra de topo se esconde ao rolar. |
| **Segurança** | PIN de entrada, trancar ao sair do app e "limpar ao sair" para aparelho emprestado. |

## Como abrir

**No computador:** baixe o `index.html` e dê dois cliques — abre no navegador, sem instalar nada.

**No celular (recomendado):** abra o endereço publicado, use **Ajustes → Celular → Criar atalho** e o app fica na tela inicial, em tela cheia e com funcionamento offline.

> O atalho só funciona quando o app está publicado num endereço web (`https://…`). Aberto direto do arquivo (`file://`), o navegador não libera a instalação — o próprio app avisa isso.

## Dados: onde ficam

- Tudo é gravado **no próprio aparelho** (`localStorage` do navegador). Nada de alunos, telefones ou mensalidades sai daqui — não existe login, servidor ou sincronização.
- O `index.html` publicado **não contém dados reais**: abre com uma base de exemplo ("Aluno Exemplo"), para qualquer pessoa que acesse o link ver um sistema vazio.
- **Faça backup**: Ajustes → Dados → *Baixar backup* gera um `.json`. Limpar os dados do navegador apaga tudo.
- O backup tem dados reais — guarde como guardaria um caderno de matrículas, nunca em link público.

## Ajustes que valem conhecer

- **Aparência** — tema escuro/claro/sistema, 8 padrões de cor (incluindo *Vermelho tatame* e *Verde musgo*) e densidade da lista de alunos.
- **Celular** — posição do botão flutuante, esconder a barra ao rolar e criar atalho.
- **Segurança** — PIN de 4 a 8 dígitos (guardado embaralhado em SHA-256), trancar ao trocar de aba, limpar ao fechar.
- As seções abrem ao toque no título e se recolhem no toque seguinte.

## Horários

| Turma | Dias | Horário |
|---|---|---|
| Kids | seg, qua e sex | 18:00 – 19:00 |
| Adulto | seg a sex | **19:10 – 21:00** |

A tela inicial acompanha o relógio: antes do treino mostra o próximo horário, durante o treino avisa que o tatame está vivo e, depois do fim, muda para **"Treino encerrado"** com as presenças do dia.

## Tecnologia

HTML, CSS e JavaScript puros — sem bibliotecas, sem build, sem dependências. Um arquivo para a interface, um `sw.js` para o modo offline e um manifest com ícones para o atalho. Funciona em Chrome, Safari, Firefox e Edge atuais.

## Estrutura

```
index.html                       o app inteiro
DojoArandu v2.32p.html           a mesma coisa, com o nome da versão
sw.js                            service worker (offline e atalho)
manifest.webmanifest             nome, ícone e cor do atalho
README.md                        esta apresentação
COMO-PUBLICAR.md                 passo a passo de publicação
assets/
  icon-192.png                   ícone 192×192
  icon-512.png                   ícone 512×512
  icon-maskable-512.png          ícone adaptativo (Android)
  apple-touch-icon.png           ícone do iPhone
  print-desktop.jpg              print usado neste README
  print-celular.jpg              print usado neste README
```

---

**Criador:** Steven Primeiro
**Versão:** 2.32 · novembro de 2026

*Disciplina · Respeito · Evolução*
