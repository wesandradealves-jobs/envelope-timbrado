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

    e.find("[class*='angle-']").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
}
function showAddress(e){
    var e = $(e);
    e.closest(".address-item").toggleClass("-toggle")
    .find(".addres-item-details").toggleClass("-toggle");

    e.find("[class*='angle-']").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
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
    e.closest(".modal")
    .removeClass("-toggle")
    .removeClass("-cadastro")
    .find(".modal-inner").css("max-width", 466);

    e.closest(".modal").find("h3").html("");
    e.closest(".modal").find("#modal-inner-content").html("");

    checkBlur();
}
function remover(e){
    var botao = $(e),
        linha = botao.closest("ul").parent();

        linha.remove();
}
function modalOpen(e, post){
    var e = $(e),
        html,
        titulo,
        modal = $(".modal");

    switch(post){
        case 'login' :
            titulo = 'Acesse sua conta';
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
        break;
        case 'endereco' :
            titulo = 'Alterar endereço';
            html = '<form action="" class="forms -modal">';
              html += '<div class="column">';
                html += '<span>';
                html += '<label for="">CEP</label>';
                html += '<input class="cep" type="text" value="95020-450" />';
                html += '</span>';
                html += '<span>';
                html += '<label for="">Endereço</label>';
                html += '<input class="rua" type="text" value="RUA VINTE DE SETEMBRO">';
                html += '</span>';
                html += '<span class="numero-complemento">';
                html += '<span>';
                    html += '<label for="">Número</label>';
                    html += '<input type="number" value="3020" maxlength="6" />';
                html += '</span>';
                html += '<span>';
                    html += '<label for="">Complemento</label>';
                    html += '<input type="text" value="APTO, 54" />';
                html += '</span>';
                html += '</span>';
                html += '<span>';
                html += '  <label for="">Bairro</label>';
                html += '  <input class="bairro" type="text" value="Nossa Senhora de Lourdes" />';
                html += '</span>';
                html += '<span>';
                html += '  <label for="">Cidade</label>';
                html += '<span class="custom-select">';
                html += '    <select class="cidades" name="">';
                html += '    </select>';
                html += '</span> ';
                html += '</span>';
                html += '<span class="numero-complemento">';
                html += '  <span>';
                html += '    <label for="">UF</label>';
                html += '    <input onkeypress="mascara(this,soLetras)" class="uf" type="text" value="RS" maxlength="2" />';
                html += '  </span>';
                html += '  <span>';
                html += '    <label for="">Estado</label>';
                html += '    <span class="custom-select">';
                html += '        <select class="estados" name="">';
                html += '        </select>';
                html += '    </span> ';
                html += '  </span>';
                html += '</span>';
                html += '<span class="numero-complemento -telefone">';
                html += '  <span>';
                html += '    <label for="">Telefone</label>';
                html += '    <input class="telefone" type="text" value="(54) 99999999" />';
                html += '  </span>';
                html += '  <span>';
                html += '      <label for="">Celular</label>';
                html += '      <input class="celular" type="text" value="(54) 999999999" />';
                html += '  </span>';
                html += '</span>';
                html += '<span>';
                html += '    <button class="btn btn-1 -action"><span>Alterar este endereço</span> <i class="fa fa-angle-right"></i></button>';
                html += '</span>';
              html += '</div>';
            html += '</form>';
        break;
        case 'cadastro' :
            titulo = 'Cadastro';
                html = "<p>Preencha os campos abaixo para poder prosseguir com a sua compra</p>";
                html += '<ul class="tab-navigation -form">';
                    html += '<li class="-active"><a href="javascript:void(0)">Pessoa Física</a></li>';
                    html += '<li><a href="javascript:void(0)">Pessoa Jurídica</a></li>';
                html += '</ul>';
                html += '<div class="tab-content -form">';
                    html += '<div class="-active">';
                        html += '<form action="" class="forms -tabs">';
                        html += '<div class="column">';
                        html += '  <span>';
                        html += '    <label for="">Nome</label>';
                        html += '    <input onkeypress="mascara(this,soLetras)" type="text" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">Sobrenome</label>';
                        html += '    <input onkeypress="mascara(this,soLetras)" type="text" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">CPF</label>';
                        html += '    <input class="cpf" type="text" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">Razão Social</label>';
                        html += '    <input type="text" />';
                        html += '  </span>';
                        html += '<span>';
                            html += '  <label for="">Senha</label>';
                            html += '<input type="password" >';
                        html += '</span>';
                        html += '<span>';
                            html += '  <label for="">Confirme sua senha</label>';
                            html += '<input type="password" >';
                        html += '</span>';
                        html += '</div>';
                        html += '<div class="column">';
                        html += '  <span>';
                        html += '    <label for="">CEP</label>';
                        html += '    <input class="cep" type="text" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">Endereço</label>';
                        html += '    <input type="text" />';
                        html += '  </span>';
                        html += '<span class="numero-complemento">';
                        html += '  <span>';
                        html += '    <label for="">Número</label>';
                        html += '    <input type="number" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">Complemento</label>';
                        html += '    <input type="text" />';
                        html += '  </span>';
                        html += '</span>';
                        html += '<span>';
                        html += '  <label for="">Bairro</label>';
                        html += '  <input class="bairro" type="text" />';
                        html += '</span>';
                        html += '<span>';
                        html += '  <label for="">Cidade</label>';
                        html += '<span class="custom-select">';
                        html += '    <select class="cidades" name="">';
                        html += '    </select>';
                        html += '</span> ';
                        html += '</span>';
                        html += '<span class="numero-complemento">';
                        html += '  <span>';
                        html += '    <label for="">UF</label>';
                        html += '    <input onkeypress="mascara(this,soLetras)" class="uf" type="text" maxlength="2" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '    <label for="">Estado</label>';
                        html += '    <span class="custom-select">';
                        html += '        <select class="estados" name="">';
                        html += '        </select>';
                        html += '    </span> ';
                        html += '  </span>';
                        html += '</span>';
                        html += '<span class="numero-complemento -telefone">';
                        html += '  <span>';
                        html += '    <label for="">Telefone</label>';
                        html += '    <input class="telefone" type="text" />';
                        html += '  </span>';
                        html += '  <span>';
                        html += '      <label for="">Celular</label>';
                        html += '      <input class="celular" type="text" />';
                        html += '  </span>';
                        html += '</span>';
                        html += '<span>';
                        html += '    <button class="btn btn-1 -action"><span>Finalizar cadastro</span> <i class="fa fa-angle-right"></i></button>';
                        html += '</span>';
                        html += '</div>';
                        html += '</form>'
                    html += '</div>';
                    html += '<div class="">';
                    html += '<form action="" class="forms -tabs">';
                    html += '<div class="column">';
                    html += '  <span>';
                    html += '    <label for="">Nome</label>';
                    html += '    <input onkeypress="mascara(this,soLetras)" type="text" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">Sobrenome</label>';
                    html += '    <input onkeypress="mascara(this,soLetras)" type="text" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">CNPJ</label>';
                    html += '    <input class="cnpj" type="text" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">Razão Social</label>';
                    html += '    <input type="text" />';
                    html += '  </span>';
                        html += '<span>';
                            html += '  <label for="">Senha</label>';
                            html += '<input type="password" >';
                        html += '</span>';
                        html += '<span>';
                            html += '  <label for="">Confirme sua senha</label>';
                            html += '<input type="password" >';
                        html += '</span>';
                    html += '</div>';
                    html += '<div class="column">';
                    html += '  <span>';
                    html += '    <label for="">CEP</label>';
                    html += '    <input class="cep" type="text" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">Endereço</label>';
                    html += '    <input type="text" />';
                    html += '  </span>';
                    html += '<span class="numero-complemento">';
                    html += '  <span>';
                    html += '    <label for="">Número</label>';
                    html += '    <input type="number" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">Complemento</label>';
                    html += '    <input type="text" />';
                    html += '  </span>';
                    html += '</span>';
                    html += '<span>';
                    html += '  <label for="">Bairro</label>';
                    html += '  <input class="bairro" type="text" />';
                    html += '</span>';
                    html += '<span>';
                    html += '  <label for="">Cidade</label>';
                    html += '<span class="custom-select">';
                    html += '    <select class="cidades" name="">';
                    html += '    </select>';
                    html += '</span> ';
                    html += '</span>';
                    html += '<span class="numero-complemento">';
                    html += '  <span>';
                    html += '    <label for="">UF</label>';
                    html += '    <input onkeypress="mascara(this,soLetras)" class="uf" type="text" maxlength="2" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '    <label for="">Estado</label>';
                    html += '    <span class="custom-select">';
                    html += '        <select class="estados" name="">';
                    html += '        </select>';
                    html += '    </span> ';
                    html += '  </span>';
                    html += '</span>';
                    html += '<span class="numero-complemento -telefone">';
                    html += '  <span>';
                    html += '    <label for="">Telefone</label>';
                    html += '    <input class="telefone" type="text" />';
                    html += '  </span>';
                    html += '  <span>';
                    html += '      <label for="">Celular</label>';
                    html += '      <input class="celular" type="text" />';
                    html += '  </span>';
                    html += '</span>';
                    html += '<span>';
                    html += '    <button class="btn btn-1 -action"><span>Finalizar cadastro</span> <i class="fa fa-angle-right"></i></button>';
                    html += '</span>';
                    html += '</div>';
                    html += '</form>'
                    html += '</div>';
                html += '</div>', modal.addClass("-cadastro").children().css("max-width", 806);
        break;
        default :
    }
    modal.find(".modal-inner-content").html(html),
    modal.find("h3").html(titulo);

    $(".modal").addClass("-toggle");
    tabs();
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
$(document).mouseup(function (e){
    var container = $(".modal-inner");
    if (!container.is(e.target)
    && container.has(e.target).length === 0)
    {
        modalClose(container);
    }
});
$(window).on("resize", function () {
    $(".-on").removeClass("-on");
});
// $.getJSON('estados_cidades.json', function (data) {
//     var items = [];
//     var options = '<option value="">Escolha um estado</option>';
//     $.each(data, function (key, val) {
//         options += '<option value="' + val.nome + '">' + val.nome + '</option>';
//     });
//     $(".estados").html(options);

//     $(".estados").change(function () {

//         var options_cidades = '';
//         var str = "";

//         $(".estados option:selected").each(function () {
//             str += $(this).text();
//         });

//         $.each(data, function (key, val) {
//             if(val.nome == str) {
//                 $.each(val.cidades, function (key_city, val_city) {
//                     options_cidades += '<option value="' + val_city + '">' + val_city + '</option>';
//                 });
//             }
//         });
//         $(this).closest("form").find(".cidades").html(options_cidades);

//     }).change();

// });
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
function rating(){
    $(".rating-stars").find("input").each(function ( index ) {
        var input = $(this);
        input.click(function() {
            input.parent().nextAll().find("input").prop("checked", false)
            if(input.is(":checked"))
                input.parent().prevAll().find("input").prop("checked", true)
        });
    });
}

$(document).ready(function () {
    $('.owl-slideshow:not(.tab-slide)').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ["<i class='owl-prev-arrow'><img src='assets/imgs/thin-arrow.png'/></i>","<i class='owl-next-arrow'><img src='assets/imgs/thin-arrow.png'/></i>"]
    });
    $('.owl-carousel.porque-slider').owlCarousel({
        loop: false,
        margin: 70,
        nav: true,
        navText: ["<i class='owl-prev-arrow fa fa-angle-left'></i>","<i class='owl-next-arrow fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items: 1
            },
            736:{
                items: 2
            },
            990:{
                items: 3
            },
            1280:{
                items: 4
            }
        }
    });
    $('.owl-slideshow.tab-slide').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: ["<i class='owl-prev-arrow fa fa-angle-left'></i>","<i class='owl-next-arrow fa fa-angle-right'></i>"]
    });
    $(".webdoor, .tab-slide").find(".owl-dots").appendTo($(".webdoor .owl-stage-outer"));
    $(".webdoor, .tab-slide").find(".owl-nav").appendTo($(".webdoor .owl-stage-outer"));
    $('.telefone').mask('(99) 9999-9999');
    $('.celular').mask('(99) 9-9999-9999');
    $('.cpf').mask('999.999.999-99');
    $('.cep').mask('99.999-999');
    $('.ano').mask('9999');
    $('.dia').mask('99');
    checkBlur();
    rating();
    $("#randomQti").focus(function() {
        $(this).closest("ul").find("input").prop("checked", false)
    }).keypress(function() {
        $(this).closest("ul").find("input").prop("checked", false)
    });
    $("[name*='qti_choice']").click(function() {
        $(this).closest("ul").find("#randomQti").val("")
    });
    if($(".side-navigation").length)
        var el = $(".side-navigation"),
            page = $('body').attr('class').split(" ")[0];

        $('.side-navigation li[class]').each(function ea(){
            for (var i = 0; i < el.children().length; i++) {
                if($(this).attr("class") == page)
                    $(this).addClass("-active")
            }
        });
});

