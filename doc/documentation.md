# JSQuantio 1.1
JSQuantio is a lightweight and versatile library for DOM manipulation and other useful functionalities in web development. It offers various functions to facilitate working with selectors, styles, navigation, local storage, notifications, and much more.

## Usage
To use the JSQuantio library, simply include the `js/jsquantio.min.js` file in your project and call the desired functions as described below.

## Functions
This documentation describes the usage of the functions available in the JSQuantio library. Each function is explained in detail, with examples of usage and information about parameters and return values.

### `query(idElement)`
Selects a single DOM element by its ID.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element to be selected, usually an ID in the format `#myElement`.

**Example:**
```javascript
let element = query('#myElement');
```
or
```javascript
let element = query('.myElement');
```

### `queryAll(idElement)`
Selects all DOM elements that match the specified ID.

**Parameters:**
- `idElement` (string, required): The CSS selector of the elements to be selected, usually a class in the format `.myClass`.

**Example:**
```javascript
let elements = queryAll('#myElement');
```
or
```javascript
let elements = queryAll('.myElement');
```

### `block(idElement)`
Sets the CSS property `display` of an element to `block`.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element whose `display` property will be changed.

**Example:**
```javascript
block('#myElement');
```

### `none(idElement)`
Sets the CSS property `display` of an element to `none`.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element whose `display` property will be changed.

**Example:**
```javascript
none('#myElement');
```

### `addClass(idElement, addClass)`
Adds a class to the specified element.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element to which the class will be added.
- `addClass` (string, required): The name of the class to be added.

**Example:**
```javascript
addClass('#myElement', 'newClass');
```

### `removeClass(idElement, rmClass)`
Removes a class from the specified element.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element from which the class will be removed.
- `rmClass` (string, required): The name of the class to be removed.

**Example:**
```javascript
removeClass('#myElement', 'oldClass');
```

### `navigation(type)`
Performs navigation-related actions or retrieves information based on the specified type.

**Parameters:**
- `type` (string, required): The type of action or information to be performed/retrieved. Possible values are `print`, `back`, `next`, `reload`, `hash`, `protocol`, `host`, and `url`.

**Example:**
```javascript
navigation('print'); // Prints the page
navigation('back'); // Goes back to the previous page
```

### `getParam(param)`
Retrieves the value of a parameter from the URL.

**Parameters:**
- `param` (string, required): The name of the parameter to be retrieved.

**Example:**
```javascript
let paramValue = getParam('myParam');
```

### `addText(text, idElement)`
Adds text to an input element at the cursor position.

**Parameters:**
- `text` (string, required): The text to be added.
- `idElement` (string, required): The CSS selector of the input element to which the text will be added.

**Example:**
```javascript
addText('Hello, ', '#myInput');
```

### `saveText(nameElement, idElement)`
Saves the text of an input element to local storage.

**Parameters:**
- `nameElement` (string, required): The name to be used for storing the text in local storage.
- `idElement` (string, required): The CSS selector of the input element whose text will be saved.

**Example:**
```javascript
saveText('myText', '#myInput');
```

### `viewText(nameElement, activeReturn, idElement)`
Retrieves and optionally inserts the stored text into an input element.

**Parameters:**
- `nameElement` (string, required): The name used for storing the text in local storage.
- `activeReturn` (string, optional, default: `''`): If provided, the stored text will be inserted into the specified input element.
- `idElement` (string, optional, default: `''`): The CSS selector of the input element into which the stored text will be inserted.

**Example:**
```javascript
let savedText = viewText('myText'); // Retrieves the text without inserting
viewText('myText', true, '#myInput'); // Retrieves and inserts the text
```

### `deleteText(nameElement)`
Removes the stored text from local storage.

**Parameters:**
- `nameElement` (string, required): The name used for storing the text in local storage.

**Example:**
```javascript
deleteText('myText');
```

### `include(file, idElement)`
Includes the content of an HTML file into a DOM element.

**Parameters:**
- `file` (string, required): The path of the HTML file to be included.
- `idElement` (string, required): The CSS selector of the element into which the content of the file will be inserted.

**Example:**
```javascript
include('myFile.html', '#myElement');
```

### `notify(title, icon, text, url)`
Displays a notification to the user.

**Parameters:**
- `title` (string, required): The title of the notification.
- `icon` (string, required): The path of the image to be used as the notification icon.
- `text` (string, required): The text to be displayed in the notification.
- `url` (string, required): The URL to be opened when the notification is clicked.

**Example:**
```javascript
notify('Hello', 'icon.png', 'This is a notification!', 'https://example.com');
```

### `scrollTop(px)`
Scrolls the page to the specified position in pixels.

**Parameters:**
- `px` (number, optional, default: `0`): The pixel position of the page to be scrolled to.

**Example:**
```javascript
scrollTop(100); // Scrolls to 100px from the top
```

### `randomNumb(min, max)`
Generates a random number within a specified range.

**Parameters:**
- `min` (number, optional, default: `0`): The minimum value of the range.
- `max` (number, optional, default: `9`): The maximum value of the range.

**Example:**
```javascript
let randomNumber = randomNumb(1, 10);
```

### `randomLine(text)`
Randomly selects a line from a block of text.

**Parameters:**
- `text` (string, required

): The input text, with lines separated by `\n`.

**Example:**
```javascript
let randomLine = randomLine('Line 1\nLine 2\nLine 3');
```

### `valueRange(idElement, idDisplay)`
Retrieves and displays the value of a `range` input element.

**Parameters:**
- `idElement` (string, required): The CSS selector of the `range` input element.
- `idDisplay` (string, required): The CSS selector of the element where the value will be displayed.

**Example:**
```javascript
valueRange('#myRange', '#myDisplay');
```

### `valueInput(idElement)`
Retrieves the value of an input element.

**Parameters:**
- `idElement` (string, required): The CSS selector of the input element from which the value will be retrieved.

**Example:**
```javascript
let inputValue = valueInput('#myInput');
```

### `validInput(text, type)`
Validates text input based on the specified type.

**Parameters:**
- `text` (string, required): The text to be validated.
- `type` (string, required): The type of validation to be performed. Possible values are `email`, `url`, `name`, `number`, `empty`, `fullname`, `validchars`, `cpf`.

**Example:**
```javascript
if (validInput('test@example.com', 'email')) {
  // Valid input
}
```

### `clearInput(idElement)`
Clears the value of an input element.

**Parameters:**
- `idElement` (string, required): The CSS selector of the input element whose value will be cleared.

**Example:**
```javascript
clearInput('#myInput');
```

### `actionSelect(idSelect, value, idElement)`
Performs actions based on the selection of a `select` element.

**Parameters:**
- `idSelect` (string, required): The CSS selector of the `select` element.
- `value` (string, required): The value of the selected option to be checked.
- `idElement` (string, required): The CSS selector of the element to be shown or hidden based on the selection.

**Example:**
```javascript
actionSelect('#mySelect', 'option1', '#myElement');
```

### `filterText(text)`
Filters text input to remove HTML tags.

**Parameters:**
- `text` (string, required): The text to be filtered.

**Example:**
```javascript
let filteredText = filterText('<b>Hello</b>, World!');
```

### `copyText(idElement, alert)`
Copies the text of an element to the clipboard.

**Parameters:**
- `idElement` (string, required): The CSS selector of the element whose text will be copied.
- `alert` (string, optional, default: `''`): The alert message to be displayed after copying.

**Example:**
```javascript
copyText('#myElement', 'Text copied!');
```

### `removeAccents(text)`
Removes accents from text input.

**Parameters:**
- `text` (string, required): The text to be processed.

**Example:**
```javascript
let unaccentedText = removeAccents('ÁÉÍÓÚ');
```

### `capitalizeText(text)`
Converts the first letter of each word in text input to uppercase.

**Parameters:**
- `text` (string, required): The text to be processed.

**Example:**
```javascript
let capitalizedText = capitalizeText('hello world');
```

### `reverseText(text)`
Reverses the order of letters in text input.

**Parameters:**
- `text` (string, required): The text to be processed.

**Example:**
```javascript
let reversedText = reverseText('Hello, World!');
```

### `textToFile(text, fileName, extension)`
Saves text to a file with the specified name and extension.

**Parameters:**
- `text` (string, required): The text to be saved in the file.
- `fileName` (string, optional, default: `'Text'`): The name of the file to be created.
- `extension` (string, optional, default: `'.txt'`): The extension of the file to be created.

**Example:**
```javascript
textToFile('Hello, World!', 'example', '.txt');
```

### `downloadPage(url, fileName)`
Downloads the HTML content of a page based on the provided URL.

**Parameters:**
- `url` (string, required): The URL of the page to be downloaded.
- `fileName` (string, optional, default: `'Page'`): The name of the file to be created.

**Example:**
```javascript
downloadPage('https://example.com', 'examplePage');
```

### `siteStatus(url)`
Checks the status of a site based on the provided URL.

**Parameters:**
- `url` (string, required): The URL of the site to be checked.

**Example:**
```javascript
let siteStatus = siteStatus('https://example.com');
```

### `generPassword(length, uppercase, lowercase, numbers, specials)`
Generates a random password based on the specified criteria.

**Parameters:**
- `length` (number, optional, default: `10`): The length of the generated password.
- `uppercase` (boolean, optional, default: `true`): Indicates whether the password should contain uppercase letters.
- `lowercase` (boolean, optional, default: `true`): Indicates whether the password should contain lowercase letters.
- `numbers` (boolean, optional, default: `true`): Indicates whether the password should contain numbers.
- `specials` (boolean, optional, default: `true`): Indicates whether the password should contain special characters.

**Example:**
```javascript
let password = generPassword(10, true, true, true, true);
```

### `altKey(key, action)`
Performs an action when the Alt key is pressed together with the specified key.

**Parameters:**
- `key` (string, required): The key to be pressed together with Alt.
- `action` (function, required): The function to be executed when the keys are pressed.

**Example:**
```javascript
altKey('A', function() {
  alert('Alt + A pressed!');
});
```

### `onScroll()`
Displays elements with the `data-scroll` attribute as they appear during scrolling.

**Parameters:**
This function has no parameters.

**Example:**
```html
<div data-scroll="fade-in">Element to be displayed</div>
```
To use this function, simply add the `data-scroll` attribute to the desired elements and call the `onScroll()` function on the page scroll event.