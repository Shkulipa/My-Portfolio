
$(function(){
   
  

    $(".Homepage__right__side__coll#resume").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").addClass("move--right");
        $(".Homepage__left__side").addClass("move--left");
        $(".Homepage").css({display: "none"});
        $(".Resume").css({display: "flex"});
        $(window).scrollTop(0);   
    });

    $(".Homepage__right__side__coll#portfolio").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").addClass("move--right");
        $(".Homepage__left__side").addClass("move--left");
        $(".Homepage").css({display: "none"});
        $(".Portfolio").css({display: "flex"});
        $(window).scrollTop(0);  
    });

    $(".Homepage__right__side__coll#contact").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").addClass("move--right");
        $(".Homepage__left__side").addClass("move--left");
        $(".Homepage").css({display: "none"});
        $(".Contact").css({display: "flex"});
        $(window).scrollTop(0);  
    });

    $(".Resume__close#close").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").removeClass("move--right");
        $(".Homepage__left__side").removeClass("move--left");
        $(".Homepage").css({display: "flex"});
        $(".Resume").css({display: "none"});

    });

    $(".Contact__close#close").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").removeClass("move--right");
        $(".Homepage__left__side").removeClass("move--left");
        $(".Homepage").css({display: "flex"});
        $(".Contact").css({display: "none"});

    });

    $(".Portfolio__close#close").click(function(event){
      event.preventDefault();

        $(".Homepage__right__side").removeClass("move--right");
        $(".Homepage__left__side").removeClass("move--left");
        $(".Homepage").css({display: "flex"});
        $(".Portfolio").css({display: "none"});

    });
    

    /* Filter =====================*/
   let filter = $("[data-filter]"); 
    
   filter.on("click", function(event) {
       event.preventDefault();
       
       let cat = $(this).data('filter');
       console.log(cat);
       
       if(cat == 'All') {
           $("[data-cat]").css({display: "inline-block"});
       } else {
           
           $("[data-cat]").each(function(){
           
               let workCat = $(this).data('cat');

                   if(workCat == cat) {
                    $(this).data(["cat"]).css({display: "inline-block"});       
                   } else {
                    $(this).data(["cat"]).css({display: "none"}); 
                   };
           
           });   
       };
   });

   /* Slider: https://kenwheeler.github.io/slick/ */
   $('.Portfolio__Reviews__Slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
   })


});

