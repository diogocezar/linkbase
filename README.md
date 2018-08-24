# Link Base

Este é um projeto desenvolvido em conjunto com a turma 2018/2 da disciplina Programção Web 1 da UTFPR.

---

Vamos descrever as principais funcionalidades do sistema para armazenamento de links!

1. Cadastrar um Link
    * Regra: Cadastrar somente se não existe um link;
    * Descrição;
    * Categoria;
    * Link;
    * Título;

2. Gerenciar um Link
    * Alterar Descrição;
    * Alterar Categoria;
    * Alterar Link;
    * Altera  Título;

3. Excluir Link

4. Buscar por Links:
    Buscar por nome, categoria ou título;

## Páginas

- Página Principal;
    - Busca;
    - Lista dos Links;
        Ediar ou Excluir;
    - Menu;
        - Cadastro Novo;
- Página para Form (Cadastro/Edição);

## Referências

- Google
- Página Inicial
- Lista de Links

## Paleta de Cores

https://coolors.co/1e2749-669bbc-a3d9ff-a5b8d3-bfd7ea

## Icones

https://www.flaticon.com/search?word=edit&style_id=11

## Ferramentas Utilizadas

1. Adobe XD;
    - https://www.adobe.com/br/products/xd.html
2. Visual Studio Code;
    - Plugins:
        * Auto Close Tag;
        * Color Picker;
        * CSS Peek;
        * Debugger for Chrome;
        * EditorConfig for VS Code;
        * File Utils;
        * Guides;
        * HTML Boilerplate;
        * HTML CSS Support;
        * HTML Snippets;
        * Image preview;
        * Indenticator;
        * InteliSense for CSS class names in HTML;
        * LaTeX language support;
        * latex-formatter;
        * Matherial Icon Theme;
        * Matherial Theme;
        * Path Intellisense;
        * PHP IntelliSense;
        * Portuguese (Brazil) Language Pack for Visual Studio Code;
        * Reactjs code snipets;
        * Sass;
        * Settings Sync;
        * Terminal Here;
        * View In Browser;
3. Terminal;
    * git e GitHub configurados;
    * NodeJS e NPM instalados;

# Design

- Primeiro Passo: Criar uma Estrutura para marcação dos elementos;
- Segundo Passo: Criar o Layout propriamente Dito;

# Estrutura

## Configuração inicial

* Criar um .editorconfig;
    ```
    root = true
    [*]
    end_of_line = lf
    insert_final_newline = false
    indent_style = tab
    tab_width = 4
    charset = utf-8
    trim_trailing_whitespace = true
    ```
* Criar uma pasta de assets:
    * css
    * images
    * fonts
* Criar um favicon;
    ```
    <!-- Canonical -->
    <link rel="canonical" href="https://diogocezar.github.io/linkbase"/>
    <link rel="shortcut icon" href="assets/images/favicon.png">
    ```
* Criar uma og-image;
* Criar as meta-tags:
    * keywords;
    * viewport;
    * description;
    * robots;
    * og;
    * twitter;
    * Google+;
    ```
    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta name="keywords"            content=""/>
    <meta name="viewport"            content="width=device-width, initial-scale=1, user-scalable=no"/>
    <meta name="description"         content=""/>
    <meta name="robots"              content="index,follow"/>
    <!-- OG -->
    <meta property="og:url"          content="https://diogocezar.github.io/linkbase"/>
    <meta property="og:title"        content=""/>
    <meta property="og:site_name"    content=""/>
    <meta property="og:description"  content="" />
    <meta property="og:image"        content="https://diogocezar.github.io/linkbase/assets/images/linkbase.jpg" />
    <meta property="og:type"         content="website" />
    <!-- Twitter -->
    <meta name="twitter:card"        content="summary_large_image"/>
    <meta name="twitter:site"        content="https://diogocezar.github.io/linkbase"/>
    <meta name="twitter:title"       content=""/>
    <meta name="twitter:url"         content="https://diogocezar.github.io/linkbase"/>
    <meta name="twitter:image"       content="https://diogocezar.github.io/linkbase/assets/images/linkbase.jpg"/>
    <meta name="twitter:description" content="This is a little project to show combined HTML, CSS and JavaScript projects"/>
    <!-- Google + -->
    <meta itemprop="name"            content=""/>
    <meta itemprop="description"     content="This is a little project to show combined HTML, CSS and JavaScript projects"/>
    ```
* Conceitos de Variáveis nativas no CSS;
    * https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_variables
* Criar estrutura de componentes CSS:
    * /css/components/includes/reset.css
        * https://necolas.github.io/normalize.css/8.0.0/normalize.css
    * /css/components/includes/colors.css
    * /css/components/includes/fonts.css
        * https://fonts.google.com/?query=montse&selection.family=Montserrat
        * ``` @import url('https://fonts.googleapis.com/css?family=Montserrat'); ```
    * /css/components/components/nav.css
    * /css/components/components/list.css
    * /css/components/components/button-list.css
    * /css/components/components/form.css
    * /css/components/components/button-form.css
    * /css/components/components/title.css
    * /css/components/components/logo.css
    * /css/components/components/sub-title.css
    * /css/components/components/search.css
    * /css/components/components/filter.css
    * /css/components/components/footer.css
    * /css/components/pages/index.css
    * /css/components/pages/register.css
* Criar a página index.html;
    * Importar CSS's;
    * Criar a estrutura HTML;
* Criar a página register.html;
    * Importar CSS's;
    * Criar a estrutura HTML;
* Utilizar o npm para criar um package;
* Publicar Página no GitHub pages;