function init_dw_Scroll() {
	// arguments: id of scroll area div, id of content div
	window.dw_scrollObjInstance = new dw_scrollObj('wn', 'lyr1');
	// args: id, axis ('v' or 'h'), eType (event type for arrows), 
	// bScrollbar (include track and dragBar? true or false)
	dw_scrollObjInstance.buildScrollControls('scrollbar', 'h', 'mouseover', true);
}

// if code supported, link in the style sheet (optional) and call the init function onload
if ( dw_scrollObj.isSupported() ) {
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
