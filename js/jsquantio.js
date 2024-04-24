/*
* JSQuantio 1.1
* https://github.com/gmasson/jsquantio
* License MIT
*/

/** 
 * DOM manipulation: Query a single element by its ID.
 * @param {string} idElement - The ID of the HTML element.
 * @returns {Element} - The selected HTML element.
 */
function query(idElement) {
  return document.querySelector(idElement);
}

/** 
* DOM manipulation: Query all elements matching a specified ID.
* @param {string} idElement - The ID of the HTML elements.
* @returns {NodeList} - NodeList containing all matching elements.
*/
function queryAll(idElement) {
  return document.querySelectorAll(idElement);
}

/** 
* Display control: Set the display property to 'block'.
* @param {string} idElement - The ID of the HTML element.
*/
function block(idElement) {
  query(idElement).style.display = "block";
}

/** 
* Display control: Set the display property to 'none'.
* @param {string} idElement - The ID of the HTML element.
*/
function none(idElement) {
  query(idElement).style.display = "none";
}

/** 
* Add class to an HTML element.
* @param {string} idElement - The ID of the HTML element.
* @param {string} addClass - The class to be added.
*/
function addClass(idElement, addClass) {
  query(idElement).classList.add(addClass);
}

/** 
* Remove class from an HTML element.
* @param {string} idElement - The ID of the HTML element.
* @param {string} rmClass - The class to be removed.
*/
function removeClass(idElement, rmClass) {
  query(idElement).classList.remove(rmClass);
}

/** 
* Perform actions related to navigation or retrieve information based on the specified type.
* @param {string} type - The type of navigation action or information retrieval to be performed (print, back, next, reload, host, hash, protocol, url).
* @returns {string|null} - The result of the specified action or information.
*/
function navigation(type) {
  let fullUrl = window.location.href;

  switch (type.toLowerCase()) {
      case "print":
          return window.print();
          return null;

      case "back":
          return window.history.go(-1);
          return null;

      case "next":
          return window.history.go(1);
          return null;

      case "reload":
          window.history.go(0);
          return null;

      case 'hash':
          window.location.hash;
          return null;

      case 'protocol':
          window.location.protocol;
          return null;

      case 'host':
          let hostRegex = /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i;
          let match = fullUrl.match(hostRegex);
          return match ? match[1] : null;

      case 'url':
          return fullUrl;

      default:
          console.error("Invalid navigation type");
          return null;
  }
}

/** 
* Get URL parameters.
* @param {string} param - The parameter to retrieve.
* @returns {string|null} - The value of the specified parameter, or null if not found or if it contains unsafe characters.
*/
function getParam(param) {
let searchParams = new URLSearchParams(window.location.search);
let value = searchParams.get(param);

if (value && /^[a-zA-Z0-9,%+\-$;:@]+$/.test(value)) {
    return value;
} else {
    return null;
}
}

/** 
* Add text to a specified input element at the cursor position.
* @param {string} idElement - The ID of the input element.
* @param {string} text - The text to be added.
*/
function addText(text, idElement) {
  let area = query(idElement);
  let cursorPosition = area.selectionStart;
  let front = (area.value).substring(0, cursorPosition);
  let back = (area.value).substring(cursorPosition, area.value.length);
  area.value = front + text + back;
  cursorPosition = cursorPosition + text.length;
  area.selectionStart = cursorPosition;
  area.selectionEnd = cursorPosition;
  area.focus();
}

/** 
* Save the text from a specified input element to local storage.
* @param {string} nameElement - The name to identify the stored text.
* @param {string} idElement - The ID of the input element.
*/
function saveText(nameElement, idElement) {
  let textscreen = query(idElement).value;
  window.localStorage.setItem(nameElement, textscreen);
}

/** 
* Retrieve and optionally inject stored text from local storage.
* @param {string} nameElement - The name to identify the stored text.
* @param {string} [activeReturn=''] - If set, injects the text into a specified input element.
* @param {string} [idElement=''] - The ID of the input element to inject the text.
* @returns {string|null} - The retrieved stored text.
*/
function viewText(nameElement, activeReturn = '', idElement = '') {
  let text = window.localStorage.getItem(nameElement);
  if (text == null) {
      text = '';
  }
  if (activeReturn !== '') {
      addText(text, idElement);
  } else {
      return text;
  }
}

/**
* Deletes stored text from local storage.
* @param {string} nameElement - The name to identify the stored text.
* @returns {boolean} - True if the content was deleted successfully, false otherwise.
*/
function deleteText(nameElement) {
if(localStorage.getItem(nameElement)) {
  localStorage.removeItem(nameElement);
  return true;
} else {
  return false;
}
}

/**
* Include internal page codes into a specified DOM element.
* 
* @param {string} idElement - The ID of the DOM element where the content will be injected.
* @param {string} file - The URL of the internal HTML file to be included.
*/
function include(file, idElement) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Load error: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      var contentElement = query(idElement);
      if (contentElement) {
        contentElement.innerHTML = html;
      } else {
        console.error('Element ' + idElement + ' not found in the DOM.');
      }
    })
    .catch(error => console.error('Error loading the file:', error));
}

/** 
* Display notifications.
* @param {string} title - The title of the notification.
* @param {string} icon - The URL of the notification icon.
* @param {string} text - The body text of the notification.
* @param {string} url - The URL to open upon clicking the notification.
*/
function notify(title, icon, text, url) {
if (!("Notification" in window)) {
  console.log("This browser does not support notifications.");
  return;
}
Notification.requestPermission(function() {
    let notification = new Notification(title, {
        icon: icon,
        body: text
    });
    notification.onclick = function() {
        window.open(url);
    };
});
}

/** 
* Scroll to the top of the page.
* @param {number} - The pixel value to scroll to from the top.
*/
function scrollTop(px = 0) {
document.documentElement.scrollTop = px; // For Chrome, Firefox, IE, and Opera
document.body.scrollTop = px; // For Safari
}

/** 
* Generate a random number within a specified range.
* @param {number} min - The minimum value of the range.
* @param {number} max - The maximum value of the range.
* @returns {number} - The generated random number.
*/
function randomNumb(min = 0, max = 9) {
  return Math.floor(Math.random() * (max - min + 1));
}

/**
* Selects a random line from a block of text.
* @param {string} text - The input text containing multiple lines.
* @returns {string} - A randomly selected line from the input text.
*/
function randomLine(text) {
var lines = text.split('\n');
var randomLine = lines[Math.floor(Math.random() * lines.length)];
return randomLine;
}

/** 
* Get and display the value of a range input.
* @param {string} idElement - The ID of the range input.
* @param {string} idDisplay - The ID of the element to display the value.
*/
function valueRange(idElement, idDisplay) {
  query(idDisplay).innerHTML = parseFloat(query(idElement).value);
}

/** 
* Get the value of a specified input element.
* @param {string} idElement - The ID of the input element.
* @returns {string} - The value of the input element.
*/
function valueInput(idElement) {
  let input = query(idElement).value;
  if (!input) {
      return '';
  } else {
      return input;
  }
}

/** 
* Validate input based on specified type.
* @param {string} text - The input text to be validated.
* @param {string} type - The type of validation to be performed (email, url, name, number, empty).
* @returns {boolean} - True if the input is valid, false otherwise.
*/
function validInput(text, type) {
text = text.trim();

switch (type) {
    case "email":
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(text);

    case "url":
        let urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
        return urlRegex.test(text);

    case "name":
        let nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(text);

    case "number":
        return !isNaN(parseFloat(text)) && isFinite(text);

    case "empty":
        return text === "";

    case "fullname":
        // Regular expression to validate full name
        const fullnameRegex = /^[^\d\s]+(?:\s[^\d\s]+)*$/;
        return fullnameRegex.test(text);

    case "validchars":
        // Regular expression to validate numbers, commas, periods, colons, or semicolons
        const validCharsRegex = /^[0-9.,:]+$/;
        return validCharsRegex.test(text);

    case "cpf":
        // Remove non-numeric characters
        const cpf = text.replace(/\D/g, '');

        // Check if CPF has 11 digits
        if (cpf.length !== 11) {
            return false;
        }

        // Check if all digits are equal (invalid CPF, but valid format)
        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        // Calculate the first verifier digit
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let remainder = sum % 11;
        let digit = (remainder < 2) ? 0 : 11 - remainder;

        // Check if the first verifier digit is correct
        if (parseInt(cpf.charAt(9)) !== digit) {
            return false;
        }

        // Calculate the second verifier digit
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        remainder = sum % 11;
        digit = (remainder < 2) ? 0 : 11 - remainder;

        // Check if the second verifier digit is correct
        if (parseInt(cpf.charAt(10)) !== digit) {
            return false;
        }

        // Valid CPF
        return true;

    default:
        return false;
}
}

/** 
* Clear the value of a specified input element.
* @param {string} idElement - The ID of the input element.
* @returns {string} - An empty string.
*/
function clearInput(idElement) {
  query(idElement).value = "";
  return '';
}

/** 
* Check a condition and perform actions based on the selected value.
* @param {string} idSelect - The ID of the select element.
* @param {string} value - The value to check against.
* @param {string} idElement - The ID of the element to show or hide based on the condition.
*/
function actionSelect(idSelect, value, idElement) {
  let option = valueInput(idSelect);
  if (option == value) {
      block(idElement);
  } else {
      none(idElement);
  }
}

/** 
* Filter to prevent HTML injection.
* 
* @param {string} input - The input string to be filtered.
* @returns {string} - The filtered input with HTML tags removed.
*/
function filterText(text) {
const htmlTagsRegex = /<[^>]*>/g;
const filteredInput = text.replace(htmlTagsRegex, '');
return filteredInput;
}

/** 
* Copies text from an HTML element to the clipboard.
* @param {string} idElement - The ID of the HTML element.
* @param {string} alert - Optional alert message after copying.
*/
function copyText(idElement, alert = '') {
let element = query(idElement);
if (!element) {
  console.error("Element with ID " + idElement + " not found");
}
element.select();
document.execCommand("copy");
if (alert !== '') {
  alert(alert);
}
}

/** 
* Removes all accents from the text.
* @param {string} text - The input text with accents.
* @returns {string} - Text without accents.
*/
function removeAccents(text) {
return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

/** 
* Capitalizes the first letter of each word in the text.
* @param {string} text - The input text.
* @returns {string} - Text with the first letter of each word capitalized.
*/
function capitalizeText(text) { 
return text.toLowerCase().split(' ').map((word) => {
  return word[0].toUpperCase() + word.slice(1);
}).join(' ');
}

/** 
* Reverses the letters of the entire text.
* @param {string} text - The input text.
* @returns {string} - Text with reversed letters.
*/
function reverseText(text) {
return text.split("").reverse().join("");
}

/**
* Saves text content to a file.
* @param {string} text - The text content to be saved.
* @param {string} fileName - The name of the file.
* @param {string} extension - The extension of the file.
*/
function textToFile(text, fileName = 'Text', extension = '.txt') {
var blob = new Blob([text], { type: 'text/plain' });
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = fileName + extension;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

/** 
* Downloads the HTML content of a page.
* @param {string} url - The URL of the page.
* @param {string} fileName - The desired filename with or without the .html extension.
*/
function downloadPage(url, fileName = 'Page') {
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Error fetching HTML: " + response.status);
    }
  })
  .then(html => {
    let blob = new Blob([html], { type: 'text/html' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName.endsWith('.html') ? fileName : fileName + '.html';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  })
  .catch(error => console.error('Error fetching HTML:', error));
}

/** 
* Checks the status of a website.
* @param {string} url - The URL of the website.
* @returns {Promise<boolean|number>} - True if the site is accessible, otherwise the HTTP status code.
*/
function siteStatus(url) {
return fetch(url)
  .then(response => {
    if (response.ok) {
      return true;
    } else {
      return response.status;
    }
  })
  .catch(error => {
    console.error('Error fetching site status:', error);
    return false;
  });
}

/** 
* Generates a random password based on specified criteria.
* 
* @param {number} length - The length of the password to be generated.
* @param {boolean} uppercase - Whether to include uppercase letters in the password.
* @param {boolean} lowercase - Whether to include lowercase letters in the password.
* @param {boolean} numbers - Whether to include numbers in the password.
* @param {boolean} specials - Whether to include special characters in the password.
* @returns {string} - The generated random password.
*/
function generPassword(length = 10, uppercase = true, lowercase = true, numbers = true, specials = true) {
// Define the sets of available characters
let uppercaseInclude = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercaseInclude = 'abcdefghijklmnopqrstuvwxyz';
let numbersInclude = '0123456789';
let specialsInclude = '!@#$%^&*()_+[]{}|;:,.';
let characterSet = '';
if (uppercase) characterSet += uppercaseInclude;
if (lowercase) characterSet += lowercaseInclude;
if (numbers) characterSet += numbersInclude;
if (specials) characterSet += specialsInclude;
let password = '';
for (let i = 0; i < length; i++) {
  let randomIndex = Math.floor(Math.random() * characterSet.length);
  password += characterSet.charAt(randomIndex);
}
return password;
}

/**
* Executes a specified action when Alt key is pressed along with a specified key.
* @param {string} key - The key to be pressed along with Alt.
* @param {function} action - The function to execute when Alt key is pressed along with the specified key.
*/
function altKey(key, action) {
var altKey = "Key" + key;
var listenerAdded = false;
function keydownHandler(event) {
  if (event.altKey && event.code === altKey) {
    action();
  }
}
if (!listenerAdded) {
  document.addEventListener('keydown', keydownHandler);
  listenerAdded = true;
}
}

/**
* Display elements with data-scroll attribute as they appear on scroll
*/
function onScroll() {
var elements = document.querySelectorAll('[data-scroll]');
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  var delay = parseInt(element.getAttribute('data-scroll-delay')) || 10;
  var classToAdd = element.getAttribute('data-scroll');
  var rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    !element.classList.contains(classToAdd)
  ) {
    setTimeout(function(el) {
      el.classList.add(classToAdd);
    }, delay, element);
  }
}
}

document.addEventListener('scroll', onScroll);

onScroll(); // Initial call to display elements already visible on page load