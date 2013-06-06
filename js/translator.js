/**
 * Translate this web
 */
// window.translate = function(language){
// 	if(typeof language == 'undefined') {
// 		err('You must specify a language');
// 	}
// 	if(typeof window.languages == 'undefined' ) {
// 		err('No existeix languages!!');
// 	}
// 	//Comprovar si existeix lidioma del parametre
// 	if(typeof window.languages[language] == 'undefined' ) {
// 		err('No existeix el llenguatge: '+language);
// 	}
// 	window.log('ei');
// 	window.log(language);
// 	//Si existeix, recorre l'objecte d'idioma i anar substituint els texts
// 	_.each(window.languages[language], function(element, index) {
// 		$(index).html(element);
// 	});
// }
window.translate = function(language) {
	//Check errors
	if (typeof language == 'undefined') {
		err('You must specify a language');
	}
	var langs = ['ca', 'es', 'en'];
//	if(! (language in langs)) err('The language '+language+' is not translated'); //No funciona: comprova la key, no el value
	var found = false;
	for (var i = 0, len = langs.length; i < len && !found; i++) {
		if (langs[i] == language) found = true;
	}
	if (!found) err('The language ' + language + ' is not translated');

	//Do the tranlation
	_.each($('.tr'), function(el) {
		if ($(el).hasClass(language)) $(el).show();
		else $(el).hide();
	});
}
Backbone.on('translate',translate);