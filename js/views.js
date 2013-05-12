window.ButtonsView = Backbone.View.extend({
	el: "#logos",
	events: {
		"click .tr": "btn_translate"
	},
	btn_translate: function(e) {
		window.routing.navigate("lang/" + $(e.currentTarget).attr('lang'), {trigger: true});
//		this.do_translate($(e.currentTarget).attr('lang'));
	},
	do_translate: function(lang) {
		window.log('oi');
		translate(lang);
		this['tr_'+lang]();
	},
	tr_ca: function() {
		$(".tr[lang='es']").attr('src','images/BOTO_esp1.png');
		$(".tr[lang='en']").attr('src','images/BOTO_eng1.png');
		$(".tr[lang='ca']").attr('src','images/BOTO_cat2.png');
	},
	tr_es: function() {
		$(".tr[lang='ca']").attr('src','images/BOTO_cat1.png');
		$(".tr[lang='en']").attr('src','images/BOTO_eng1.png');
		$(".tr[lang='es']").attr('src','images/BOTO_esp2.png');
	},
	tr_en: function() {
		$(".tr[lang='es']").attr('src','images/BOTO_esp1.png');
		$(".tr[lang='ca']").attr('src','images/BOTO_cat1.png');
		$(".tr[lang='en']").attr('src','images/BOTO_eng2.png');
	}
});

window.MenuView = Backbone.View.extend({
	el: "#menu_superior dl dt",
	events: {
		"click": "clickFn"
	},
	clickFn: function(e) {
		window.routing.goTo($(e.currentTarget).data('href'));
	}
});