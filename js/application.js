$(document).on("ready", function() {

  // query-string

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var framework = getParameterByName("framework");

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
        }
        if (window.location.pathname == "/install/css/") {
          keydown("/install/","/install/bem-css/");
        }
        if (window.location.pathname == "/tr/install/css/") {
          keydown("/tr/install/","/tr/install/bem-css/");
        }

      // bem-css

        if (window.location.pathname == "/install/bem-css/" || window.location.pathname == "/tr/install/bem-css/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__bem-css").addClass("active");
        }
        if (window.location.pathname == "/install/bem-css/") {
          keydown("/install/css/","/install/scss-plus/");
        }
        if (window.location.pathname == "/tr/install/bem-css/") {
          keydown("/tr/install/css/","/tr/install/scss-plus/");
        }

      // scss-plus

        if (window.location.pathname == "/install/scss-plus/" || window.location.pathname == "/tr/install/scss-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__scss-plus").addClass("active");
        }
        if (window.location.pathname == "/install/scss-plus/") {
          keydown("/install/bem-css/","/install/sass-plus/");
        }
        if (window.location.pathname == "/tr/install/scss-plus/") {
          keydown("/tr/install/bem-css/","/tr/install/sass-plus/");
        }

      // sass-plus

        if (window.location.pathname == "/install/sass-plus/" || window.location.pathname == "/tr/install/sass-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__sass-plus").addClass("active");
        }
        if (window.location.pathname == "/install/sass-plus/") {
          keydown("/install/scss-plus/","/install/less-plus/");
        }
        if (window.location.pathname == "/tr/install/sass-plus/") {
          keydown("/tr/install/scss-plus/","/tr/install/less-plus/");
        }

      // less-plus

        if (window.location.pathname == "/install/less-plus/" || window.location.pathname == "/tr/install/less-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__less-plus").addClass("active");
        }
        if (window.location.pathname == "/install/less-plus/") {
          keydown("/install/sass-plus/","/install/stylus-plus/");
        }
        if (window.location.pathname == "/tr/install/less-plus/") {
          keydown("/tr/install/sass-plus/","/tr/install/stylus-plus/");
        }

      // stylus-plus

        if (window.location.pathname == "/install/stylus-plus/" || window.location.pathname == "/tr/install/stylus-plus/") {
          $(".dn-menu--install").addClass("active");
          $(".dn-menu--install-child").removeClass("hidden");
          $(".dn-menu--install-child__stylus-plus").addClass("active");
        }
        if (window.location.pathname == "/install/stylus-plus/") {
          keydown("/install/less-plus/","/learn/");
        }
        if (window.location.pathname == "/tr/install/stylus-plus/") {
          keydown("/tr/install/less-plus/","/tr/learn/");
        }

    // learn

      if (window.location.pathname == "/learn/" || window.location.pathname == "/tr/learn/") {
        $(".dn-menu--learn").addClass("active");
        $("#css--menu").css("display", "block");
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
        }
        if (window.location.pathname == "/learn/wrap/") {
          keydown("/learn/","/learn/col/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/wrap/") {
          keydown("/tr/learn/","/tr/learn/col/?framework=" + framework);
        }

      // col

        if (window.location.pathname == "/learn/col/" || window.location.pathname == "/tr/learn/col/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__col").addClass("active");
        }
        if (window.location.pathname == "/learn/col/") {
          keydown("/learn/wrap/?framework=" + framework,"/learn/col-width/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/col/") {
          keydown("/tr/learn/wrap/?framework=" + framework,"/tr/learn/col-width/?framework=" + framework);
        }

      // col-width

        if (window.location.pathname == "/learn/col-width/" || window.location.pathname == "/tr/learn/col-width/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__col-width").addClass("active");
        }
        if (window.location.pathname == "/learn/col-width/") {
          keydown("/learn/col/?framework=" + framework,"/learn/hidden/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/col-width/") {
          keydown("/tr/learn/col/?framework=" + framework,"/tr/learn/hidden/?framework=" + framework);
        }

      // hidden

        if (window.location.pathname == "/learn/hidden/" || window.location.pathname == "/tr/learn/hidden/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__hidden").addClass("active");
        }
        if (window.location.pathname == "/learn/hidden/") {
          keydown("/learn/col-width/?framework=" + framework,"/learn/not-hidden/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/hidden/") {
          keydown("/tr/learn/col-width/?framework=" + framework,"/tr/learn/not-hidden/?framework=" + framework);
        }

      // not-hidden

        if (window.location.pathname == "/learn/not-hidden/" || window.location.pathname == "/tr/learn/not-hidden/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-hidden").addClass("active");
          keydown("/learn/hidden/?framework=" + framework,"/learn/gutter/?framework=" + framework);
        }
        if (window.location.pathname == "/learn/not-hidden/") {
          keydown("/learn/hidden/?framework=" + framework,"/learn/gutter/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/not-hidden/") {
          keydown("/tr/learn/hidden/?framework=" + framework,"/tr/learn/gutter/?framework=" + framework);
        }

      // gutter

        if (window.location.pathname == "/learn/gutter/" || window.location.pathname == "/tr/learn/gutter/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__gutter").addClass("active");
        }
        if (window.location.pathname == "/learn/gutter/") {
          keydown("/learn/not-hidden/?framework=" + framework,"/learn/outside/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/gutter/") {
          keydown("/tr/learn/not-hidden/?framework=" + framework,"/tr/learn/outside/?framework=" + framework);
        }

      // outside

        if (window.location.pathname == "/learn/outside/" || window.location.pathname == "/tr/learn/outside/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__outside").addClass("active");
        }
        if (window.location.pathname == "/learn/outside/") {
          keydown("/learn/gutter/?framework=" + framework,"/learn/wrap-width/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/outside/") {
          keydown("/tr/learn/gutter/?framework=" + framework,"/tr/learn/wrap-width/?framework=" + framework);
        }

      // wrap-width

        if (window.location.pathname == "/learn/wrap-width/" || window.location.pathname == "/tr/learn/wrap-width/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__wrap-width").addClass("active");
        }
        if (window.location.pathname == "/learn/wrap-width/") {
          keydown("/learn/outside/?framework=" + framework,"/learn/auto/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/wrap-width/") {
          keydown("/tr/learn/outside/?framework=" + framework,"/tr/learn/auto/?framework=" + framework);
        }

      // auto

        if (window.location.pathname == "/learn/auto/" || window.location.pathname == "/tr/learn/auto/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__auto").addClass("active");
        }
        if (window.location.pathname == "/learn/auto/") {
          keydown("/learn/wrap-width/?framework=" + framework,"/learn/table/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/auto/") {
          keydown("/tr/learn/wrap-width/?framework=" + framework,"/tr/learn/table/?framework=" + framework);
        }

      // table

        if (window.location.pathname == "/learn/table/" || window.location.pathname == "/tr/learn/table/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__table").addClass("active");
        }
        if (window.location.pathname == "/learn/table/") {
          keydown("/learn/auto/?framework=" + framework,"/learn/flexbox/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/table/") {
          keydown("/tr/learn/auto/?framework=" + framework,"/tr/learn/flexbox/?framework=" + framework);
        }

      // flexbox

        if (window.location.pathname == "/learn/flexbox/" || window.location.pathname == "/tr/learn/flexbox/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__flexbox").addClass("active");
        }
        if (window.location.pathname == "/learn/flexbox/") {
          keydown("/learn/table/?framework=" + framework,"/learn/normal/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/flexbox/") {
          keydown("/tr/learn/table/?framework=" + framework,"/tr/learn/normal/?framework=" + framework);
        }

      // normal

        if (window.location.pathname == "/learn/normal/" || window.location.pathname == "/tr/learn/normal/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__normal").addClass("active");
        }
        if (window.location.pathname == "/learn/normal/") {
          keydown("/learn/flexbox/?framework=" + framework,"/learn/left/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/normal/") {
          keydown("/tr/learn/flexbox/?framework=" + framework,"/tr/learn/left/?framework=" + framework);
        }

      // left

        if (window.location.pathname == "/learn/left/" || window.location.pathname == "/tr/learn/left/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__left").addClass("active");
        }
        if (window.location.pathname == "/learn/left/") {
          keydown("/learn/normal/?framework=" + framework,"/learn/center/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/left/") {
          keydown("/tr/learn/normal/?framework=" + framework,"/tr/learn/center/?framework=" + framework);
        }

      // center

        if (window.location.pathname == "/learn/center/" || window.location.pathname == "/tr/learn/center/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__center").addClass("active");
        }
        if (window.location.pathname == "/learn/center/") {
          keydown("/learn/left/?framework=" + framework,"/learn/right/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/center/") {
          keydown("/tr/learn/left/?framework=" + framework,"/tr/learn/right/?framework=" + framework);
        }

      // right

        if (window.location.pathname == "/learn/right/" || window.location.pathname == "/tr/learn/right/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__right").addClass("active");
        }
        if (window.location.pathname == "/learn/right/") {
          keydown("/learn/center/?framework=" + framework,"/learn/top/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/right/") {
          keydown("/tr/learn/center/?framework=" + framework,"/tr/learn/top/?framework=" + framework);
        }

      // top

        if (window.location.pathname == "/learn/top/" || window.location.pathname == "/tr/learn/top/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__top").addClass("active");
        }
        if (window.location.pathname == "/learn/top/") {
          keydown("/learn/right/?framework=" + framework,"/learn/middle/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/top/") {
          keydown("/tr/learn/right/?framework=" + framework,"/tr/learn/middle/?framework=" + framework);
        }

      // middle

        if (window.location.pathname == "/learn/middle/" || window.location.pathname == "/tr/learn/middle/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__middle").addClass("active");
        }
        if (window.location.pathname == "/learn/middle/") {
          keydown("/learn/top/?framework=" + framework,"/learn/bottom/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/middle/") {
          keydown("/tr/learn/top/?framework=" + framework,"/tr/learn/bottom/?framework=" + framework);
        }

      // bottom

        if (window.location.pathname == "/learn/bottom/" || window.location.pathname == "/tr/learn/bottom/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__bottom").addClass("active");
        }
        if (window.location.pathname == "/learn/bottom/") {
          keydown("/learn/middle/?framework=" + framework,"/learn/between/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/bottom/") {
          keydown("/tr/learn/middle/?framework=" + framework,"/tr/learn/between/?framework=" + framework);
        }

      // between

        if (window.location.pathname == "/learn/between/" || window.location.pathname == "/tr/learn/between/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__between").addClass("active");
        }
        if (window.location.pathname == "/learn/between/") {
          keydown("/learn/bottom/?framework=" + framework,"/learn/around/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/between/") {
          keydown("/tr/learn/bottom/?framework=" + framework,"/tr/learn/around/?framework=" + framework);
        }

      // around

        if (window.location.pathname == "/learn/around/" || window.location.pathname == "/tr/learn/around/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__around").addClass("active");
        }
        if (window.location.pathname == "/learn/around/") {
          keydown("/learn/between/?framework=" + framework,"/learn/baseline/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/around/") {
          keydown("/tr/learn/between/?framework=" + framework,"/tr/learn/baseline/?framework=" + framework);
        }

      // baseline

        if (window.location.pathname == "/learn/baseline/" || window.location.pathname == "/tr/learn/baseline/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__baseline").addClass("active");
        }
        if (window.location.pathname == "/learn/baseline/") {
          keydown("/learn/around/?framework=" + framework,"/learn/first/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/baseline/") {
          keydown("/tr/learn/around/?framework=" + framework,"/tr/learn/first/?framework=" + framework);
        }

      // first

        if (window.location.pathname == "/learn/first/" || window.location.pathname == "/tr/learn/first/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__first").addClass("active");
        }
        if (window.location.pathname == "/learn/first/") {
          keydown("/learn/baseline/?framework=" + framework,"/learn/not-first/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/first/") {
          keydown("/tr/learn/baseline/?framework=" + framework,"/tr/learn/not-first/?framework=" + framework);
        }

      // not-first

        if (window.location.pathname == "/learn/not-first/" || window.location.pathname == "/tr/learn/not-first/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-first").addClass("active");
        }
        if (window.location.pathname == "/learn/not-first/") {
          keydown("/learn/first/?framework=" + framework,"/learn/last/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/not-first/") {
          keydown("/tr/learn/first/?framework=" + framework,"/tr/learn/last/?framework=" + framework);
        }

      // last

        if (window.location.pathname == "/learn/last/" || window.location.pathname == "/tr/learn/last/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__last").addClass("active");
        }
        if (window.location.pathname == "/learn/last/") {
          keydown("/learn/not-first/?framework=" + framework,"/learn/not-last/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/last/") {
          keydown("/tr/learn/not-first/?framework=" + framework,"/tr/learn/not-last/?framework=" + framework);
        }

      // not-last

        if (window.location.pathname == "/learn/not-last/" || window.location.pathname == "/tr/learn/not-last/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-last").addClass("active");
        }
        if (window.location.pathname == "/learn/not-last/") {
          keydown("/learn/last/?framework=" + framework,"/learn/reverse/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/not-last/") {
          keydown("/tr/learn/last/?framework=" + framework,"/tr/learn/reverse/?framework=" + framework);
        }

      // reverse

        if (window.location.pathname == "/learn/reverse/" || window.location.pathname == "/tr/learn/reverse/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__reverse").addClass("active");
        }
        if (window.location.pathname == "/learn/reverse/") {
          keydown("/learn/not-last/?framework=" + framework,"/learn/not-reverse/?framework=" + framework);
        }
        if (window.location.pathname == "/tr/learn/reverse/") {
          keydown("/tr/learn/not-last/?framework=" + framework,"/tr/learn/not-reverse/?framework=" + framework);
        }

      // not-reverse

        if (window.location.pathname == "/learn/not-reverse/" || window.location.pathname == "/tr/learn/not-reverse/") {
          $(".dn-menu--learn").addClass("active");
          $(".dn-menu--learn-child__not-reverse").addClass("active");
        }
        if (window.location.pathname == "/learn/not-reverse/") {
          keydown("/learn/reverse/?framework=" + framework,"/support/");
        }
        if (window.location.pathname == "/tr/learn/not-reverse/") {
          keydown("/tr/learn/reverse/?framework=" + framework,"/tr/support/");
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
