//$(document).ready(function () {
//
//    var classActive = 'active';
//
//    $('.animais .tab-menu a').first().addClass(classActive);
//    $('.animais .item').first().addClass(classActive);
//
//    $('.animais .tab-menu a').click(function (e) {
//        e.preventDefault();
//        var itemId = $(this).attr('href');
//
//        $('.animais .tab-menu a, .item').removeClass(classActive);
//        $(this).addClass(classActive);
//        $(itemId).addClass(classActive);
//    });
//
//    $('.florestas .tab-menu a').first().addClass(classActive);
//    $('.florestas .item').first().addClass(classActive);
//
//    $('.florestas .tab-menu a').click(function (e) {
//        e.preventDefault();
//        var itemId = $(this).attr('href');
//
//        $('.florestas .tab-menu a, .item').removeClass(classActive);
//        $(this).addClass(classActive);
//        $(itemId).addClass(classActive);
//    });
//
//});

$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        acitiveClass = 'active';
    
    $allTarget.first().addClass(acitiveClass);
    $allClick.first().addClass(acitiveClass);
    
    $allClick.click(function(e){
        e.preventDefault();
        var id = $(this).data('click'),
            $target = $('[data-target="'+ id + '"]');
        
        $allClick.removeClass(acitiveClass);
        $allTarget.removeClass(acitiveClass);
        
        $target.addClass(acitiveClass);
        $(this).addClass(acitiveClass);
    })
});