$(document).ready(function () {
    if($("body").is(".pg-produto")){
        $(window).scroll(function(event){
            var st = $(this).scrollTop();

            var tabs = $(".tabs"),
                sidebar = $(".config-sidebar"),
                edges = sidebar.closest(".container").offset().left,
                footer = $("footer").offset().top,
                limit = st + sidebar.outerHeight(),                
                offset = tabs.offset().top + $(".header").outerHeight();
            if(st > offset && sidebar.closest(".tab").is(".-active") && $(window).width() >= 1336 && limit <= (footer-100)){
                if(!tabs.is(".sticky"))
                    tabs.addClass("sticky")
                    .find(sidebar).css("right", edges + 104);
            } else {
                tabs.removeClass("sticky")
                .find(sidebar).css("right", 0)
            }
        }); 
        $(window).resize(function() {
            var tabs = $(".tabs"),
                sidebar = $(".config-sidebar"),
                edges = sidebar.closest(".container").offset().left,
                offset = tabs.offset().top + $(".header").outerHeight();
            if(st > offset && sidebar.closest(".tab").is(".-active") && $(window).width() >= 1336){
                if(tabs.is(".sticky"))
                    tabs.find(sidebar).css("right", edges + 104)
            } else {
                tabs.find(sidebar).css("right", 0)
            }
        });
    }
});