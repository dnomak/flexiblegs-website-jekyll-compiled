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
              window.location = '/learn/';
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
              window.location = '/learn/';
            }
          });

      }

    // learn

      if (window.location.pathname == "/learn/") {
        $(".dn-menu--learn").addClass("is-active");
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
      if (window.location.pathname == "/learn/wrap/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__wrap").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/';
            }
            else if(e.which == 39) { // right
              window.location = '/learn/col/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/col/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__col").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/wrap/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/col-width/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/col-width/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__col-width").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/col/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/hidden/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/hidden/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__hidden").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/col-width/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/not-hidden/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/not-hidden/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__not-hidden").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/hidden/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/gutter/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/gutter/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__gutter").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/not-hidden/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/outside/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/outside/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__outside").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/gutter/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/wrap-col-width/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/wrap-col-width/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__wrap-col-width").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/outside/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/auto/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/auto/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__auto").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/wrap-col-width/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/table/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/table/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__table").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/auto/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/flexbox/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/flexbox/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__flexbox").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/table/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/normal/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/normal/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__normal").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/flexbox/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/left/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/left/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__left").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/normal/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/center/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/center/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__center").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/left/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/right/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/right/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__right").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/center/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/top/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/top/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__top").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/right/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/middle/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/middle/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__middle").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/top/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/bottom/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/bottom/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__bottom").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/middle/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/between/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/between/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__between").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/bottom/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/around/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/around/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__around").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/between/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/baseline/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/baseline/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__baseline").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/around/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/first/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/first/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__first").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/baseline/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/not-first/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/not-first/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__not-first").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/first/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/last/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/last/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__last").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/not-first/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/not-last/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/not-last/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__not-last").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/last/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/reverse/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/reverse/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__reverse").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/not-last/?framework=' + framework;
            }
            else if(e.which == 39) { // right
              window.location = '/learn/not-reverse/?framework=' + framework;
            }
          });

      }
      if (window.location.pathname == "/learn/not-reverse/") {
        $(".dn-menu--learn").addClass("is-active");
        $(".dn-menu--learn-child__not-reverse").addClass("is-active");

        // keydown

          $("body").keydown(function(e) {
            if(e.which == 37) { // left
              window.location = '/learn/reverse/?framework=' + framework;
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
              window.location = '/learn/';
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
