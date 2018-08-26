var gallery = $(".gallery-navigation-inner"),
	nav = $("button[class*='control']"),
	i = 0,
	items = $("li");

function ctrl(s){
	gallery.parent().find(nav).each(function( index ) {
		var btn = $(this);
		if(index == 0)
			btn.attr("disabled", s)
	});		
}, ctrl(true);

$(document).ready(function () {
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