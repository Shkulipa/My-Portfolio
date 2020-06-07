
$(function(){
if (window.matchMedia("(min-width: 768px)").matches) {

  // Our functions ============================
    // раздвигает  левую и правую часть section HomePage
    let slideLeftAndRightSideHomePage = function() {
      $(".Homepage").css({ overflow: "hidden" });
        // Right__Side.animate ===================================
        $(".Homepage__right__side").css({ position: "absolute", right: "0" }).animate({
          right: "-1000px",
          opacity: "0"
        }, 1000, "swing", function(){
          $(this).css({ display: "none" })
        });
        // Right__Side.animate ===================================

        // Left__side.animate ===================================
        $(".Homepage__left__side").css({ position: "absolute", left: "0" }).animate({
          left: "-1000px",
          opacity: "0"
        }, 1000, "swing", function(){
          $(this).css({ display: "none" });
          $(".Homepage").css({display: "none"});
        });
        // Left__side.animate ===================================
    }

    // Возвращает положение левой и правой части section HomePage на место, как они и были прежде
    let returnLeftAndRightSideHomePage = function () {
      $(".Homepage").css({ display: "flex", overflow: "hidden" });

      // Right__Side.animate ===================================
      $(".Homepage__right__side").css({ position: "absolute", display: "flex",  right: "-1000px", opacity: "0" }).animate({
        right: "0",
        opacity: "1"
      }, 1000, "swing");
      // Right__Side.animate ===================================


      // Left__side.animate ===================================
      $(".Homepage__left__side").css({ position: "absolute", display: "flex",  left: "-1000px",opacity: "0" }).animate({
        left: "0",
        opacity: "1"
      }, 1000, "swing");
      // Left__side.animate ===================================
    }

    // Проявление через опасити секции по которой біл произведён клик
    let opacitySection = function(section) {
      // Left__side.animate ===================================
      $(section).css({display: "flex", opacity: "0", position: "absolute"}).animate({
        opacity: "1"
      }, 1000, "swing");
      // Left__side.animate =================================== 
    }

    // Изчезновение через опасити секции на которой мы были
    let returnOpacitySection = function (section) {
      // Resume.animate =======================================
      $(section).css({display: "flex", opacity: "1", position: "absolute"}).animate({
        opacity: "0"
      }, 1000, "swing", function(){
        $(this).css({ display: "none" }),
        $(".Homepage").css({ position: "relative" });
      });
      // Resume.animate =======================================
    }
  // Our functions ============================


  //Click on sections =========================== 

  //Section: Resume ============================= 
  $("#resume").click(function(event){
    event.preventDefault();
     
    slideLeftAndRightSideHomePage();
    opacitySection(".Resume");
  });

  //Section: Portfolio =========================== 
  $("#portfolio").click(function(event){
    event.preventDefault();

    slideLeftAndRightSideHomePage();
    opacitySection(".Portfolio");
  });

  //Section: Contact ============================ 
  $("#contact").click(function(event){
    event.preventDefault();

    slideLeftAndRightSideHomePage();
    opacitySection(".Contact");
  });


// Click по Close ================================================================
// ==============================================================================
  //Click по Close in resume ===================================== 
  $(".Resume #close").click(function(event){
    event.preventDefault();

    returnLeftAndRightSideHomePage();
    returnOpacitySection(".Resume");
  });
  //Click по Close resume ===================================== 


  //Click по Close in Portfolio ===================================== 
  $(".Portfolio #close").click(function(event){
    event.preventDefault();

    returnLeftAndRightSideHomePage();
    returnOpacitySection(".Portfolio");
  });
  //Click по Close in Portfolio ===================================== 


  //Click по Close in Contact ===================================== 
  $(".Contact #close").click(function(event){
    event.preventDefault();
    $(".Homepage").css({ display: "flex", overflow: "hidden" });

    returnLeftAndRightSideHomePage();
    returnOpacitySection(".Contact");
  });
  //Click по Close Contact ===================================== 


} else {

  let OpenSection = function(section) {
    $(".Homepage__right__side").addClass("move--right");
    $(".Homepage__left__side").addClass("move--left");
    $(".Homepage").css({display: "none"});
    $(section).css({display: "flex"});
    $(window).scrollTop(0);  
  }

  let CloseSection = function(section) {
    $(".Homepage__right__side").removeClass("move--right");
    $(".Homepage__left__side").removeClass("move--left");
    $(".Homepage").css({display: "flex"});
    $(section).css({display: "none"});
  }

  
  
  $("#resume").click(function(event){
    event.preventDefault();

    OpenSection(".Resume");  
  });

  $("#portfolio").click(function(event){
    event.preventDefault();

    OpenSection(".Portfolio");  
  });

  $("#contact").click(function(event){
    event.preventDefault();

    OpenSection(".Contact");   
  });

  $(".Resume #close").click(function(event){
    event.preventDefault();

    CloseSection(".Resume");
  });

  $(".Portfolio #close").click(function(event){
    event.preventDefault();

    CloseSection(".Portfolio");
  });

  $(".Contact #close").click(function(event){
    event.preventDefault();

    CloseSection(".Contact");
  });

};


  

// Other Code ==========================================================================
// =====================================================================================

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


