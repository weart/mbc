//Utils
window.log = function(msg) {
	if( typeof console == 'object' && _.isFunction(console.log)) {
		console.log(msg);
	}
};
window.err = function(msg) {
	if( typeof console == 'object' && _.isFunction(console.error)) {
		console.error(msg);
	}
};
//Param can be an array, object or string
window.preloadImage = function(param) {
	switch(typeof param) {
		case 'string':
			window._preloadImage(param);break;
		case 'object':
			_.each(param, window._preloadImage);break;
		default:
			log(this+': preloadImage error, typeof '+(typeof param)+' not allowed');
	}
};
window._preloadImage = function(url) {
	if(_.isString(url)) {
		var img = new Image();
		img.src = url;
	} else log(this+': _preloadImage error, typeof '+(typeof url)+' is not a string');
};

//Routing
window.Routing = Backbone.Router.extend({
	default_lang: 'es',
	routes: {
		"": "init",
		"lang/:lang": "initTranslate"
	},
	init: function() {
		this.navigate("lang/" + this.default_lang, {trigger: true});
	},
	initTranslate: function(lang) {
		window.lang = lang || this.default_lang;
		Backbone.trigger('translate',lang);
		//window.buttonsView.do_translate(lang);
	},
	goTo: function(page) {
		log('goTo:'+page);
        var lang = window.lang || this.default_lang;
		var url = page+'.html#lang/'+lang;
		window.location.href = url;
//		window.location.assign();
//		var url = window.location.protocol + '//' + window.location.host;
//		url += page+'#'+window.lang;
//		window.location.href = url;
	}
});

//Prevent Lazy-Load images
window.loadImages = function() {
	//scroll
	var imgs = ['images/BOTO_scrolla3.png','images/BOTO_scrollb3.png'];
	//lang es
	imgs = imgs.concat(['images/BOTO_esp1.png','images/BOTO_esp2.png','images/BOTO_esp3.png']);
	//lang en
	imgs = imgs.concat(['images/BOTO_eng1.png','images/BOTO_eng2.png','images/BOTO_eng3.png']);
	//lang ca
	imgs = imgs.concat(['images/BOTO_cat1.png','images/BOTO_cat2.png','images/BOTO_cat3.png']);
	//info
	imgs = imgs.concat(['images/BOTO_info1.png','images/BOTO_info2.png','images/BOTO_info3.png']);
	//mail
	imgs = imgs.concat(['images/BOTO_mail1.3.png','images/BOTO_mail2.png','images/BOTO_mail3.png']);
	
	return preloadImage(imgs);
}


//MAIN
$(document).ready(function() {
	window.routing = new window.Routing();
	//window.views = new window.Views();
	window.buttonsView = new window.ButtonsView();
	window.logosView = new window.LogosView();
	
	loadImages();
	
	Backbone.history.start(); //{pushState: true}
});

//dw_scroll
function init_dw_Scroll() {
	// arguments: id of scroll area div, id of content div
	window.dw_scrollObjInstance = new dw_scrollObj('wn', 'lyr1');
	// args: id, axis ('v' or 'h'), eType (event type for arrows), 
	// bScrollbar (include track and dragBar? true or false)
	dw_scrollObjInstance.buildScrollControls('scrollbar', 'h', 'mouseover', true);
	
	//Lenin: Windows resize
	dw_Event.add( window, 'resize', function(){ window.dw_scrollObjInstance.updateDims(); } );
}
// if code supported, link in the style sheet (optional) and call the init function onload
if ( typeof dw_scrollObj != 'undefined' && dw_scrollObj.isSupported() ) {
	dw_Util.writeStyleSheet('css/scrollbar_h.css');
	dw_Event.add( window, 'load', init_dw_Scroll);
}

/**
 * Google Analytics
 * @ToDo: posar a _setAccount un compte de google analytics real
 **/
//var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
//(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
//g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
//s.parentNode.insertBefore(g,s)}(document,'script'));
