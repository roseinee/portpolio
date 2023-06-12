$(function(){
   //background color
   let open = $('.ball .open');
   let close = $('.ball .close');
   let card = $('.ball .card');
   let hd = $('header');
   let graphic = $('.graphic');
   let itemTop = $('.item_top');
   let itemBottom = $('.item_bottom');
   console.log(itemTop)
   console.log(itemBottom)
   let headerTop = hd.offset().top;
   console.log(headerTop) //80
   //화면 스크롤 했을 때
   $(window).scroll(function () {

     //스크롤바의 주기적인 변화 수치 변수로 잡기
     let scrollBar = $(window).scrollTop() + 10; //스크롤바 y축값
     //화면 스크롤 했을 때 실행
     //0보다 scrollbar가 가지는 값이 더 클 때(if문: 조건 맞을 때 실행)
     //header에게 .on추가 
     if (headerTop < scrollBar) {
       $('body').addClass('on');
     } else
       $('body').removeClass('on');

     if (headerTop < scrollBar) {
       $('.graphic').addClass('on');
     } else
       $('.graphic').removeClass('on');

     //graphic

     if (graphic.offset().top <= scrollBar) {
       itemTop.each(function (index) {
         $(this).addClass('on' + index)
       })
     }

     if (graphic.offset().top <= scrollBar) {
       itemBottom.each(function (index) {
         $(this).addClass('on' + index)
       })
     }


   })
   close.mouseenter(function () {
     open.addClass('on');
     card.addClass('on');
     close.css('display', 'none');
   });

   //web_design
   var swiper = new Swiper(".web_bottom", {
     loop: true,
     spaceBetween: 40,
     slidesPerView: 3,
     freeMode: true,
     watchSlidesProgress: true,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

   var swiper2 = new Swiper(".web_ds", {
     loop: true,
     spaceBetween: 10,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     thumbs: {
       swiper: swiper,
     },
   });

   //editor
   var swiper3 = new Swiper(".ed_img", {
     slidesPerView: 2.5,


     autoplay: {
       delay: 2500,

     },
   });
})