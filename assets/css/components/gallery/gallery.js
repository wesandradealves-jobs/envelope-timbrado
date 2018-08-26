var gallery = $(".gallery-navigation-inner"),
	nav = $("button[class*='control']"),
	i = 0,
	items = $("li");

function ctrl(s){
	gallery.parent().find(nav).each(function( index ) {
		var btn = $(this);
		if(index == 0)
			if(!s)
				btn.attr("disabled", true)
			else 
				btn.attr("disabled", s)
	});		
};

$(document).ready(function () {
	ctrl(false);
	gallery.find(items).each(function( index ) {
		var item = $(this),
			offset = item.offset(),
			galHeight = item.closest(gallery).outerHeight();

		item.click(function() {

			if(offset.top > galHeight)
				ctrl(false),
				item.closest(gallery).children().css({'top': -item.outerHeight() * index});
			else 
				ctrl(true),
				item.closest(gallery).children().css({'top': 0});

			item.closest(gallery)
			.find(items).not(item).removeClass("-active");

			item.toggleClass("-active");
		});
	});
});