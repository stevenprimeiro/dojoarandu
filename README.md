# Arandu · Sistema do Dojo

**Gestão do dia a dia de uma academia de jiu-jitsu** — alunos, chamada, mensalidades e treinos, em um único arquivo HTML que roda no navegador, no celular ou no computador, **sem servidor e sem nuvem**.

Criado por **Steven Primeiro** · versão **2.50**

---

## O que ele faz

| Recurso | O que faz |
|---|---|
| **Alunos** | Ficha completa: faixa e graus, idade, turma (Adulto/Kids), localidade, telefone e responsável. Busca por nome, telefone ou faixa. |
| **Frequência** | Chamada por turma, presença por dia, visitantes e sequência de treinos do dojo. |
| **Treinos** | Planejamento com mapa mental de posições do jiu-jitsu — da guarda à finalização, ligadas como um grafo que cresce da esquerda para a direita. |
| **Financeiro** | Mensalidades mês a mês, extrato por aluno, despesas por categoria, recebido × em aberto, atrasados. |
| **Cobrança** | Texto de cobrança pronto para o WhatsApp, com Pix, emoji escolhido por você e envio em um toque. |
| **Celular** | Atalho na tela inicial (PWA), funciona offline e a barra de topo fica visível por padrão — toque duas vezes na tela para escondê-la ou mostrá-la. |
| **Segurança** | Entrada pelo login do professor (nome + senha), sem PIN separado. |
| **Vários professores** | Base compartilhada opcional no Supabase: uma conta por pessoa, o que um marca aparece nos outros. Veja `SUPABASE.md`. |

## Como abrir

**No computador:** baixe o `index.html` e dê dois cliques — abre no navegador, sem instalar nada.

**No celular (recomendado):** abra o endereço publicado, use **Ajustes → Celular → Criar atalho** e o app fica na tela inicial, em tela cheia e com funcionamento offline.

> **Modo equipe (opcional):** por padrão a base fica no aparelho. Para usar a mesma
> base com os professores, conecte um banco compartilhado — passo a passo em `SUPABASE.md`.
> Sem essa configuração, o app continua 100% local, como sempre foi.

> O atalho só funciona quando o app está publicado num endereço web (`https://…`). Aberto direto do arquivo (`file://`), o navegador não libera a instalação — o próprio app avisa isso.

## Dados: onde ficam

- Tudo é gravado **no próprio aparelho** (`localStorage` do navegador). Nada de alunos, telefones ou mensalidades sai daqui — não existe login, servidor ou sincronização.
- O `index.html` publicado **não contém dados reais**: abre com uma base de exemplo ("Aluno Exemplo"), para qualquer pessoa que acesse o link ver um sistema vazio.
- **Faça backup**: Ajustes → Dados → *Baixar backup* gera um `.json`. Limpar os dados do navegador apaga tudo.
- O backup tem dados reais — guarde como guardaria um caderno de matrículas, nunca em link público.

## Ajustes que valem conhecer

- **Aparência** — tema escuro/claro/sistema, 8 padrões de cor (incluindo *Vermelho tatame* e *Verde musgo*) e densidade da lista de alunos.
- **Celular** — posição do botão flutuante, esconder a barra ao rolar (duplo toque na tela) e criar atalho.
- **Nuvem online/offline** — em Ajustes → Desenvolvedor você pode desligar a nuvem para ficar só neste aparelho. Ao ligar de novo, escolhe se a base deste celular ou a da nuvem vale como principal.
- **Visitante** — na tela de entrada, toque "Entrar como visitante" para explorar a base de demonstração sem fazer login.
- **Segurança** — login por nome do professor (Steven, Nicholas, Anderson) com senha; a base do dojo só abre para quem entrou.
- As seções abrem ao toque no título e se recolhem no toque seguinte.

## Tecnologia

HTML, CSS e JavaScript puros — sem bibliotecas, sem build, sem dependências. Um arquivo para a interface, um `sw.js` para o modo offline e um manifest com ícones para o atalho. Funciona em Chrome, Safari, Firefox e Edge atuais.

## Estrutura

```
index.html                       o app inteiro
DojoArandu v2.53p.html           a mesma coisa, com o nome da versão
sw.js                            service worker (offline e atalho)
manifest.webmanifest             nome, ícone e cor do atalho
README.md                        esta apresentação
README.txt                       esta apresentação em texto puro
assets/
  icon-192.png                   ícone 192×192
  icon-512.png                   ícone 512×512
  icon-maskable-512.png          ícone adaptativo (Android)
  apple-touch-icon.png           ícone do iPhone
```

---

**Criador:** Steven Primeiro
**Versão:** 2.53 · novembro de 2026

*Disciplina · Respeito · Evolução*
