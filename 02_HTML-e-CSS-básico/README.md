# O que é o HTML?
 
 HTML é a tecnologia fundamental para definir a estrutura de uma página web. Você pode utilizá-lo para identificar o que cada parte do seu website é um texto, link, imagem, formulário, etc

> HTML vem do 'grego' HyperText Markup Language

<br>

# Elementos do HTML

> A linguagem HTML é formada por tags e atributos.

## Tags
 As tags marcam o início de um elemento do HTML e são formados por comandos, escritos entre os sinais "<" (menor que) e ">" (maior que), e devem ser escritas com letra minúscula
(lembrando que isto não é uma convenção, mas sim uma definição da linguagem. Não existem tags **do HTML** com caracteres em maiúsculo). Exemplos:

- Tags Simples 
```html
    <br/>
```

- Tags Fechadas
```html
    <h1> 
        ...
    </h1>
```

- Tags Compostas
```html
    <div> 
        <h1>
            ...
        </h1>
    </div>
```

## Atributos

Os atributos são pedaços adicionais de informações dos elementos do HTML, como:

```html
    <img src="minha-imagem.jpg" alt="Esta imagem eh minha">
```

- Neste caso, `src` e `alt` são atributos da tag `img`.

> Lembrando que a maioria das tags devem ser abertas `<tag>` e fechadas `</tag>` e, no caso de usar mais do que uma tag, elas devem ser fechadas como "pilha" na ordem que foram abertas: `<div><p><h2>Texto</h2></p></div>`


# Estrutura padrão de uma página Web

Estas tags são a estrutura básica de uma página web:

```html
<!DOCTYPE html> //é a identificação para o browser que o documento que está sendo "lido" se trata de um .html
<html> //identificação para o browser que a partir daqui será tudo no mundo do HTML
    <head>
        // é o conteúdo "cabeça" da página, onde vão as tags de título
        // e ícone da página(a parte visível da head) e metadados,  coisas relacionadas
        // a mecanismos de pesquisa, programas, etc(parte que o usuário não vê mas sente). 
    </head>
    <body>
        // é a parte onde tudo que é visível da página é estruturada
        //cabeçalho da página, barras de navegação, cards, etc
    </body>
</html>
```

# Outras tags

##  Dentro da  `<head>`
> Para dentro da head, duas das tags mas importantes são

| Tag  | Uso   |
| ------- | -------- |
| `<title>`  | Título da página (que aparecerá na guia do browser)    |
| `<meta>`  | Onde os metadados da página são guardados (codificação de caracteres, descrição, etc) |

Exemplo de `head`

```html
    <head>
    <title>Minha página web</title>
    <meta charset="UTF-8">
    <meta name="description" content="Aqui você pode inserir uma descrição da página.">.
    <meta name="author" content="Gabriel Nicolodi">
    </header>
```

<hr>

## Dentro do `<body>`
Para o uso na body do documento, onde temos tudo que é visível da página, podemos dividir em tags de:
### Texto

| Tag  | Uso   | Significado| Exemplo|
| ------- | -------- | -------- | -------- |
| `<h1>` ao `<h6>`  | Utilizada para fazer Títulos no documento | Header | <h2>h2</h2><h3>h3</h3>|
| `<b>`  | Deixa o texto dentro das tags em negrito | Bold | <b>Bold</b> |
| `<strong>` | Alternativa ao `<b>`, mais legível | Strong kkkk | <strong>Strong</strong> |
| `<i>`  | Deixa o texto em itálico | Italic | <i>Italic</i> |
| `<em>`  | Deixa em itálico também | Emphasize | <em>Emphasize</em> |
| `<mark>`  | Deixa o texto marcado | Marked Text | <mark>Marked</mark> |
| `<small>`  | Texto pequeno | nem te conto | <small>Small Text</small> |
| `<strike>`  | Derruba todos os pinos do boliche(<strike>frase riscada</strike>) | Strike | <strike>Strike</strike> |
| `<u>`  | Texto sublinhado | Underlined Text | <u>Underlined</u> |
| `<ins>`  | Igual `<u>` | Inserted | <ins>Inserted</ins> |
| `<sub>`  | Texto subscrito | Subscript | S<sub>ubscript</sub> |
| `<sup>`  | Texto superescrito | Superscript | S<sup>uperscript</sup> |

### Link e imagens

| Tag  | Uso   | Significado| Exemplo|
| ------- | -------- | -------- | -------- |
| `<a>`  | Utilizada para links | Anchor | <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NÃO CLIQUE AQUI DE JEITO NENHUM</a>|
| `<img>`  | Utilizado para inserir imagens | Image | <img src="./img/imagem.jpg" width="120px"> |
