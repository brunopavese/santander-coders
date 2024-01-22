# Atividades 2: Combinadores

## Descendente (espaço em branco)

### Exercício 1
Selecione e estilize todos os elementos `<span>` que são descendentes de um elemento com a classe "destacado".

```html
<div class="destacado">
  <p>Parágrafo dentro de um elemento destacado.</p>
  <span>Span dentro de um elemento destacado - Este será estilizado de forma diferente</span>
</div>
<p>Parágrafo fora do elemento destacado.</p>
<span>Outro span - Este também será estilizado de forma diferente</span>
```

### Exercício 2
Selecione e estilize todos os elementos de lista (<li>) que são descendentes de uma lista não ordenada (<ul>).

<ul>
  <li>Item 1 - Este será estilizado de forma diferente</li>
  <li>Item 2 - Este também será estilizado de forma diferente</li>
</ul>
<ol>
  <li>Item 3</li>
  <li>Item 4</li>
</ol>

## Filho (>)
### Exercício 1
Selecione e estilize todos os `<li>` que são filhos diretos de uma lista não ordenada (`<ul>`).

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```
### Exercício 2
Selecione e estilize todos os `<h2>` que são filhos diretos de uma `<div>` com a classe "conteúdo".

```html
<div class="conteúdo">
  <h2>Título 1</h2>
  <p>Parágrafo 1</p>
</div>
<div class="conteúdo">
  <h2>Título 2</h2>
  <p>Parágrafo 2</p>
</div>
```
## Irmão Geral (~)
### Exercício 1
Selecione e estilize todos os parágrafos que são irmãos gerais do primeiro parágrafo.

```html
<p>Primeiro parágrafo</p>
<div>Primeira div</div>
<p>Segundo parágrafo - Este será estilizado de forma diferente</p>
<span>Primeiro span</span>
<p>Terceiro parágrafo - Este também será estilizado de forma diferente</p>
```
### Exercício 2
Selecione e estilize a segunda tabela (`<table>`) que é irmã geral da primeira tabela.

```html
<table>
  <tr>
    <th>Cabeçalho 1</th>
    <th>Cabeçalho 2</th>
  </tr>
  <tr>
    <td>Dado 1</td>
    <td>Dado 2</td>
  </tr>
</table>
<table>
  <tr>
    <td>Dado 3 - Esta tabela será estilizada de forma diferente</td>
    <td>Dado 4</td>
  </tr>
</table>
```
## Irmão Adjacente (+)
### Exercício 1
Selecione e estilize o segundo parágrafo que é irmão adjacente do primeiro parágrafo.

```html
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
<div>Terceiro elemento</div>
```
### Exercício 2
Selecione e estilize a segunda lista não ordenada (`<ul>`) que é irmã adjacente da primeira lista não ordenada.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ul>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```