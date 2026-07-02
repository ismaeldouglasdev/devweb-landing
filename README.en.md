<p align="center">
  <a href="README.md">🇧🇷 Português</a> &nbsp;|&nbsp; <strong>🇺🇸 English</strong>
</p>

# LançaProduto

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</p>

Interactive landing page for product registration and display, developed as an academic project for the Web Development course.

---

## Overview

LançaProduto lets users register products by entering name, description, price, and category, with immediate data visualization in a table. All processing is client-side, with no external dependencies or build tools.

## Features

- **Form with validation** — Required fields, specific types (text, number, select), and placeholders to ensure data integrity
- **Category organization** — Classified into 6 categories (Electronics, Clothing, Home, Sports, Books, Others)
- **Real-time preview** — Display registered data in a table after submit, with confirmation status highlight
- **Theme system** — 4 color variations based on Catppuccin (Mocha, Latte, Frappé) and Solarized palettes, toggled via JavaScript with CSS variables
- **Responsive design** — Adaptable layout for different screen sizes

## Themes

The theme system uses CSS variables to switch between four color schemes without reloading:

| Theme | Profile |
|-------|---------|
| Mocha | Dark (default) |
| Latte | Light |
| Frappé | Blueish |
| Solarized | Amber |

## Project Structure

```
devweb-landing/
├── index.html    # Semantic page structure
├── style.css     # Styles and theme definitions
└── script.js     # Form logic and theme switching
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ismaeldouglasdev/devweb-landing.git
   ```
2. Open `index.html` in any modern browser.

> No build tool or package manager needed — 100% client-side.

## Academic Context

Project developed for the **Web Development** course in the **Systems Analysis and Development** program, applying semantic HTML, modern CSS (variables, Flexbox), and JavaScript for DOM manipulation and form validation.

---

Built by [Ismael Douglas](https://github.com/ismaeldouglasdev).
