/**
 * Translate this web
 */
window.translate = function(language){
	if(typeof language == 'undefined') {
		err('You must specify a language');
	}
	if(typeof window.languages == 'undefined' ) {
		err('No existeix languages!!');
	}
	//Comprovar si existeix lidioma del parametre
	if(typeof window.languages[language] == 'undefined' ) {
		err('No existeix el llenguatge: '+language);
	}
	window.log('ei');
	window.log(language);
	//Si existeix, recorre l'objecte d'idioma i anar substituint els texts
	_.each(window.languages[language], function(element, index) {
		$(index).text(element);
	});
}
