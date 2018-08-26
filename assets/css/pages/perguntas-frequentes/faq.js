var faq = $(".faq").children();

$(document).mouseup(function (e){
    if (!faq.is(e.target) 
    && faq.has(e.target).length === 0) 
    {
        if(faq.is(".-toggle"))
            faq.removeClass("-toggle")
    }
});
$(window).on("resize", function () {
    if(faq.is(".-toggle"))
        faq.removeClass("-toggle")
});
$(document).ready(function () {
    faq.each(function() {
        var item = $(this);
        item.click(function() {
            item.closest("ul").find(".-toggle").not(item).removeClass("-toggle"),
            item.toggleClass("-toggle")
        });
    }); 
});