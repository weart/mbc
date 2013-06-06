window.ButtonsView = Backbone.View.extend({
	el: "#logos",
	events: {
		"click .tr_ico": "btn_translate",
		"translate" : 'do_translate'
	},
	btn_translate: function(e) {
		window.routing.navigate("lang/" + $(e.currentTarget).attr('lang'), {trigger: true});
//		this.do_translate($(e.currentTarget).attr('lang'));
	},
	do_translate: function(lang) {
		log('oi: '+lang);
		log(this['tr_'+lang]);
		//translate(lang);
		this['tr_'+lang]();
	},
	tr_ca: function() {
		$(".tr_ico[lang='es']").attr('src','images/BOTO_esp1.png');
		$(".tr_ico[lang='en']").attr('src','images/BOTO_eng1.png');
		$(".tr_ico[lang='ca']").attr('src','images/BOTO_cat2.png');
	},
	tr_es: function() {
		$(".tr_ico[lang='ca']").attr('src','images/BOTO_cat1.png');
		$(".tr_ico[lang='en']").attr('src','images/BOTO_eng1.png');
		$(".tr_ico[lang='es']").attr('src','images/BOTO_esp2.png');
	},
	tr_en: function() {
		$(".tr_ico[lang='es']").attr('src','images/BOTO_esp1.png');
		$(".tr_ico[lang='ca']").attr('src','images/BOTO_cat1.png');
		$(".tr_ico[lang='en']").attr('src','images/BOTO_eng2.png');
	}
});

window.LogosView = Backbone.View.extend({
	el: 'header',
	events: {
		"click #menu_superior dl dt": "clickBtn",
		"click #logos .info": "clickBtn",
	},
	clickBtn: function(e) {
		window.routing.goTo($(e.currentTarget).data('href'));
	}
});

/*window.Views = Backbone.View.extend({
//	el: 'body',
	initialize: function(options) {
		this.buttonsView = new window.ButtonsView();
		this.logosView = new window.LogosView();
	}
});*/