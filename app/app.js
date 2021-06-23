$(function(){
  //  Инициализация верхнего слайдера
  $(".banner__slider-inner").slick({
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 640,
      settings: {
        arrows: false
      }
    }],  
    // autoplay: true,
    prevArrow: `<button class="banner-slider__arrow banner__slider-left__arrow"><img src="images/arrow-left.svg" alt=""></button>`,
    nextArrow: `<button class="banner-slider__arrow banner__slider-right__arrow"><img src="images/arrow-right.svg" alt=""></button>`
  });

  
  //  Переключение табов
  $(".tab").on('click', function(e){
    e.preventDefault();
    $(this).siblings().removeClass("tab--active");
    $(this).parents(".tabs-wrp").siblings().find(".tab-item").removeClass("tab-item--active");
    
    
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tab-item--active");
    //$("#search__tabs-1")
  });

  


  //  Переинициализация slick при нажатии на .tab
  $(".tab").on('click', function(){
    if($(".tab-item").is(':visible')){
      setTimeout(function(){
        $(".product-slider").slick("setPosition");
        $(window).resize();
      },50)
    }
  });


  //  Устанавливаем заращенное сердечко при клике
  $(".product-item__favorite").on('click', function(){
    $(this).toggleClass('product-item__favorite--active');
  });

  //  Заглушка при клике на кнопку - сообщить о поступлении
  $(".product-item__not-available-link").on('click', function(e){
    e.preventDefault();
    console.log("Соощить о поступлении");
  })


  //  Инициализация слайдера - популярные товары
  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // autoplay: true,
    responsive: [{
      breakpoint: 1270,
      settings: {
        slidesToShow: 4,
        infinite: true,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    },{
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }],
    prevArrow: `<button class="product-slider__arrow product__slider-left__arrow"><img src="images/arrow-black-left.svg" alt=""></button>`,
    nextArrow: `<button class="product-slider__arrow product__slider-right__arrow"><img src="images/arrow-black-right.svg" alt=""></button>`
  });


  //  Разворачивание блоков фильтра товаров
  $(".filter__title").on('click', function(){
    $(this).siblings(".filter__inner-wrp").slideToggle(200);
    $(this).toggleClass("slided");
  });

  //  Ползунок диапазона цены
  $(".js-range-slider").ionRangeSlider({
    onStart: function(data){
      $(".rage__info-data")[0].innerHTML = data.min;
      $(".rage__info-data")[1].innerHTML = data.max;
    },
    step: 500,
    prettify_enabled: true,
    prettify_separator: " ",
  });

  //  Запуск плагина styler
  $(".styler").styler();

  // $(".catalog__items-sort-select").styler();


  $(".filter__more").on('click', function(e){
    e.preventDefault();
  })


  $(".filter__main-dops").on('click', function(e){
    e.preventDefault();
    $(".filter__inner-wrp--def-closed").slideToggle();
  });

  $(".catalog__items-tabs-view__btn").on('click', function(){
    $(".catalog__items-tabs-view__btn").removeClass("catalog__items-tabs-view__btn--active");
    $(this).toggleClass('catalog__items-tabs-view__btn--active');
  });
  
  $(".catalog__items-tabs-view__btn").on('click', function(){
    if($(this).hasClass("line")){
      $(".prod__wrp").addClass("product__list-type");
    }else{
      $(".prod__wrp").removeClass("product__list-type");  
    }
  });


  //  Звездный рейтинг
  // if($("#rateYo").lenght){
    $("#rateYo").rateYo({
      rating: 4.6,
      // rating: parseFloat(document.querySelector("#rateYo").getAttribute("data-rate")),
      starWidth: "23px",
      spacing   : "7px",
      normalFill: '#C4C4C4',
      ratedFill: '#1C62CD',
      readOnly: true
    });
  // }
  //  END. Звездный рейтинг

  $(".product__cart-favorite").on('click', function(){
    $(this).toggleClass("product__cart-favorite--checked");
  });

  //  Mobile menu button
  $(".mobile__menu-btn").on('click', function(){
    $(".mobile__menu-wrp").toggleClass("mobile__menu-wrp--active");
  });

  
  $(".top__item-title:not(.top__item-title-main)").on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('top__item-title--active');
  });
  
  $(".filter-slider-btn").on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass("filter-slider-btn--active");
  })
});

