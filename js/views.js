window.ButtonsView = Backbone.View.extend({
	el: "#logos",
	events: {
		"click .tr_ico": "btn_translate"
//		"translate" : 'chg_btn_imgs'
	},
	initialize: function(options) {
		Backbone.on('translate',this.chg_btn_imgs);
	},
	btn_translate: function(e) {
		window.routing.navigate("lang/" + $(e.currentTarget).attr('lang'), {trigger: true});
//		this.do_translate($(e.currentTarget).attr('lang'));
	},
	chg_btn_imgs: function(lang) {
		$(".tr_ico").not("[lang='"+lang+"']").removeClass('active');
		$(".tr_ico[lang='"+lang+"']").addClass('active');
	}
});

window.LogosView = Backbone.View.extend({
	el: 'header',
	events: {
		"click [data-href]": "clickBtn",
	},
	clickBtn: function(e) {
		var url = $(e.currentTarget).data('href');
		if(_.isString(url) && url.length > 0) {
			window.routing.goTo(url);
		} else log('Wrong data-href: '+url);
	}
});

/*window.Views = Backbone.View.extend({
//	el: 'body',
	initialize: function(options) {
		this.buttonsView = new window.ButtonsView();
		this.logosView = new window.LogosView();
	}
});*/