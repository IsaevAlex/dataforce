/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("left-sidebar").style.width = "300px";
    document.getElementsByClassName("hamburger-icon")[0].style.display = 'none';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("left-sidebar").style.width = "0";
    document.getElementsByClassName("hamburger-icon")[0].style.display = 'block';
}

function openCard(){
    $(".card__over").css("display","block");
    $(".card__button-plus").css("display","none");
    $(".card__title").css("display","none");
}

$(document).ready(function(){
    $(".header").on("click","a", function (event) {
        $(".left-sidebar").css( "width", "0" );
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".left-sidebar").on("click","a", function (event) {
        $(".left-sidebar").css( "width", "0" );
        $(".hamburger-icon").css( "display", "block" );
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});

$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        $('.logo-data').css("color","black");
        $('.number').css("color","black");
    }
    else {
        $('.logo-data').css("color","white");
        $('.number').css("color","white");
    }
});