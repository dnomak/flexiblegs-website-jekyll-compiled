$(document).on("ready", function() {

  // query-string

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var framework = getParameterByName('framework');

    var submenu = function(variable) {
      if (framework == ""+ variable +"") {
        $("#"+ variable +"").css("display", "block");
        $("#"+ variable +"--menu").css("display", "block");
      }
    }
    submenu("css");
    submenu("bem-css");
    submenu("scss-plus");
    submenu("sass-plus");
    submenu("less-plus");
    submenu("stylus-plus");

    var keydown = function(left,right) {
      $("body").keydown(function(e) {
        if(e.which == 37) {
          window.location = ""+ left +"";
        }
        else if(e.which == 39) {
          window.location = ""+ right +"";
        }
      });
    }


  // url

    // homepage

      if(window.location.pathname == "/" || window.location.pathname == "/tr/") {
        $("#menu--homepage").addClass("active");
      }
      if(window.location.pathname == "/") {
        keydown("/future/","/install/");
      }
      if(window.location.pathname == "/tr/") {
        keydown("/tr/future/","/tr/install/");
      }

    // install

      if (window.location.pathname == "/install/" || window.location.pathname == "/tr/install/") {
        $(".dn-menu--install").addClass("active");
        $(".dn-menu--install-child").removeClass("hidden");
      }
      if (window.location.pathname == "/install/") {
        keydown("/","/learn/");
      }
      if (window.location.pathname == "/tr/install/") {
        keydown("/tr/","/tr/learn/");
      }

      // css

        if (window.location.pathname == "/install/css/" || window.location.pathname == "/tr/install/css/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__css").addClass("active");

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

      // bem-css

        if (window.location.pathname == "/install/bem-css/" || window.location.pathname == "/tr/install/bem-css/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__bem-css").addClass("active");

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

      // scss-plus

        if (window.location.pathname == "/install/scss-plus/" || window.location.pathname == "/tr/install/scss-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__scss-plus").addClass("active");

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

      // sass-plus

        if (window.location.pathname == "/install/sass-plus/" || window.location.pathname == "/tr/install/sass-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__sass-plus").addClass("active");

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

      // less-plus

        if (window.location.pathname == "/install/less-plus/" || window.location.pathname == "/tr/install/less-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__less-plus").addClass("active");

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

      // stylus-plus

        if (window.location.pathname == "/install/stylus-plus/" || window.location.pathname == "/tr/install/stylus-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__stylus-plus").addClass("active");

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

      if (window.location.pathname == "/learn/" || window.location.pathname == "/tr/learn/") {
        $(".dn-menu--learn").addClass("active");
        $("#css--menu").css("display", "block");
        keydown("/install/","/support/");
      }
      if (window.location.pathname == "/learn/") {
        keydown("/install/","/support/");
      }
      if (window.location.pathname == "/tr/learn/") {
        keydown("/tr/install/","/tr/support/");
      }

      // wrap

        if (window.location.pathname == "/learn/wrap/" || window.location.pathname == "/tr/learn/wrap/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__wrap").addClass("active");

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

      // col

        if (window.location.pathname == "/learn/col/" || window.location.pathname == "/tr/learn/col/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__col").addClass("active");

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

      // col-width

        if (window.location.pathname == "/learn/col-width/" || window.location.pathname == "/tr/learn/col-width/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__col-width").addClass("active");

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

      // hidden

        if (window.location.pathname == "/learn/hidden/" || window.location.pathname == "/tr/learn/hidden/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__hidden").addClass("active");

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

      // not-hidden

        if (window.location.pathname == "/learn/not-hidden/" || window.location.pathname == "/tr/learn/not-hidden/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-hidden").addClass("active");

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

      // gutter

        if (window.location.pathname == "/learn/gutter/" || window.location.pathname == "/tr/learn/gutter/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__gutter").addClass("active");

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

      // outside

        if (window.location.pathname == "/learn/outside/" || window.location.pathname == "/tr/learn/outside/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__outside").addClass("active");

          // keydown

            $("body").keydown(function(e) {
              if(e.which == 37) { // left
                window.location = '/learn/gutter/?framework=' + framework;
              }
              else if(e.which == 39) { // right
                window.location = '/learn/wrap-width/?framework=' + framework;
              }
            });

        }

      // wrap-width

        if (window.location.pathname == "/learn/wrap-width/" || window.location.pathname == "/tr/learn/wrap-width/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__wrap-width").addClass("active");

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

      // auto

        if (window.location.pathname == "/learn/auto/" || window.location.pathname == "/tr/learn/auto/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__auto").addClass("active");

          // keydown

            $("body").keydown(function(e) {
              if(e.which == 37) { // left
                window.location = '/learn/wrap-width/?framework=' + framework;
              }
              else if(e.which == 39) { // right
                window.location = '/learn/table/?framework=' + framework;
              }
            });

        }

      // table

        if (window.location.pathname == "/learn/table/" || window.location.pathname == "/tr/learn/table/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__table").addClass("active");

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

      // flexbox

        if (window.location.pathname == "/learn/flexbox/" || window.location.pathname == "/tr/learn/flexbox/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__flexbox").addClass("active");

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

      // normal

        if (window.location.pathname == "/learn/normal/" || window.location.pathname == "/tr/learn/normal/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__normal").addClass("active");

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

      // left

        if (window.location.pathname == "/learn/left/" || window.location.pathname == "/tr/learn/left/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__left").addClass("active");

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

      // center

        if (window.location.pathname == "/learn/center/" || window.location.pathname == "/tr/learn/center/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__center").addClass("active");

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

      // right

        if (window.location.pathname == "/learn/right/" || window.location.pathname == "/tr/learn/right/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__right").addClass("active");

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

      // top

        if (window.location.pathname == "/learn/top/" || window.location.pathname == "/tr/learn/top/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__top").addClass("active");

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

      // middle

        if (window.location.pathname == "/learn/middle/" || window.location.pathname == "/tr/learn/middle/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__middle").addClass("active");

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

      // bottom

        if (window.location.pathname == "/learn/bottom/" || window.location.pathname == "/tr/learn/bottom/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__bottom").addClass("active");

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

      // between

        if (window.location.pathname == "/learn/between/" || window.location.pathname == "/tr/learn/between/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__between").addClass("active");

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

      // around

        if (window.location.pathname == "/learn/around/" || window.location.pathname == "/tr/learn/around/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__around").addClass("active");

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

      // baseline

        if (window.location.pathname == "/learn/baseline/" || window.location.pathname == "/tr/learn/baseline/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__baseline").addClass("active");

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

      // first

        if (window.location.pathname == "/learn/first/" || window.location.pathname == "/tr/learn/first/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__first").addClass("active");

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

      // not-first

        if (window.location.pathname == "/learn/not-first/" || window.location.pathname == "/tr/learn/not-first/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-first").addClass("active");

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

      // last

        if (window.location.pathname == "/learn/last/" || window.location.pathname == "/tr/learn/last/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__last").addClass("active");

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

      // not-last

        if (window.location.pathname == "/learn/not-last/" || window.location.pathname == "/tr/learn/not-last/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-last").addClass("active");

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

      // reverse

        if (window.location.pathname == "/learn/reverse/" || window.location.pathname == "/tr/learn/reverse/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__reverse").addClass("active");

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

      // not-reverse

        if (window.location.pathname == "/learn/not-reverse/" || window.location.pathname == "/tr/learn/not-reverse/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-reverse").addClass("active");

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

      if (window.location.pathname == "/support/" || window.location.pathname == "/tr/support/") {
        $("#menu--support").addClass("active");
      }
      if (window.location.pathname == "/support/") {
        keydown("/learn/","/motivation/");
      }
      if (window.location.pathname == "/tr/support/") {
        keydown("/tr/learn/","/tr/motivation/");
      }

    // motivation

      if (window.location.pathname == "/motivation/" || window.location.pathname == "/tr/motivation/") {
        $("#menu--motivation").addClass("active");
      }
      if (window.location.pathname == "/motivation/") {
        keydown("/support/","/future/");
      }
      if (window.location.pathname == "/tr/motivation/") {
        keydown("/tr/support/","/tr/future/");
      }

    // future

      if (window.location.pathname == "/future/" || window.location.pathname == "/tr/future/") {
        $("#menu--future").addClass("active");
      }
      if (window.location.pathname == "/future/") {
        keydown("/motivation/","/");
      }
      if (window.location.pathname == "/tr/future/") {
        keydown("/tr/motivation/","/tr/");
      }

  // click

    $(".dn-menu__item--parent").on("click", function() {
      $("nav .dn-menu__item--parent").removeClass("active");
      $(this).addClass("active");
    });
    $(".dn-menu__item--child").on("click", function() {
      $("nav .dn-menu__item--child").removeClass("active");
      $(this).addClass("active");
    });

    $("pre.not-compiled .dn-tag--button").on("click", function() {
      $("pre.not-compiled").css("display", "none");
      $("pre.compiled").css("display", "block");
    });
    $("pre.compiled .dn-tag--button").on("click", function() {
      $("pre.compiled").css("display", "none");
      $("pre.not-compiled").css("display", "block");
    });

});
