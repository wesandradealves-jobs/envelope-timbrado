var gallery = $(".gallery-navigation-inner"),
	nav = $("button[class*='control']"),
	i = 0,
	top,
	topPos,
	items = $("li");


// function disable(s, pos){
// 	gallery.closest(".gallery").find(nav).each(function( index ) {
// 		var btn = $(this),
// 			limit = btn.closest(".gallery").children().outerHeight() * btn.closest(".gallery").children().length;
// 		if(index == 0)
// 			btn.attr("disabled", s)
// 		else 
// 			btn.attr("disabled", ((pos > (-limit + btn.closest(".gallery").children().outerHeight())) ? false : true))
// 	});
// }	

$(document).ready(function () {
	gallery.find(items).each(function( index ) {
		var item = $(this),
			offset = item.offset(),
			bigImage = $(".gallery-big-image"),
			data = item.closest(gallery).children(),
			counter = parseInt(data.attr("data-scroll")),
			galHeight = item.closest(gallery).outerHeight();

		item.click(function() {
			var image = item.attr("style").substring(
				item.attr("style").lastIndexOf("(") + 1, 
				item.attr("style").lastIndexOf(")")
			);

			item.closest(gallery)
			.find(items).not(item).removeClass("-active");

			item.toggleClass("-active");

			item.closest(".gallery").find(bigImage).attr({"style" : "background-image:url("+ image +")", "data-magnify-src" : image});
		});
	}), gallery.closest(".gallery").find(nav).each(function( index ) {
		var nav = $(this),
			data = nav.closest(".gallery").find(gallery).children(),
			counter = parseInt(data.attr("data-scroll")),
			galHeight = nav.closest(".gallery").find(gallery).outerHeight(),
			item = gallery.find(items),
			limit = item.length * item.outerHeight();

		nav.click(function() {
            if(index == 1){
				if(parseInt(-data.attr("data-scroll")) >= -limit)
					data.attr("data-scroll", (parseInt(data.attr("data-scroll")) + item.outerHeight()));
            } else {
				if(parseInt(data.attr("data-scroll")) >= item.outerHeight())
					data.attr("data-scroll", (parseInt(data.attr("data-scroll")) - item.outerHeight()));
				else 
					data.attr("data-scroll", 0)
			} 
			data.css("top", -data.attr("data-scroll"));
		});
	});		
});
