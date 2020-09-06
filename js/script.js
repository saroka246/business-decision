$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        slidesToShow:4,
        variableWidth: true,
        speed: 600
    });
    $('.card-gallery').slick({
        arrows:true,
        slidesToShow:1,
        speed: 600
    });
    $('.specialist__slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:1,
        speed: 600
    });
    $('.number__all').spincrement({
        thousandSeparator: "",
        duration: 3489
    });
    $('.number__week').spincrement({
        thousandSeparator: "",
        duration: 15
    });
    $('.number__month').spincrement({
        thousandSeparator: "",
        duration: 13
    });
});
$(function(){
  $(".phone-input").mask("+7(999) 999-9999");
});



$('body').scroll(function(e) {
   if($('body').scrollTop()>600) {
     $('.tabs__title').addClass('animate__animated animate__backInDown');
   } 
    if($('body').scrollTop()>4200) {
     $('.figure__img').addClass('animate__animated animate__fadeInRight');
        
        
        
   }
    if($('body').scrollTop()>=4250){
       
    }
});


