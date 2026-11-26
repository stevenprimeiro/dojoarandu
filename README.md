# Arandu · Sistema do Dojo

**Gestão do dia a dia de uma academia de jiu-jitsu** — alunos, chamada, mensalidades e treinos, em um único arquivo HTML que roda no navegador, no celular ou no computador, **sem servidor e sem nuvem**.

Criado por **Steven Primeiro** · versão **2.53** · novembro de 2026

---

## O que ele faz

| Recurso | O que faz |
|---|---|
| **Alunos** | Ficha completa: faixa e graus, idade, turma (Adulto/Kids), localidade, telefone e responsável. Busca por nome, telefone ou faixa. |
| **Frequência** | Chamada por turma, presença por dia, visitantes e histórico de presenças. |
| **Treinos** | Planejamento com mapa mental de posições do jiu-jitsu — da guarda à finalização, ligadas como um grafo visual. |
| **Financeiro** | Mensalidades mês a mês, extrato por aluno, despesas por categoria, recebido × em aberto, atrasados e relatórios dos últimos 12 meses. |
| **Cobrança** | Texto de cobrança pronto para o WhatsApp, com Pix, emoji escolhido por você e envio em um toque. |
| **Celular** | Atalho na tela inicial (PWA), funciona offline e a barra de topo pode ser escondida ao rolar. |
| **Segurança** | Entrada pelo login do professor (nome + senha). Sem PIN separado. |
| **Vários professores** | Base compartilhada opcional no Supabase: uma conta por pessoa, o que um marca aparece nos outros. Veja `SUPABASE.md`. |

---

## Sistema de Bolsas

O Arandu tem suporte a **alunos bolsistas**, isentos de mensalidade:

- Na ficha do aluno (Ajustes → Alunos → editar aluno), marque **Bolsista: Sim** para isentar o aluno da mensalidade.
- Alunos bolsistas **não geram vencimentos** no financeiro — não aparecem como pendentes ou atrasados.
- Eles contam como uma **nova categoria** na listagem de alunos (filtro "Bolsistas") e aparecem no resumo dos relatórios financeiros.
- No financeiro, um KPI dedicado mostra quantos alunos são bolsistas e isentos de mensalidade.

---

## Como abrir

### No computador
Baixe o `index.html` e dê dois cliques — abre no navegador, sem instalar nada.

### No celular (recomendado)
Abra o endereço publicado, use **Ajustes → Celular → Criar atalho** e o app fica na tela inicial, em tela cheia e com funcionamento offline.

> **Importante:** o atalho na tela inicial só funciona quando o app está publicado num endereço web (`https://…`). Aberto direto do arquivo (`file://`), o navegador não libera a instalação.

> **Sem dados reais nesta versão publicada:** o `index.html` não contém dados de alunos reais. Ele abre com uma base de exemplo ("Aluno Exemplo"), para qualquer pessoa que acesse o link ver um sistema vazio. Se quiser usar com seus próprios dados, use o arquivo `dojo_arandu_v2-53.html` completo (com sua base real) no seu próprio aparelho.

---

## Dados: onde ficam

- Tudo é gravado **no próprio aparelho** (`localStorage` do navegador). Nada de alunos, telefones ou mensalidades sai daqui.
- Este arquivo publicado **não contém dados reais**: abre com uma base de exemplo.
- **Faça backup**: Ajustes → Dados → *Baixar backup* gera um `.json`. Limpar os dados do navegador apaga tudo.
- O backup tem dados reais — guarde como guardaria um caderno de matrículas, nunca em link público.

---

## Ajustes que valem conhecer

### Aparência
- Tema escuro, claro ou sistema (segue o celular/computador).
- **5 padrões de cor:** Vermelho Sangue, Verde Veneno, Violeta Fantasma, Cinza Sombrio e Azul Profundo.
- Densidade da lista de alunos (faixa compacta mostra só a barra colorida + graus).

### Celular
- Esconder a barra ao rolar: ative em Ajustes → Aparência → "Esconder a barra ao rolar".
- Posição do botão flutuante e criar atalho na tela inicial.

### Nuvem (opcional)
- Em Ajustes → Desenvolvedor você pode ligar/desligar a nuvem. Ao ligar de novo, escolhe se a base deste celular ou a da nuvem vale como principal.

### Segurança
- Login por nome do professor com senha. A base do dojo só abre para quem entrou.

---

## Tecnologia

HTML, CSS e JavaScript puros — sem bibliotecas, sem build, sem dependências. Um arquivo para a interface, um `sw.js` para o modo offline e um manifest com ícones para o atalho. Funciona em Chrome, Safari, Firefox e Edge atuais.

---

## Estrutura de arquivos

```
index.html              o app inteiro (versão pública, sem dados reais)
DojoArandu v2.56p.html  a mesma coisa, com o nome da versão
sw.js                   service worker (offline e atalho)
manifest.webmanifest    nome, ícone e cor do atalho
README.md               esta apresentação
README.txt              esta apresentação em texto puro
assets/
  icon-192.png          ícone 192×192
  icon-512.png          ícone 512×512
  icon-maskable-512.png ícone adaptativo (Android)
  apple-touch-icon.png  ícone do iPhone
```

---

**Criador:** Steven Primeiro  
**Versão:** 2.56 · novembro de 2026  

*Disciplina · Respeito · Evolução*
