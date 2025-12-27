<div align="center">

# 💸 Reimbify

### Sistema Inteligente de Solicitação de Reembolsos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=for-the-badge)

<br>

*Um projeto pratico de aplicação web moderna para gerenciamento de solicitações de reembolso corporativo, com interface futurista e animações fluidas para consolidar conhecimentos dos estudos.*

<br>

[🎬 Ver Demo](#-demo) • [✨ Funcionalidades](#-funcionalidades) • [🚀 Tecnologias](#-tecnologias) • [🔧 Instalação](#-instalação)

</div>

---

## 📋 Índice

- [💡 Sobre o Projeto](#-sobre-o-projeto)
- [🎬 Demo](#-demo)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias](#-tecnologias)
- [🧠 Conceitos Aplicados](#-conceitos-aplicados)
- [🎯 Destaques Técnicos](#-destaques-técnicos)
- [📱 Responsividade](#-responsividade)
- [🎨 Design System](#-design-system)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Instalação](#-instalação)
- [📖 Como Usar](#-como-usar)
- [🗺️ Roadmap](#️-roadmap)
- [🎓 Aprendizados](#-aprendizados)
- [🤝 Contribuições](#-contribuições)
- [👨‍💻 Autor](#-autor)

---

## 💡 Sobre o Projeto

O **Reimbify** é um projeto pratico de aplicação web que simula um sistema de solicitação e gerenciamento de reembolsos corporativos. O projeto foi desenvolvido com foco em práticas modernas de desenvolvimento front-end, explorando técnicas avançadas de CSS e JavaScript vanilla.

### O que este projeto demonstra:

- 🎨 **Design System completo** — Arquitetura CSS modular com tokens de design (cores, espaçamentos, tipografia)
- ⚡ **Animações performáticas** — Loading screen com SVG animado, efeitos de circuito e transições suaves
- 🧩 **Componentes reutilizáveis** — Custom select, modais, badges e botões sem dependências externas
- 📐 **Layout responsivo** — Abordagem mobile-first com CSS Grid, Flexbox e fluid typography

---

### Preview da Interface

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────────┐  ┌──────────────────────────────────┐ │
│  │    REIMBIFY      │  │         TRANSAÇÕES               │ │
│  │                  │  │  ┌────────────────────────────┐  │ │
│  │  Valor (BRL)     │  │  │ Recentes │ Arquivados ││  ││  │ │ 
│  │  ┌────────────┐  │  │  └────────────────────────────┘  │ │
│  │  │ R$ 0,00    │  │  │                                  │ │
│  │  └────────────┘  │  │  ┌────────────────────────────┐  │ │
│  │                  │  │  │ Almoço reunião  │ R$ 89,90 │  │ │
│  │  Categoria       │  │  │ 27/12/2025      │ Pendente │  │ │
│  │  ┌────────────┐  │  │  └────────────────────────────┘  │ │
│  │  │ Selecione  │  │  │                                  │ │
│  │  └────────────┘  │  │  ┌────────────────────────────┐  │ │
│  │                  │  │  │ Uber aeroporto  │ R$ 45,00 │  │ │
│  │  Descrição       │  │  │ 26/12/2025      │ Pendente │  │ │
│  │  ┌────────────┐  │  │  └────────────────────────────┘  │ │
│  │  │            │  │  │                                  │ │
│  │  └────────────┘  │  │  [ Carregar mais ]               │ │
│  │                  │  │                                  │ │
│  │ [Solicitar Aprov]│  │                                  │ │
│  └──────────────────┘  └──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## ✨ Funcionalidades

### Core Features

| Feature | Descrição |
|---------|-----------|
| ✅ **Formulário de Reembolso** | Cadastro de solicitações com valor, categoria e descrição |
| ✅ **Máscara de Moeda** | Formatação automática em Real brasileiro (R$ 1.234,56) |
| ✅ **Custom Select** | Dropdown estilizado sem biblioteca externa |
| ✅ **Lista de Transações** | Visualização de todas as solicitações cadastradas |
| ✅ **Sistema de Abas** | Filtro entre transações recentes e arquivadas |
| ✅ **Modo Exclusão** | Seleção visual com animação para deletar itens |
| ✅ **Arquivamento em Lote** | Arquivar múltiplas transações de uma vez |
| ✅ **Loading Animado** | Tela de carregamento com circuitos SVG |

### Validações e UX

| Feature | Descrição |
|---------|-----------|
| 🛡️ **Campos obrigatórios** | Modal de aviso quando campos estão vazios |
| 🛡️ **Limite de solicitações** | Máximo de 5 itens na aba "Recentes" |
| 🛡️ **Confirmação de exclusão** | Modal de confirmação antes de deletar |
| 🛡️ **Bloqueio de arquivamento** | Só arquiva quando há 5 itens recentes |
| 🎭 **Feedback visual** | Estados hover, focus e active em todos elementos |
| 🎭 **Animação de tremor** | Cards "tremem" no modo exclusão |

---

## 🚀 Tecnologias

### Frontend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 5 | Estrutura semântica |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Estilização modular |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | Lógica e interatividade |

### Ferramentas

| Ferramenta | Uso |
|------------|-----|
| Google Fonts | Inter + JetBrains Mono |
| CSS Custom Properties | Design tokens |
| SVG Inline | Ícones e animações |

---

## 🧠 Conceitos Aplicados

### JavaScript

- ✅ DOM Manipulation (querySelector, createElement, classList)
- ✅ Event Delegation no container de transações
- ✅ Event Listeners (click, input, submit)
- ✅ IIFE (Immediately Invoked Function Expression)
- ✅ Template Literals para HTML dinâmico
- ✅ Intl.NumberFormat para formatação de moeda
- ✅ Array Methods (forEach, filter, map)
- ✅ Closures no sistema de loading

### CSS

- ✅ CSS Custom Properties (variáveis)
- ✅ CSS Grid + Flexbox combinados
- ✅ Fluid Typography com clamp()
- ✅ Pseudo-elementos (::before, ::after)
- ✅ Pseudo-classes (:has(), :focus-within, :nth-child)
- ✅ Keyframe Animations
- ✅ CSS @import para modularização
- ✅ Media Queries + prefers-reduced-motion

### Arquitetura

- ✅ Arquitetura CSS modular (11 arquivos)
- ✅ Metodologia BEM para nomenclatura
- ✅ Design tokens centralizados
- ✅ Separação de responsabilidades (estrutura/estilo/comportamento)
- ✅ Progressive Enhancement

---

## 🎯 Destaques Técnicos

### 1. Máscara de Moeda Brasileira

```javascript
// script.js - Formatação automática de valores em Real
amountInput.addEventListener("input", function (ev) {
  // Remove tudo que não é dígito
  const value = ev.target.value.replace(/\D/g, "");

  // Se vazio, limpa o campo
  if (value === "") {
    ev.target.value = "";
    return;
  }

  // Converte centavos para reais (divide por 100)
  const numberValue = Number(value) / 100;

  // Formata usando a API nativa do JavaScript
  ev.target.value = numberValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});
```

**Por que essa abordagem?**
- Usa a API `toLocaleString` nativa, sem bibliotecas externas
- O truque de dividir por 100 permite digitar centavos naturalmente
- Remove caracteres não-numéricos para evitar inputs inválidos

---

### 2. Custom Select com details/summary

```html
<!-- index.html - Select customizado sem JavaScript para abertura -->
<details class="select" aria-label="Categoria">
  <summary class="select__trigger">
    <span class="select__value">
      <span class="select__value-placeholder">Selecione...</span>
      <span class="select__value-item" data-value="Alimentação">Alimentação</span>
      <!-- ... outros valores ... -->
    </span>
    <span class="select__chevron" aria-hidden="true"></span>
  </summary>

  <div class="select__panel" role="listbox">
    <label class="select__option">
      <input class="select__radio" type="radio" name="category" value="Alimentação" />
      <span>Alimentação</span>
    </label>
    <!-- ... outras opções ... -->
  </div>
</details>
```

```css
/* form.css - Exibição condicional do valor selecionado */
.select:has(.select__radio[value="Alimentação"]:checked)
  .select__value-item[data-value="Alimentação"] {
  display: inline;
}

.select:has(.select__radio:not([value=""]):checked)
  .select__value-placeholder {
  display: none;
}
```

**Como funciona?**
- O elemento `<details>` fornece o comportamento de abrir/fechar nativamente
- Radio buttons dentro controlam a seleção
- O seletor `:has()` do CSS detecta qual radio está checked
- Exibe dinamicamente o `span` correspondente ao valor selecionado

---

### 3. Sistema de Loading com Progress Animado

```javascript
// script.js - Loading screen com easing e progress bar
(function () {
  const LOADING_DURATION = 1500;

  // Função de easing para suavizar a animação
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function startLoading() {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      // Aplica easing no progresso (começa rápido, desacelera no final)
      const progress = easeOutQuad(Math.min(elapsed / LOADING_DURATION, 1)) * 100;

      updateProgress(progress);

      if (elapsed >= LOADING_DURATION) {
        clearInterval(interval);
        updateProgress(100);
        
        // Delay para mostrar 100% antes de esconder
        setTimeout(() => {
          loadingOverlay.classList.add("hidden");
        }, 300);
      }
    }, 50);
  }

  // Executa assim que o DOM estiver pronto
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startLoading);
  } else {
    startLoading();
  }
})();
```

**Vantagens dessa implementação:**
- IIFE encapsula variáveis, evitando poluição do escopo global
- Easing `easeOutQuad` cria sensação de progresso natural
- Verifica `readyState` para garantir execução no momento certo

---

### 4. Animações de Circuito com SVG

```css
/* background.css - Linhas animadas que "fluem" pelos circuitos */
.bg__line {
  stroke: url(#bg-line);
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
  filter: url(#bg-glow);

  /* Define o comprimento do tracejado igual ao caminho total */
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  opacity: 0;

  animation: bg-flow 10s ease-in-out infinite;
}

@keyframes bg-flow {
  0% {
    stroke-dashoffset: 320;   /* Linha "escondida" */
    opacity: 0;
  }
  12% {
    opacity: 0.9;              /* Fade in */
  }
  55% {
    opacity: 0.9;              /* Mantém visível */
  }
  100% {
    stroke-dashoffset: -320;  /* Linha "percorreu" o caminho */
    opacity: 0;                /* Fade out */
  }
}

/* Delays para criar efeito de ondas */
.bg__line--a { animation-delay: 0s; }
.bg__line--b { animation-delay: 2.2s; }
.bg__line--c { animation-delay: 1.2s; }
.bg__line--d { animation-delay: 3.4s; }
```

**Por que stroke-dasharray/dashoffset?**
- Técnica clássica para "desenhar" SVG progressivamente
- `dasharray` define o padrão de traços
- `dashoffset` desloca o início do traço
- Animando o offset, a linha parece "viajar" pelo caminho

---

### 5. Modo Exclusão com Feedback Visual

```css
/* transactions.css - Animações do modo "lixeira" */
@keyframes smooth-shake {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(0.5deg); }
  50%  { transform: rotate(0deg); }
  75%  { transform: rotate(-0.5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes red-energy {
  0%   { 
    border-color: rgba(239, 68, 68, 0.2);
    box-shadow: 0 0 0 rgba(239, 68, 68, 0);
  }
  50%  { 
    border-color: rgba(239, 68, 68, 0.8);
    box-shadow: 0 0 8px rgba(239, 68, 68, 0.2);
  }
  100% { 
    border-color: rgba(239, 68, 68, 0.2);
    box-shadow: 0 0 0 rgba(239, 68, 68, 0);
  }
}

.tx-list.mode-delete .tx-list__item {
  cursor: pointer;
  /* Combina as duas animações */
  animation: 
    smooth-shake 0.4s infinite ease-in-out,
    red-energy 2s infinite ease-in-out;
}

/* Pausa animação no hover para indicar seleção */
.tx-list.mode-delete .tx-list__item:hover {
  animation-play-state: paused;
  transform: scale(0.98);
  background-color: rgba(239, 68, 68, 0.05);
}
```

**Decisões de design:**
- Tremor sutil (0.5deg) não cansa a vista
- "Energia vermelha" pulsa lentamente (2s) para não distrair
- Hover pausa tudo e dá feedback de "pronto para deletar"
- `animation-play-state: paused` é mais performático que remover animações

---

### 6. Event Delegation para Performance

```javascript
// script.js - Um único listener para todos os cards
transactionList.addEventListener("click", function (ev) {
  // Ignora cliques se não está no modo delete
  if (!isDeleteMode) return;

  // Encontra o card mais próximo (bubbling)
  const card = ev.target.closest(".tx-list__item");
  if (!card) return;

  // Armazena referência para exclusão
  itemToDelete = card;

  // Abre modal de confirmação
  modalOverlay.classList.remove("hidden");
});
```

**Por que Event Delegation?**
- Um único listener ao invés de um para cada card
- Funciona automaticamente para cards adicionados dinamicamente
- Melhor performance com muitos elementos
- `closest()` garante que cliques em elementos filhos também funcionem

---

## 📱 Responsividade

### Breakpoints

```css
/* Tablet - Layout em duas colunas */
@media (min-width: 47.9375rem) {  /* ~767px */
  .app-shell {
    grid-template-columns: minmax(18rem, 40%) 1fr;
    align-items: start;
  }
}

/* Desktop - Grid de transações expandido */
@media (min-width: 60rem) {  /* 960px */
  .tx-row {
    grid-template-columns: var(--tx-cols);
    grid-template-areas: none;
  }
  
  .tx__head {
    display: grid;
  }
}
```

### Fluid Typography com clamp()

```css
/* global.css - Tipografia fluida */
:root {
  /* Mínimo | Preferido (viewport) | Máximo */
  --fs-100: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);   /* 12px → 14px */
  --fs-200: clamp(0.875rem, 0.82rem + 0.25vw, 1rem);    /* 14px → 16px */
  --fs-300: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);     /* 16px → 18px */
  --fs-400: clamp(1.125rem, 1rem + 0.6vw, 1.5rem);      /* 18px → 24px */
  --fs-500: clamp(1.25rem, 1.1rem + 1vw, 2rem);         /* 20px → 32px */
}
```

**Abordagem Mobile-First:**
- Estilos base são para mobile
- Media queries adicionam complexidade conforme a tela cresce
- `clamp()` elimina a necessidade de múltiplos breakpoints para tipografia

---

## 🎨 Design System

### Paleta de Cores

```css
:root {
  /* Backgrounds */
  --color-bg: #030303;
  --color-surface: rgba(10, 10, 10, 0.9);
  --color-surface-2: rgba(255, 255, 255, 0.02);
  --color-surface-solid: #0a0a0a;

  /* Textos */
  --color-text: rgba(229, 231, 235, 0.92);
  --color-muted: rgba(156, 163, 175, 0.82);

  /* Bordas */
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.12);

  /* Accent (Verde Esmeralda) */
  --color-brand: rgb(52, 211, 153);           /* #34d399 */
  --color-brand-weak: rgba(52, 211, 153, 0.16);

  /* Danger (Vermelho) */
  --color-danger: rgb(248, 113, 113);         /* #f87171 */
  --color-danger-weak: rgba(248, 113, 113, 0.14);
}
```

### Tokens de Design

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | `clamp(0.5rem, 0.4rem + 0.4vw, 0.75rem)` | Gaps pequenos |
| `--space-2` | `clamp(0.75rem, 0.6rem + 0.6vw, 1rem)` | Padding interno |
| `--space-3` | `clamp(1rem, 0.8rem + 0.9vw, 1.5rem)` | Padding de seções |
| `--space-4` | `clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem)` | Gaps grandes |
| `--radius-1` | `clamp(0.75rem, 0.65rem + 0.4vw, 1rem)` | Botões, inputs |
| `--radius-2` | `clamp(1.25rem, 1rem + 1vw, 2rem)` | Cards, painéis |
| `--shadow-1` | `0 1rem 2.5rem rgba(0, 0, 0, 0.45)` | Elevação de cards |

### Efeitos Especiais

**Glassmorphism nos Painéis:**
```css
.panel {
  background: var(--color-surface-2);           /* Fundo semi-transparente */
  backdrop-filter: blur(0.6rem);                /* Blur do que está atrás */
  border: 1px solid var(--color-border);        /* Borda sutil */
}
```

**Gradiente de Texto Animado:**
```css
.panel__title {
  background-image: linear-gradient(
    90deg,
    rgba(229, 231, 235, 0.92) 0%,
    rgba(52, 211, 153, 0.92) 48%,
    rgba(229, 231, 235, 0.92) 100%
  );
  background-size: 260% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: title-sheen 8s ease-in-out infinite;
}
```

---

## 📁 Estrutura do Projeto

```
📦 reimbify/
├── 📄 index.html           # Estrutura HTML principal
├── 📄 script.js            # Lógica JavaScript
├── 📄 README.md            # Documentação
│
└── 🎨 styles/
    ├── 📄 index.css        # Entry point (imports)
    ├── 📄 global.css       # Reset + tokens + utilitários
    ├── 📄 app.css          # Layout principal
    ├── 📄 background.css   # Circuitos animados
    ├── 📄 panel.css        # Componente de painel
    ├── 📄 form.css         # Campos e select customizado
    ├── 📄 transactions.css # Lista e cards de transações
    ├── 📄 modal.css        # Overlay e conteúdo do modal
    ├── 📄 button.css       # Variantes de botão
    ├── 📄 badge.css        # Status badges
    └── 📄 loading.css      # Tela de carregamento
```

**Por que CSS modular?**
- Cada arquivo tem responsabilidade única
- Facilita manutenção e debugging
- Possibilita reutilização em outros projetos
- `@import` no `index.css` centraliza a ordem de carregamento

---

## 🔧 Instalação

### Pré-requisitos

- Navegador moderno (Chrome 105+, Firefox 121+, Safari 15.4+)
- Editor de código (VS Code recomendado)
- Extensão Live Server (opcional, para desenvolvimento)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/juninalmeida/reimbify.git
```

2. **Entre na pasta do projeto**
```bash
cd reimbify
```

3. **Abra no navegador**
```bash
# Com Live Server (VS Code)
# Clique direito no index.html → "Open with Live Server"

# Ou simplesmente abra o arquivo
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```
---

## 📖 Como Usar

### 1. Criar uma Solicitação

1. Preencha o campo **Valor** (formatação automática em R$)
2. Selecione uma **Categoria** no dropdown
3. Descreva a despesa no campo **Descrição**
4. Clique em **"Solicitar Aprovação"**

### 2. Gerenciar Transações

- **Visualizar:** As transações aparecem na lista à direita
- **Filtrar:** Use as abas "Recentes" e "Arquivados"
- **Arquivar:** Complete 5 solicitações e clique no ícone 📦

### 3. Excluir Transações

1. Clique no ícone de **lixeira** 🗑️
2. Os cards começam a "tremer" (modo exclusão ativo)
3. Clique no card que deseja excluir
4. Confirme no modal

---

## 🎓 Aprendizados

### CSS Avançado
- Criar componentes complexos (select, modal) sem JavaScript
- Usar `:has()` para estado dependente de filhos
- Animações SVG com stroke-dasharray
- Fluid design com `clamp()`

### JavaScript
- Event delegation para listas dinâmicas
- Formatação de moeda com `Intl.NumberFormat`
- IIFE para encapsulamento
- Manipulação de classes para estados

### Arquitetura
- Organização modular de CSS
- Metodologia BEM na prática
- Design tokens para consistência
- Progressive enhancement

---

## 🤝 Contribuições

Contribuições são bem-vindas! Siga os passos:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature
```bash
git checkout -b feature/MinhaFeature
```
3. **Commit** suas mudanças
```bash
git commit -m "feat: adiciona MinhaFeature"
```
4. **Push** para a branch
```bash
git push origin feature/MinhaFeature
```
5. Abra um **Pull Request**

---

## 👨‍💻 Autor

<div align="center">

<img src="https://github.com/juninalmeida.png" width="120" style="border-radius: 50%;" alt="Horacio Junior"/>

**Horacio Junior**

*Desenvolvedor FullStack em formação*

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/júnior-almeida-3563a934b/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/juninalmeida)
[![Email](https://img.shields.io/badge/-Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:junioralmeidati2023@gmail.com)

</div>

---

<div align="center">


Feito por [Horacio Junior](https://github.com/juninalmeida)

</div>