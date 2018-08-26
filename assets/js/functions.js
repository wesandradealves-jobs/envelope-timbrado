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
function showDetails(e){
    var e = $(e);
    e.closest(".order-list-item").toggleClass("-toggle")
    .find(".order-list-details").toggle();

    e.find(".fa-angle-down").toggleClass("fa-angle-up");
}
function showAddress(e){
    var e = $(e);
    e.closest(".address-item").toggleClass("-toggle")
    .find(".addres-item-details").toggleClass("-toggle");

    e.find(".fa-angle-down").toggleClass("fa-angle-up");
}
function checkBlur(){
    if($("body .modal.-toggle").length){
        $("#wrap").addClass("-blur");
    } else {
        $("#wrap").removeClass("-blur");
    }    
}
function modalClose(e){
    var e = $(e);
    e.closest(".modal").removeClass("-toggle");
    e.closest(".modal").find("#modal-inner-content").html("");
    checkBlur();
}
function modalOpen(e, modal){
    var e = $(e),
        html,
        modal = $(".modal");
    switch(modal){
        case modal :
            html = '<form action="acompanhe-seu-pedido.html" class="forms -modal">';
              html += '<div class="column">';
                html += '<span>';
                  html += '<input type="email" placeholder="Seu e-mail">';
                html += '</span>';
                html += '<span>';
                  html += '<input type="password" placeholder="Sua senha">'; 
                html += '</span>';
                html += '<span>';
                  html += '<button class="btn btn-1"><span>Acessar</span></button>';
                html += '</span>';
              html += '</div>';
            html += '</form>';
            modal.find(".modal-inner-content").html(html)
        break;
        default :
    }
    $(".modal").addClass("-toggle");
    checkBlur();
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
$.getJSON('estados_cidades.json', function (data) {
    var items = [];
    var options = '<option value="">Escolha um estado</option>';    
    $.each(data, function (key, val) {
        options += '<option value="' + val.nome + '">' + val.nome + '</option>';
    });                 
    $(".estados").html(options);                
    
    $(".estados").change(function () {              
    
        var options_cidades = '';
        var str = "";                   
        
        $(".estados option:selected").each(function () {
            str += $(this).text();
        });
        
        $.each(data, function (key, val) {
            if(val.nome == str) {                           
                $.each(val.cidades, function (key_city, val_city) {
                    options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
                });                         
            }
        });
        $(this).closest("form").find(".cidades").html(options_cidades);
        
    }).change();        

});
// Autocomplete CEP
// function limpa_formulário_cep() {
//     $(".cep").val("");
//     $(".rua").val("");
//     $(".bairro").val("");
//     $(".cidade").val("");
//     $(".uf").val("");
// }   
// $( ".cep" ).each(function() {
//     $(this).blur(function() {
//         //Nova variável "cep" somente com dígitos.
//         var cep = $(this).val().replace(/\D/g, '');

//         //Verifica se campo cep possui valor informado.
//         if ($(this).val() != "") {

//             //Expressão regular para validar o CEP.
//             var validacep = /^[0-9]{8}$/;

//             //Valida o formato do CEP.
//             if(validacep.test(cep)) {

//                 //Preenche os campos com "..." enquanto consulta webservice.
//                 $(this).closest($("form")).find(".rua").val("...");
//                 $(this).closest($("form")).find(".bairro").val("...");
//                 $(this).closest($("form")).find(".cidade").val("...");
//                 $(this).closest($("form")).find(".uf").val("...");

//                 //Consulta o webservice viacep.com.br/
//                 $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

//                     if (!("erro" in dados)) {
//                         //Atualiza os campos com os valores da consulta.
//                         $(this).closest($("form")).find(".rua").val(dados.logradouro);
//                         $(this).closest($("form")).find(".bairro").val(dados.bairro);
//                         $(this).closest($("form")).find(".cidade").val(dados.localidade);
//                         $(this).closest($("form")).find(".uf").val(dados.uf);
//                         console.log(dados);
//                     } //end if.
//                     else {
//                         //CEP pesquisado não foi encontrado.
//                         limpa_formulário_cep();
//                         alert("CEP não encontrado.");
//                     }
//                 });
//             } //end if.
//             else {
//                 //cep é inválido.
//                 limpa_formulário_cep();
//                 alert("Formato de CEP inválido.");
//             }
//         } //end if.
//         else {
//             //cep sem valor, limpa formulário.
//             limpa_formulário_cep();
//         }
//     });   
// });
$(document).ready(function () {
    $('.owl-slideshow').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ["<i class='owl-prev-arrow'><img src='assets/imgs/thin-arrow.png'/></i>","<i class='owl-next-arrow'><img src='assets/imgs/thin-arrow.png'/></i>"]
    });
    $(".webdoor").find(".owl-dots").appendTo($(".webdoor .owl-stage-outer"));
    $(".webdoor").find(".owl-nav").appendTo($(".webdoor .owl-stage-outer"));
    $('.telefone').mask('(99) 9999-9999');
    $('.celular').mask('(99) 9-9999-9999');
    $('.cpf').mask('999.999.999-99');
    $('.cep').mask('99.999-999');
    $('.ano').mask('9999');
    $('.dia').mask('99');
    checkBlur();
});
      
      