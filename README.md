# JSQuantio
Open source JS library for rapid web development

## Documentation
Check out the functions present in JSQuantio

### DOM manipulation: Query a single element by its ID.

    query(id)

Param: id - The ID of the HTML element.
Returns: The selected HTML element.


### DOM manipulation: Query all elements matching a specified ID.

    queryAll(id)

Param: id - The ID of the HTML elements.
Returns: NodeList containing all matching elements.


### Display control: Set the display property to 'block'.

    block(id)

Param: id - The ID of the HTML element.


### Display control: Set the display property to 'none'.

    none(id)

Param: id - The ID of the HTML element.


### Add class to an HTML element.

    addClass(idElement, addClass)

Param: idElement - The ID of the HTML element.
Param: addClass - The class to be added.


### Remove class from an HTML element.

    removeClass(idElement, rmClass)

Param: idElement - The ID of the HTML element.
Param: rmClass - The class to be removed.


### Perform actions related to navigation or retrieve information based on the specified type.

    navigation(type)

Param: type - The type of navigation action or information retrieval to be performed (print, back, next, reload, host, hash, protocol, url).
Returns: The result of the specified action or information.


### Get URL parameters.

    getParam(param)

Param: param - The parameter to retrieve.
Returns: The value of the specified parameter.


### Add or remove a class based on scroll position.

    classScroll(idElement)

Param: idElement - The ID of the HTML element.


### Add text to a specified input element at the cursor position.

    addText(text, idElement)

Param: idElement - The ID of the input element.
Param: text - The text to be added.


### Save the text from a specified input element to local storage.

    saveText(nameElement, idElement)

Param: nameElement - The name to identify the stored text.
Param: idElement - The ID of the input element.


### Retrieve and optionally inject stored text from local storage.

    viewText(nameElement, activeReturn, idElement)

Param: nameElement - The name to identify the stored text.
Param: activeReturn - If set, injects the text into a specified input element (optional, by default it is empty).
Param: idElement - The ID of the input element to inject the text (optional, by default it is empty).
Returns: The retrieved stored text.


### Include internal page codes into a specified DOM element.

    include(file, id)

Param: id - The ID of the DOM element where the content will be injected.
Param: file - The URL of the internal HTML file to be included.


### Display notifications.

    notify(title, icon, text, url)

Param: title - The title of the notification.
Param: icon - The URL of the notification icon.
Param: text - The body text of the notification.
Param: url - The URL to open upon clicking the notification.


### Generate a random number within a specified range.

    randomNumb(min, max)

Param: min - The minimum value of the range (optional, by default it is '0').
Param: max - The maximum value of the range (optional, by default it is '9').
Returns: The generated random number.


### Scroll to the top of the page.

    scrollTop(px)

Param: - The pixel value to scroll to from the top (optional, by default it is '0').


### Get and display the value of a range input.

    valueRange(id, idDisplay)

Param: id - The ID of the range input.
Param: idDisplay - The ID of the element to display the value.


### Get the value of a specified input element.

    valueInput(idInput)

Param: idInput - The ID of the input element.
Returns: The value of the input element.


### Validate input based on specified type.

    validInput(text, type)

Param: text - The input text to be validated.
Param: type - The type of validation to be performed (email, url, name, number, empty).
Returns: True if the input is valid, false otherwise.


### Clear the value of a specified input element.

    clearInput(idInput)

Param: idInput - The ID of the input element.
Returns: An empty string.


### Check a condition and perform actions based on the selected value.

    actionSelect(idSelect, value, idElement)

Param: idSelect - The ID of the select element.
Param: value - The value to check against.
Param: idElement - The ID of the element to show or hide based on the condition.


### Filter to prevent HTML injection.

    filterText(text)

Param: input - The input string to be filtered.
Returns: The filtered input with HTML tags removed.


### Copies text from an HTML element to the clipboard.

    copy(id, alert)

Param: id - The ID of the HTML element.
Param: alert - Optional alert message after copying (optional, by default it is empty).


### Removes all accents from the text.

    removeAccents(text)

Param: text - The input text with accents.
Returns: Text without accents.


### Capitalizes the first letter of each word in the text.

    capitalizeText(text)

Param: text - The input text.
Returns: Text with the first letter of each word capitalized.


### Reverses the letters of the entire text.

    reverseText(text)

Param: text - The input text.
Returns: Text with reversed letters.


### Saves text to a .txt file.

    downloadText(text, fileName)

Param: text - The text to be saved.
Param: fileName - The desired filename without extension.


### Downloads the HTML content of a page.

    downloadPage(url, fileName)

Param: url - The URL of the page.
Param: fileName - The desired filename with or without the .html extension.


### Checks the status of a website.

    siteStatus(url)

Param: url - The URL of the website.
Returns: True if the site is accessible, otherwise the HTTP status code.


### Generates a random password based on specified criteria.

    generPassword(length, uppercase, lowercase, numbers, specials)

Param: length - The length of the password to be generated (optional, by default it is '10').
Param: uppercase - Whether to include uppercase letters in the password (optional, by default it is 'true').
Param: lowercase - Whether to include lowercase letters in the password (optional, by default it is 'true').
Param: numbers - Whether to include numbers in the password (optional, by default it is 'true').
Param: specials - Whether to include special characters in the password (optional, by default it is 'true').
Returns: The generated random password.


## Support
Have questions or need to report a problem? Visit <https://github.com/gmasson/jsquantio/issues>


## License
MIT - <https://github.com/gmasson/jsquantio/blob/master/LICENSE>