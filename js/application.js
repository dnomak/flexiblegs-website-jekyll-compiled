$(document).on("ready", function() {

  // query-string

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var framework = getParameterByName('framework');

    if (framework == "css") {
      $("#css").css("display", "block");
      $("#css--menu").css("display", "block");
    }
    if (framework == "bem-css") {
      $("#bem-css").css("display", "block");
      $("#bem-css--menu").css("display", "block");
    }
    if (framework == "scss-plus") {
      $("#scss-plus").css("display", "block");
      $("#scss-plus--menu").css("display", "block");
    }
    if (framework == "sass-plus") {
      $("#sass-plus").css("display", "block");
      $("#sass-plus--menu").css("display", "block");
    }
    if (framework == "less-plus") {
      $("#less-plus").css("display", "block");
      $("#less-plus--menu").css("display", "block");
    }
    if (framework == "stylus-plus") {
      $("#stylus-plus").css("display", "block");
      $("#stylus-plus--menu").css("display", "block");
    }

  // url

    // homepage

      if(window.location.pathname == "/") {
        $("#menu--homepage").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/future/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/';
            }
          });

      }

    // install

      if (window.location.pathname == "/install/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/';
            }
            else if(e.which == 39) { // right
              window.location = '/learning/';
            }
          });

      }
      if (window.location.pathname == "/install/css/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__css").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/bem-css/';
            }
          });

      }
      if (window.location.pathname == "/install/bem-css/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__bem-css").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/css/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/scss-plus/';
            }
          });

      }
      if (window.location.pathname == "/install/scss-plus/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__scss-plus").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/bem-css/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/sass-plus/';
            }
          });

      }
      if (window.location.pathname == "/install/sass-plus/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__sass-plus").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/scss-plus/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/less-plus/';
            }
          });

      }
      if (window.location.pathname == "/install/less-plus/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__less-plus").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/sass-plus/';
            }
            else if(e.which == 39) { // right
              window.location = '/install/stylus-plus/';
            }
          });

      }
      if (window.location.pathname == "/install/stylus-plus/") {
        $(".dn-menu--install").addClass("is-active");
        $(".dn-menu--install-child").removeClass("is-hidden");
        $(".dn-menu--install-child__stylus-plus").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/less-plus/';
            }
            else if(e.which == 39) { // right
              window.location = '/learning/';
            }
          });

      }

    // learning

      if (window.location.pathname == "/learning/") {
        $(".dn-menu--learning").addClass("is-active");
        $("#css--menu").css("display", "block");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/install/';
            }
            else if(e.which == 39) { // right
              window.location = '/support/';
            }
          });

      }
      if (window.location.pathname == "/learning/wrap/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__wrap").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/';
            }
            else if(e.which == 39) { // right
              window.location = '/learning/col/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/col/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__col").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/wrap/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/col-width/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/col-width/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__col-width").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/col/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/hidden/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/hidden/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__hidden").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/col-width/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/not-hidden/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/not-hidden/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__not-hidden").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/hidden/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/gutter/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/gutter/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__gutter").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/not-hidden/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/outside/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/outside/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__outside").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/gutter/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/wrap-col-width/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/wrap-col-width/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__wrap-col-width").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/outside/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/auto/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/auto/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__auto").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/wrap-col-width/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/table/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/table/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__table").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/auto/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/flexbox/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/flexbox/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__flexbox").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/table/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/normal/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/normal/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__normal").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/flexbox/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/left/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/left/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__left").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/normal/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/center/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/center/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__center").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/left/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/right/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/right/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__right").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/center/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/top/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/top/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__top").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/right/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/middle/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/middle/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__middle").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/top/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/bottom/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/bottom/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__bottom").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/middle/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/between/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/between/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__between").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/bottom/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/around/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/around/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__around").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/between/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/baseline/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/baseline/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__baseline").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/around/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/first/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/first/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__first").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/baseline/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/not-first/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/not-first/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__not-first").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/first/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/last/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/last/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__last").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/not-first/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/not-last/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/not-last/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__not-last").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/last/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/reverse/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/reverse/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__reverse").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/not-last/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learning/not-reverse/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learning/not-reverse/") {
        $(".dn-menu--learning").addClass("is-active");
        $(".dn-menu--learning-child__not-reverse").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/reverse/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/support/';
            }
          });

      }

    // support

      if (window.location.pathname == "/support/") {
        $("#menu--support").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learning/';
            }
            else if(e.which == 39) { // right
              window.location = '/motivation/';
            }
          });

      }

    // motivation

      if (window.location.pathname == "/motivation/") {
        $("#menu--motivation").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/support/';
            }
            else if(e.which == 39) { // right
              window.location = '/future/';
            }
          });

      }

    // future

      if (window.location.pathname == "/future/") {
        $("#menu--future").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/motivation/';
            }
            else if(e.which == 39) { // right
              window.location = '/';
            }
          });

      }

  // click

    $(".dn-menu__item--parent").on("click", function() {
      $("nav .dn-menu__item--parent").removeClass("is-active");
      $(this).addClass("is-active");
    });
    $(".dn-menu__item--child").on("click", function() {
      $("nav .dn-menu__item--child").removeClass("is-active");
      $(this).addClass("is-active");
    });

    $("pre.is-not-compiled .dn-tag--button").on("click", function() {
      $("pre.is-not-compiled").css("display", "none");
      $("pre.is-compiled").css("display", "block");
    });
    $("pre.is-compiled .dn-tag--button").on("click", function() {
      $("pre.is-compiled").css("display", "none");
      $("pre.is-not-compiled").css("display", "block");
    });

});
