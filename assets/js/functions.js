function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function soLetras(v){
    return v.replace(/\d/g,"") //Remove tudo o que não é Letra
}
function sendWPP(e){   
    var e = $(e);
    // var telefone = "5521997983711";
    // var saudacao = "Olá! Meu nome é";
    // var name = document.getElementById("user_nome").value;
    // var email = document.getElementById("user_email").value;
    // var msg = document.getElementById("user_msg").value;		
    // var saudacaoencode = encodeURI(saudacao);		
    // var url_base = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + saudacaoencode + "%20" + encodeURI(name) + "%20e%20" + encodeURI(msg);
    window.open(url_base)
}   
function envelopes(e){
    var e = $(e);
    $(".envelope-nav").toggleClass("-on");
    e.parent().toggleClass("-on");
}
$(document).mouseup(function (e){
    var container = $(".envelope-anchor, .envelope-nav");
    if (!container.is(e.target) 
    && container.has(e.target).length === 0) 
    {
        $(".-on").removeClass("-on")
    }
});
$(window).on("resize", function () {
    $(".-on").removeClass("-on");      
});
$(document).ready(function () {
    $('.owl-slideshow').owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        loop: true,
        navigationText: ["<i class='owl-prev-arrow fas fa-angle-left'></i>","<i class='owl-next-arrow fas fa-angle-right'></i>"]
    });
    $(".webdoor").find(".owl-pagination").appendTo($(".webdoor .owl-wrapper-outer"));
    $(".webdoor").find(".owl-buttons").appendTo($(".webdoor .owl-wrapper-outer"));
    $(".webdoor").find(".owl-controls").remove();
});
      
      