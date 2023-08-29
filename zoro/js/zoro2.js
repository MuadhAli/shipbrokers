if($("#mobile-menu-container").css("display") != "none") {
    var transitionSpeed = 300;
  
    $(".hamburger").click(function() {
      if($("#mobile-menu-container.left").length) {
        if($(".hamburger.is-active").length == 0) {
            $(".menu-icon .hamburger").addClass("is-active");
            $("#mobile-menu-container.left").animate({left: '0'},transitionSpeed);
            $("#shadow-glass").fadeIn(transitionSpeed);
        } else { 
            $(".menu-icon .hamburger").removeClass("is-active");
            $("#mobile-menu-container.left").animate({left: '-300px'},transitionSpeed);
            $("#shadow-glass").fadeOut(transitionSpeed);
        }
      };
      if($("#mobile-menu-container.right").length) {
        if($(".hamburger.is-active").length == 0) {
            $(".menu-icon .hamburger").addClass("is-active");
            $("#mobile-menu-container.right").animate({right: '0'},transitionSpeed);
            $("#shadow-glass").fadeIn(transitionSpeed);
        } else { 
            $(".menu-icon .hamburger").removeClass("is-active");
            $("#mobile-menu-container.right").animate({right: '-300px'},transitionSpeed);
            $("#shadow-glass").fadeOut(transitionSpeed);
        }
      };
    });
  
    $("#shadow-glass").click(function() {
        $(".menu-icon .hamburger").removeClass("is-active");
        $("#mobile-menu-container.left").animate({left: '-300px'},transitionSpeed);
        $("#mobile-menu-container.right").animate({right: '-300px'},transitionSpeed);
        $("#shadow-glass").fadeOut(transitionSpeed);
    });
  }