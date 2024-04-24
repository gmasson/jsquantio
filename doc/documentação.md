# JSQuantio 1.1
JSQuantio é uma biblioteca leve e versátil para manipulação do DOM e outras funcionalidades úteis em desenvolvimento web. Ela oferece diversas funções para facilitar o trabalho com seletores, estilos, navegação, armazenamento local, notificações e muito mais.

## Modo de Uso
Para utilizar a biblioteca JSQuantio, basta incluir o arquivo `js/jsquantio.min.js` em seu projeto e chamar as funções desejadas conforme descrito abaixo.

## Funções
Esta documentação descreve o uso das funções disponíveis na biblioteca JSQuantio. Cada função é explicada em detalhes, com exemplos de uso e informações sobre os parâmetros e valores de retorno.

### `query(idElement)`
Seleciona um único elemento do DOM pelo seu ID.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento a ser selecionado, geralmente um ID no formato `#meuElemento`.

**Exemplo:**
```javascript
let element = query('#myElement');
```
ou
```javascript
let element = query('.myElement');
```

### `queryAll(idElement)`
Seleciona todos os elementos do DOM que correspondem ao ID especificado.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS dos elementos a serem selecionados, geralmente uma classe no formato `.minhaClasse`.

**Exemplo:**
```javascript
let elements = queryAll('#myElement');
```
ou
```javascript
let elements = queryAll('.myElement');
```

### `block(idElement)`
Define a propriedade CSS `display` de um elemento como `block`.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento cuja propriedade `display` será alterada.

**Exemplo:**
```javascript
block('#myElement');
```

### `none(idElement)`
Define a propriedade CSS `display` de um elemento como `none`.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento cuja propriedade `display` será alterada.

**Exemplo:**
```javascript
none('#myElement');
```

### `addClass(idElement, addClass)`
Adiciona uma classe ao elemento especificado.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento ao qual a classe será adicionada.
- `addClass` (string, obrigatório): O nome da classe a ser adicionada.

**Exemplo:**
```javascript
addClass('#myElement', 'newClass');
```

### `removeClass(idElement, rmClass)`
Remove uma classe do elemento especificado.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento do qual a classe será removida.
- `rmClass` (string, obrigatório): O nome da classe a ser removida.

**Exemplo:**
```javascript
removeClass('#myElement', 'oldClass');
```

### `navigation(type)`
Executa ações relacionadas à navegação ou recupera informações com base no tipo especificado.

**Parâmetros:**
- `type` (string, obrigatório): O tipo de ação ou informação a ser executada/recuperada. Os valores possíveis são `print`, `back`, `next`, `reload`, `hash`, `protocol`, `host`, e `url`.

**Exemplo:**
```javascript
navigation('print'); // Imprime a página
navigation('back'); // Volta para a página anterior
```

### `getParam(param)`
Recupera o valor de um parâmetro da URL.

**Parâmetros:**
- `param` (string, obrigatório): O nome do parâmetro a ser recuperado.

**Exemplo:**
```javascript
let paramValue = getParam('myParam');
```

### `addText(text, idElement)`
Adiciona texto a um elemento de entrada (input) na posição do cursor.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser adicionado.
- `idElement` (string, obrigatório): O seletor CSS do elemento de entrada ao qual o texto será adicionado.

**Exemplo:**
```javascript
addText('Hello, ', '#myInput');
```

### `saveText(nameElement, idElement)`
Salva o texto de um elemento de entrada no armazenamento local.

**Parâmetros:**
- `nameElement` (string, obrigatório): O nome a ser usado para armazenar o texto no armazenamento local.
- `idElement` (string, obrigatório): O seletor CSS do elemento de entrada do qual o texto será salvo.

**Exemplo:**
```javascript
saveText('myText', '#myInput');
```

### `viewText(nameElement, activeReturn, idElement)`
Recupera e opcionalmente insere o texto armazenado em um elemento de entrada.

**Parâmetros:**
- `nameElement` (string, obrigatório): O nome usado para armazenar o texto no armazenamento local.
- `activeReturn` (string, opcional, padrão: `''`): Se fornecido, o texto armazenado será inserido no elemento de entrada especificado.
- `idElement` (string, opcional, padrão: `''`): O seletor CSS do elemento de entrada ao qual o texto armazenado será inserido.

**Exemplo:**
```javascript
let savedText = viewText('myText'); // Recupera o texto sem inserir
viewText('myText', true, '#myInput'); // Recupera e insere o texto
```

### `deleteText(nameElement)`
Remove o texto armazenado do armazenamento local.

**Parâmetros:**
- `nameElement` (string, obrigatório): O nome usado para armazenar o texto no armazenamento local.

**Exemplo:**
```javascript
deleteText('myText');
```

### `include(file, idElement)`
Inclui o conteúdo de um arquivo HTML em um elemento do DOM.

**Parâmetros:**
- `file` (string, obrigatório): O caminho do arquivo HTML a ser incluído.
- `idElement` (string, obrigatório): O seletor CSS do elemento no qual o conteúdo do arquivo será inserido.

**Exemplo:**
```javascript
include('myFile.html', '#myElement');
```

### `notify(title, icon, text, url)`
Exibe uma notificação ao usuário.

**Parâmetros:**
- `title` (string, obrigatório): O título da notificação.
- `icon` (string, obrigatório): O caminho da imagem a ser usada como ícone da notificação.
- `text` (string, obrigatório): O texto a ser exibido na notificação.
- `url` (string, obrigatório): A URL a ser aberta quando a notificação for clicada.

**Exemplo:**
```javascript
notify('Hello', 'icon.png', 'This is a notification!', 'https://example.com');
```

### `scrollTop(px)`
Rola a página até a posição especificada em pixels.

**Parâmetros:**
- `px` (number, opcional, padrão: `0`): A posição em pixels da página a ser rolada.

**Exemplo:**
```javascript
scrollTop(100); // Rola até 100px da parte superior
```

### `randomNumb(min, max)`
Gera um número aleatório dentro de um intervalo especificado.

**Parâmetros:**
- `min` (number, opcional, padrão: `0`): O valor mínimo do intervalo.
- `max` (number, opcional, padrão: `9`): O valor máximo do intervalo.

**Exemplo:**
```javascript
let randomNumber = randomNumb(1, 10);
```

### `randomLine(text)`
Seleciona aleatoriamente uma linha de um bloco de texto.

**Parâmetros:**
- `text` (string, obrigatório): O texto de entrada, com as linhas separadas por `\n`.

**Exemplo:**
```javascript
let randomLine = randomLine('Line 1\nLine 2\nLine 3');
```

### `valueRange(idElement, idDisplay)`
Recupera e exibe o valor de um elemento de entrada do tipo `range`.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento de entrada do tipo `range`.
- `idDisplay` (string, obrigatório): O seletor CSS do elemento no qual o valor será exibido.

**Exemplo:**
```javascript
valueRange('#myRange', '#myDisplay');
```

### `valueInput(idElement)`
Recupera o valor de um elemento de entrada.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento de entrada do qual o valor será recuperado.

**Exemplo:**
```javascript
let inputValue = valueInput('#myInput');
```

### `validInput(text, type)`
Valida a entrada de texto com base no tipo especificado.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser validado.
- `type` (string, obrigatório): O tipo de validação a ser executada. Os valores possíveis são `email`, `url`, `name`, `number`, `empty`, `fullname`, `validchars`, `cpf`.

**Exemplo:**
```javascript
if (validInput('test@example.com', 'email')) {
  // Entrada válida
}
```

### `clearInput(idElement)`
Limpa o valor de um elemento de entrada.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento de entrada do qual o valor será limpo.

**Exemplo:**
```javascript
clearInput('#myInput');
```

### `actionSelect(idSelect, value, idElement)`
Executa ações com base na seleção de um elemento `select`.

**Parâmetros:**
- `idSelect` (string, obrigatório): O seletor CSS do elemento `select`.
- `value` (string, obrigatório): O valor da opção selecionada a ser verificada.
- `idElement` (string, obrigatório): O seletor CSS do elemento a ser mostrado ou escondido com base na seleção.

**Exemplo:**
```javascript
actionSelect('#mySelect', 'option1', '#myElement');
```

### `filterText(text)`
Filtra uma entrada de texto para remover tags HTML.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser filtrado.

**Exemplo:**
```javascript
let filteredText = filterText('<b>Hello</b>, World!');
```

### `copyText(idElement, alert)`
Copia o texto de um elemento para a área de transferência.

**Parâmetros:**
- `idElement` (string, obrigatório): O seletor CSS do elemento do qual o texto será copiado.
- `alert` (string, opcional, padrão: `''`): A mensagem de alerta a ser exibida após a cópia.

**Exemplo:**
```javascript
copyText('#myElement', 'Text copied!');
```

### `removeAccents(text)`
Remove acentos de uma entrada de texto.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser processado.

**Exemplo:**
```javascript
let unaccentedText = removeAccents('ÁÉÍÓÚ');
```

### `capitalizeText(text)`
Converte a primeira letra de cada palavra em uma entrada de texto para maiúscula.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser processado.

**Exemplo:**
```javascript
let capitalizedText = capitalizeText('hello world');
```

### `reverseText(text)`
Inverte a ordem das letras em uma entrada de texto.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser processado.

**Exemplo:**
```javascript
let reversedText = reverseText('Hello, World!');
```

### `textToFile(text, fileName, extension)`
Salva o texto em um arquivo com o nome e extensão especificados.

**Parâmetros:**
- `text` (string, obrigatório): O texto a ser salvo no arquivo.
- `fileName` (string, obrigatório, padrão: `'Text'`): O nome do arquivo a ser criado.
- `extension` (string, obrigatório, padrão: `'.txt'`): A extensão do arquivo a ser criado.

**Exemplo:**
```javascript
textToFile('Hello, World!', 'example', '.txt');
```

### `downloadPage(url, fileName)`
Baixa o conteúdo HTML de uma página com base na URL fornecida.

**Parâmetros:**
- `url` (string, obrigatório): A URL da página a ser baixada.
- `fileName` (string, obrigatório, padrão: `'Page'`): O nome do arquivo a ser criado.

**Exemplo:**
```javascript
downloadPage('https://example.com', 'examplePage');
```

### `siteStatus(url)`
Verifica o status de um site com base na URL fornecida.

**Parâmetros:**
- `url` (string, obrigatório): A URL do site a ser verificado.

**Exemplo:**
```javascript
let siteStatus = siteStatus('https://example.com');
```

### `generPassword(length, uppercase, lowercase, numbers, specials)`
Gera uma senha aleatória com base nos critérios especificados.

**Parâmetros:**
- `length` (number, opcional, padrão: `10`): O comprimento da senha gerada.
- `uppercase` (boolean, opcional, padrão: `true`): Indica se a senha deve conter letras maiúsculas.
- `lowercase` (boolean, opcional, padrão: `true`): Indica se a senha deve conter letras minúsculas.
- `numbers` (boolean, opcional, padrão: `true`): Indica se a senha deve conter números.
- `specials` (boolean, opcional, padrão: `true`): Indica se a senha deve conter caracteres especiais.

**Exemplo:**
```javascript
let password = generPassword(10, true, true, true, true);
```

### `altKey(key, action)`
Executa uma ação quando a tecla Alt é pressionada em conjunto com a tecla especificada.

**Parâmetros:**
- `key` (string, obrigatório): A tecla a ser pressionada em conjunto com Alt.
- `action` (function, obrigatório): A função a ser executada quando as teclas forem pressionadas.

**Exemplo:**
```javascript
altKey('A', function() {
  alert('Alt + A pressed!');
});
```

### `onScroll()`
Exibe elementos com o atributo `data-scroll` à medida que eles aparecem durante a rolagem.

**Parâmetros:**
Esta função não possui parâmetros.

**Exemplo:**
```html
<div data-scroll="fade-in">Elemento a ser exibido</div>
```
Para usar essa função, basta adicionar o atributo `data-scroll` aos elementos desejados e chamar a função `onScroll()` no evento de rolagem da página.