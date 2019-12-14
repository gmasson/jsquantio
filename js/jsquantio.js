/*
* JSQuantio 0.9 (BETA)
* https://github.com/gmasson/jsquantio
* License MIT
*/

/* DOM */
function query(id) {
	return document.querySelector( id );
}
function queryAll(id) {
	return document.querySelectorAll( id );
}

/* Display control */
function block( id ) {
	query( id ).style.display="block";
}
function none( id ) {
	query( id ).style.display="none";
}

/* Add class */
function addClass( idElement, addClass ) {
	query( idElement ).classList.add( addClass );
}

/* Remove class */
function removeClass( idElement, rmClass ) {
	query( idElement ).classList.remove( rmClass );
}

/* Submit Form */
function submitForm( formId ) {
	query( formId ).submit();
}

/* Insert HTML */
function insertHTML( id, html ) {
	query( id ).innerHTML = html;
}

/* Focus input */
function focusInput( idInput ) {
	query( idInput ).focus();
}

/* Get value range */
function getValueRange( id, idDisplay ) {
	query( idDisplay ).innerHTML = parseFloat( query( id ).value );
}

/* Print page */
function print() {
	window.print();
}

/* Back page */
function back() {
	window.history.go( -1 );
}

/* Next page */
function next() {
	window.history.go( 1 );
}

/* Reload page*/
function reload() {
	window.history.go( 0 );
}

/* Get URLs */
function url() {
	return window.location.href;
}

/* Get Host */
function urlHost() {
	return window.location.hostname;
}

/* Get Hash */
function urlHash() {
	return window.location.hash;
}

/* Get Protocol */
function urlProtocol() {
	return window.location.protocol;
}

/* Add or remove class according to scroll */
function classScroll( idElement ) {
	let element = query( idElement );
	let insertClass = element.getAttribute( "data-addclass" );
	let numPx = element.getAttribute( "data-scrollpx" );
	let top = window.pageYOffset || document.documentElement.scrollTop;
	if(  top > numPx  ) {
		addClass( idElement, insertClass );
	} else {
		removeClass( idElement, insertClass );
	}
}

/* Interval time */
function interval( time, action ) {
	setInterval( action, time );
}

/* Add texts to inputs */
function addText( idElement, text ) {
	let area = query( idElement );
	let cursorPosition = area.selectionStart;
	// cursor position
	let front = ( area.value ).substring( 0, cursorPosition );
	let back = ( area.value ).substring( cursorPosition, area.value.length );
	area.value = front + text + back;
	// update cursor position
	cursorPosition = cursorPosition + text.length;
	area.selectionStart = cursorPosition;
	area.selectionEnd = cursorPosition;
	area.focus(); 
}

/* Save input texts */
function saveText( nameElement, idElement ) {
	let textscreen = query( idElement ).value;
	window.localStorage.setItem( nameElement, textscreen );
}

/* Recover text and inject input */
function recoverText( nameElement, activeReturn = '', idElement = '' ) {
	let text = window.localStorage.getItem( nameElement );
	if ( text == null ) {
		let text = '';
	}
	if ( activeReturn == '' ) {
		return text;
	} else {
		addText( idElement, text );
	}
}

/* Notifications */
function notify( title, icon, text, url ) {
	Notification.requestPermission( function() {
		let notification = new Notification( title, {
			icon: icon,
			body: text
		} );
		notification.onclick = function() {
			window.open( url );
		}
	} );
}

/* Random numbers */
function randomNumbers( min, max ) {
	return Math.floor( Math.random() * ( max - min + 1 ) );
}

/* Scroll Top */
function scrollTop( px = 0 ) {
	document.body.scrollTop = px; // For Safari
	document.documentElement.scrollTop = px; // For Chrome, Firefox, IE and Opera
}

/* Get value input */
function valueInput( idInput ) {
	let input = query( idInput ).value;
	if( ! input ) {
		return '';
	} else {
		return input;
	}
}

/* Validation of inputs */
function validInput( idInput, classCSS = 'border-red', idBoxMsg = '', idShowNext = '' ) {
	if ( ! valueInput( idInput ) ) {
		addClass( idInput, classCSS );
		if( idBoxMsg != '' ) {
			block( idBoxMsg );
		}
		return false;
	} else {
		removeClass( idInput, classCSS );
		if( idShowNext != '' ) {
			block( showNext );
			//none( idInput );
		}
		return true;
	}
}

/* Actions check */
function actionCheck( idSelect, value, idElement ){
	let option = valueInput( idSelect );
	if( option == value ){
		query( idElement ).style.display ="block";
	} else {
		query( idElement ).style.display ="none";
	}
}

/* Clear input */
function clearInput( idInput ) {
	let input = query( idInput ).value = "";
	return input;
}

/* Calculate Input Value */
function calcInput( idInput ) {
	let input = query( idInput ).value;
	if ( ! input ) {
		return '';
	} else {
		return query( idInput ).value = eval( input );
	}  
}