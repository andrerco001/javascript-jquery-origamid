//$('.abrir-modal').click(function(){
//    $('.modal').toggleClass('active');
//    var condicao = $('.modal').hasClass('active');
//    if(condicao){
//        $(this).text('Fechar Modal');
//    } else {
//        $(this).text('Abrir Modal');
//    }
//});

//$('a').attr('alt', 'Imagem castelo');

// $('img').removeAttr('src');

// .val() define valores
//$('#botao').click(function(){
//    var nome = $('.nome').val();
//    $('.btn').text(nome);
//});

//$('input').remove();

// to get
// var psize = $('p').css('font-size');
// console.log(psize);

// set
$('p').css({
    'font-size' : '18px',
    'font-family' : 'verdana',
    'color' : 'blue',
    'background-color' : 'yellow'
});

// scroll
//$(document).on('scroll', function(){
//    var distancia = $(this).scrollTop();
//    // $('.modal').css('height', distancia * 10 + 'px');
//    console.log(distancia);
//});

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);
})




