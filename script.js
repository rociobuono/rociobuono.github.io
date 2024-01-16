// Cambia la clase del navbar al hacer scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});
//Tooltip Instagram
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

