function tabs(){
    $(".tab-navigation").children().each(function ( index ) {
        var tab = $(this);
        tab.click(function() {
            tab.parent().find(".-active").not(tab).removeClass("-active");
            tab.addClass("-active");

            tab.closest(".tabs").find(".tab-content").children().removeClass("-active");
            tab.closest(".tabs").find(".tab-content").children().eq(tab.index()).addClass("-active");

        });
    });
}

$(document).ready(function () {
    tabs();
});