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

// open modal
var  wrap = $('body'),
     btn = $('.open-modal-btn'),
     modal = $('.modalDialog__cover, .modalDialog, .modalDialog__content');
     modal2 = $('.modalDialog__cover, .modalDialog-2, .modalDialog-2__thanks');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modalDialog-2').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modalDialog-2__thanks');
    if ($(event.target).closest(select).length)
      return;
    modal2.fadeOut();
    wrap.unbind('click');
  });
});

// close modal
$('.modalDialog').click(function() {
  wrap.on('click', function(event) {
    var select = $('.modalDialog__content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});

$('form').on('submit', function() {
    modal.fadeOut();
    console.log("Jnghfdbkjcm");
    modal2.fadeIn();
});

function openCard(id){
    $('#' + id + " .card__over").css("display","block");
    $('#' + id + " .card__button-plus").css("display","none");
    $('#' + id + " .card__title").css("display","none");
}

// function clickAdvantage(id){
//     switch(id){
//         case 1:
//             $(".advantage-energy").css("background-image", "url('../images/third-section__icon-1-active.png')");     
//             break;
//         case 2:
//             $(".advantage-count").css("background-image", "url('../images/third-section__icon-2-active.png')");
//             break;
//         case 3:
//             $(".advantage-price").css("background-image", "url('../images/third-section__icon-3-active.png')");
//             break;
//         case 4:
//             $(".advantage-service").css("background-image", "url('../images/third-section__icon-4-active.png')");
//             break;
//         default:
//             console.log( 'Я таких значений не знаю' );
//     }
// }


function closeCard(id){
    $('#' + id + " .card__over").css("display","none");
    $('#' + id + " .card__button-plus").css("display","block");
    $('#' + id + " .card__title").css("display","block");
}

$(document).ready(function(){
    $(".advantage-item").on("click","a", function (event) {
        $(this).attr("class", 'advantage-energy-click');
    });
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
     if ($(window).scrollTop() > 50) {
        $('.logo-data').css("color","black");
        $('.logo-letter').removeClass('logo-letter-white');
        $('.logo-letter').addClass('logo-letter-black');
        $('.number').css("color","black");
        $('header').css("background-color","#fff");
        $(".header__menu > ul > li > a").removeClass('header__menu-hover-white');
        $(".header__menu > ul > li > a").addClass('header__menu-hover-dark');
    }
    else {
        $('.logo-data').css("color","white");
        $('.logo-letter').removeClass('logo-letter-black');
        $('.logo-letter').addClass('logo-letter-white');
        $('.number').css("color","white");
        $('header').css("background-color","transparent");
        $(".header__menu > ul > li > a").removeClass('header__menu-hover-dark');
        $(".header__menu > ul > li > a").addClass('header__menu-hover-white');
    }
});