# LançaProduto

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</p>

Landing page interativa para cadastro e apresentação de produtos, desenvolvida como trabalho acadêmico para a disciplina de Desenvolvimento Web.

---

## Visão Geral

O LançaProduto permite que usuários cadastrem produtos informando nome, descrição, preço e categoria, com visualização imediata dos dados em formato de tabela. Todo o processamento é feito no lado do cliente, sem dependências externas ou build tooling.

## Funcionalidades

- **Formulário com validação** — Campos obrigatórios, tipos específicos (texto, número, select) e placeholders para garantir integridade dos dados inseridos
- **Organização por categorias** — Classificação em 6 categorias (Eletrônicos, Roupas, Casa, Esportes, Livros, Outros)
- **Preview em tempo real** — Exibição dos dados cadastrados em tabela após o submit, com destaque no status de confirmação
- **Sistema de temas** — 4 variações de cores baseadas nas paletas Catppuccin (Mocha, Latte, Frappé) e Solarized, alternadas via JavaScript com variáveis CSS
- **Design responsivo** — Layout adaptável para diferentes tamanhos de tela

## Temas

O sistema de temas utiliza variáveis CSS para alternar entre quatro esquemas de cores sem recarregar a página:

| Tema | Perfil |
|---|---|
| Mocha | Escuro (padrão) |
| Latte | Claro |
| Frappé | Azulado |
| Solarized | Âmbar |

## Estrutura do Projeto

```
devweb-landing/
├── index.html    # Estrutura semântica da página
├── style.css     # Estilos e definição dos temas
└── script.js     # Lógica do formulário e alternância de temas
```

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/ismaeldouglasdev/devweb-landing.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno.

> Nenhum build tool ou gerenciador de pacotes é necessário — o projeto é 100% client-side.

## Contexto Acadêmico

Projeto desenvolvido para a disciplina de **Desenvolvimento Web** do curso de **Análise e Desenvolvimento de Sistemas**, aplicando conceitos de HTML semântico, CSS moderno (variáveis, Flexbox) e JavaScript para manipulação do DOM e validação de formulários.

---

Desenvolvido por [Ismael Douglas](https://github.com/ismaeldouglasdev).
