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

function openCard(id){
    $('#' + id + " .card__over").css("display","block");
    $('#' + id + " .card__button-plus").css("display","none");
    $('#' + id + " .card__title").css("display","none");
}

function closeCard(id){
    $('#' + id + " .card__over").css("display","none");
    $('#' + id + " .card__button-plus").css("display","block");
    $('#' + id + " .card__title").css("display","block");
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
        // event.preventDefault();
        // var id  = $(this).attr('href'),
        //     top = $(id).offset().top;
        
        // $('body').scrollTo(id);
    });

});

$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        $('.logo-data').css("color","black");
        $('.number').css("color","black");
        $('header').css("background-color","#fff");
        // $( ".header__menu>ul>li>a" ).hover(function() {
        //     $( this ).css("color","#5878ef");
        // });
    }
    else {
        $('.logo-data').css("color","white");
        $('.number').css("color","white");
        $('header').css("background-color","transparent");
        // $( ".header__menu > ul > li > a" ).hover(function() {
        //     $( this ).css("color","#fff");
        // });
    }
});