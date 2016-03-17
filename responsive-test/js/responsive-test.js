function responsiveTest() {

  // --------------------
  // Url
  // --------------------
  function getUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  var url = getUrlVars()["url"];
  var col = getUrlVars()["col"];
  if(url == null) {
    url = "test.html"
  }
  else {
    $('.url').val(url)
  }
  if(col == null) {
      col = "xl"
  }
  else {
    $('.url').val(url)
  }

  // --------------------
  // Home
  // --------------------
  // $(".home").click(function() {
  //   window.location = "?url=test.html&col=" + col + "";
  // });

  // --------------------
  // Field
  // --------------------
  $(".url").keyup(function(event) {
    if (event.keyCode == 13) {
      $(".enter").click();
    }
  });

  // --------------------
  // Enter
  // --------------------
  $(".enter").click(function() {
    url = $('.url').val()
    window.location = "?url=" + url + "&col=" + col + "";
  });

  iframe = "<div class='row text-center'><iframe src='" + url + "' class='example' frameborder='0'></iframe></div>";
  $('.macbook').html(iframe);

  var xlButtonClick = function() {
    col = "xl"

    $('.xl-button').addClass('active');
    $('.lg-button').removeClass('active');
    $('.md-button').removeClass('active');
    $('.sm-button').removeClass('active');
    $('.xs-button').removeClass('active');

    $('.macbook').css("display", "block");
    $('.macbook').html(iframe);

    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var lgButtonClick = function() {
    col = "lg"

    $('.xl-button').removeClass('active');
    $('.lg-button').addClass('active');
    $('.md-button').removeClass('active');
    $('.sm-button').removeClass('active');
    $('.xs-button').removeClass('active');

    $('.ipad-landscape').css("display", "block");
    $('.ipad-landscape').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var mdButtonClick = function() {
    col = "md"

    $('.xl-button').removeClass('active');
    $('.lg-button').removeClass('active');
    $('.md-button').addClass('active');
    $('.sm-button').removeClass('active');
    $('.xs-button').removeClass('active');

    $('.ipad-portrait').css("display", "block");
    $('.ipad-portrait').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var smButtonClick = function() {
    col = "sm"

    $('.xl-button').removeClass('active');
    $('.lg-button').removeClass('active');
    $('.md-button').removeClass('active');
    $('.sm-button').addClass('active');
    $('.xs-button').removeClass('active');

    $('.iphone-landscape').css("display", "block");
    $('.iphone-landscape').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var xsButtonClick = function() {
    col = "xs"

    $('.xl-button').removeClass('active');
    $('.lg-button').removeClass('active');
    $('.md-button').removeClass('active');
    $('.sm-button').removeClass('active');
    $('.xs-button').addClass('active');

    $('.iphone-portrait').css("display", "block");
    $('.iphone-portrait').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
  };

  // --------------------
  // Url
  // --------------------

  if (col == "xl") {
    xlButtonClick()
  }
  if (col == "lg") {
    lgButtonClick()
  }
  if (col == "md") {
    mdButtonClick()
  }
  if (col == "sm") {
    smButtonClick()
  }
  if (col == "xs") {
    xsButtonClick()
  }

  // --------------------
  // Click
  // --------------------

  $(".xl-button").click(function() {
    xlButtonClick()
  });

  $(".lg-button").click(function() {
    lgButtonClick()
  });

  $(".md-button").click(function() {
    mdButtonClick()
  });

  $(".sm-button").click(function() {
    smButtonClick()
  });

  $(".xs-button").click(function() {
    xsButtonClick()
  });

}
