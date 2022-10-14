<p align="center"><img src="./img/wordart.png" width="600px"></p>

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
    <img src="minha-imagem.jpg" alt="Esta imagem eh minha" class="imagem" id="minha-imagem">
```

- Neste caso, `src`, `alt`, `class` e `id` (as duas ultimas sendo utilizadas juntamente ao CSS) são atributos da tag `img`, outros atributos do html são `target`, `href`, `background` e `bordercolor`.

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
| `<hr>`  | Insere uma linha horizontal. Muito utilizado para separar conteúdos | Horizontal Row | <hr> |.

### Link e imagens

| Tag  | Uso   | Significado| Exemplo|
| ------- | -------- | -------- | -------- |
| `<a>`  | Utilizada para links | Anchor | <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NÃO CLIQUE AQUI DE JEITO NENHUM</a>|
| `<img>`  | Utilizado para inserir imagens | Image | <p align="center"><img src="./img/imagem.jpg" alt="pedido de socorro" width="120px"> </p>|
| `<video>` | Utilizado para inserir vídeos | hmmm | <a href="https://video.twimg.com/ext_tw_video/1579561426821255183/pu/vid/720x720/d-59uKCjjOsjU_p2.mp4?tag=12"><p align="center"><img src="./img/video.png" width="120px"></p></a><br><sub>Infelizmente a tag de vídeo não funciona em markdown, mas tem exemplo embaixo |

```html
    //Uso da <a>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NÃO CLIQUE AQUI DE JEITO NENHUM</a>
    
    //Uso da <img>
    <img src="./img/imagem.jpg" alt="pedido de socorro" width="120px"> 

    //Uso da <video>
    <video width="320" height="240" controls>
        <source src="./img/video.mp4" type="video/mp4">
        Seu navegador não suporta exibição de vídeo.
    </video>
```

### Outras tags MUITO importantes

- `<div>`
    
    Não possui significado semântico, é utilizada para definir containers na página e, com isso, aplicar as devidas formatações com CSS para o conteúdo da div. É uma das tags que você mais vai ver sendo usada no HTML.

    ```html
        <div class="cabecalho">
            <img src="etcetc.jpg">
            <a href="link">
            <a href="link">
            <a href="link">
        </div>
        <div class="navegacao-lateral">
            <ul>
                <li>Elemento</li>
                <li>Elemento</li>
                <li>Elemento</li>
                <li>Elemento</li>
            </ul>
        </div>
    ```

### Outros elementos
    
- `<ul></ul>`
      
  Lista não-ordenada.
      
- `<ol></ol>`
    
  Lista ordenada.
    
> Para adicionar elementos às listas basta inserir `<li>`...`</li>` dentro das tags de lista.
    
- Tabelas
  
  - `<table></table>`
  
    Utilizada para a construção de tabelas, composta por `<tr>` - Table Row(linha), `<th>` - Table Header(cabeçalho) e `<td>` - Table Data(dados)

`Exemplo`
```html
<table>
    <tr>
        <th>Emoção</th>
        <th>To sentindo</th>
    </tr>
    <tr>
        <td>tristeza😢</td>
        <td>sim </td>
    </tr>
    <tr>
        <td>felicidade</td>
        <td>também</td>
    </tr>
</table>
```
Vira
<table>
    <tr>
        <th>Emoção</th>
        <th>To sentindo</th>
    </tr>
    <tr>
        <td>tristeza😢</td>
        <td>sim </td>
    </tr>
    <tr>
        <td>felicidade😎</td>
        <td>também</td>
    </tr>
</table>

> ### Como HTML é um conteúdo muito vasto, muitas coisas estão faltando aqui, mas tudo isso e muito mais você pode encontrar ✨GRATUITAMENTE✨ em [html.com](https://html.com/), ou no [W3Schools](https://www.w3schools.com/html/default.asp) ou no [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML) (esse tem em português)

<br>

# CSS 

O CSS será explicado durante a reunião.