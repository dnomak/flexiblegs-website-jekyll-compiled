function getUrlVars(){
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
  hash = hashes[i].split('=');
  vars.push(hash[0]);
  vars[hash[0]] = hash[1];
  }
  return vars;
}
var url = getUrlVars()["url"];
var col = getUrlVars()["col"];

var scrolltop = function() {
  $('.url input').val(url)
  $("html, body").delay(1000).animate({scrollTop: $('.color-circle').offset().top }, 2000);
};

if(url == null) {
    url = "example.html"
}
else {
  scrolltop()
}
if(col == null) {
    col = "xl"
}
else {
  scrolltop()
}

var xlbrowserclick = function() {
  $('.xlstyle-browser-click').addClass('active');
  $('.lgstyle-browser-click').removeClass('active');
  $('.mdstyle-browser-click').removeClass('active');
  $('.smstyle-browser-click').removeClass('active');
  $('.xsstyle-browser-click').removeClass('active');
  $('.browser').removeClass('animated tada');
  $('.browser').css( "max-width", "1142px" );
};
$( ".xlstyle-browser-click" ).click(function() {
  xlbrowserclick()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  $('.browser').addClass('animated tada');
});

var lgbrowserclick = function() {
  $('.xlstyle-browser-click').removeClass('active');
  $('.lgstyle-browser-click').addClass('active');
  $('.mdstyle-browser-click').removeClass('active');
  $('.smstyle-browser-click').removeClass('active');
  $('.xsstyle-browser-click').removeClass('active');
  $('.browser').removeClass('animated tada');
  $('.browser').css( "max-width", "1026px" );
};
$( ".lgstyle-browser-click" ).click(function() {
  lgbrowserclick()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  $('.browser').addClass('animated tada');
});

var mdbrowserclick = function() {
  $('.xlstyle-browser-click').removeClass('active');
  $('.lgstyle-browser-click').removeClass('active');
  $('.mdstyle-browser-click').addClass('active');
  $('.smstyle-browser-click').removeClass('active');
  $('.xsstyle-browser-click').removeClass('active');
  $('.browser').removeClass('animated tada');
  $('.browser').css( "max-width", "770px" );
};
$( ".mdstyle-browser-click" ).click(function() {
  mdbrowserclick()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  $('.browser').addClass('animated tada');
});

var smbrowserclick = function() {
  $('.xlstyle-browser-click').removeClass('active');
  $('.lgstyle-browser-click').removeClass('active');
  $('.mdstyle-browser-click').removeClass('active');
  $('.smstyle-browser-click').addClass('active');
  $('.xsstyle-browser-click').removeClass('active');
  $('.browser').removeClass('animated tada');
  $('.browser').css( "max-width", "669px" );
};
$( ".smstyle-browser-click" ).click(function() {
  smbrowserclick()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  $('.browser').addClass('animated tada');
});

var xsbrowserclick = function() {
  $('.xlstyle-browser-click').removeClass('active');
  $('.lgstyle-browser-click').removeClass('active');
  $('.mdstyle-browser-click').removeClass('active');
  $('.smstyle-browser-click').removeClass('active');
  $('.xsstyle-browser-click').addClass('active');
  $('.browser').removeClass('animated tada');
  $('.browser').css( "max-width", "416px" );
};
$( ".xsstyle-browser-click" ).click(function() {
  xsbrowserclick()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
  $('.browser').addClass('animated tada');
});

iframe = "<div class='row text-center'><iframe src='"+ url +"' class='example' frameborder='0'></iframe></div>";
$('.macbook-big').html(iframe);

var xlcircle = function() {
  col = "xl"

  $('.xlstyle-circle').addClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

  $('.macbook-big').addClass('animated tada');
  $('.macbook-big').css( "display", "block" );
  $('.macbook-big').html(iframe);

  $('.ipad-landscape-big').css( "display", "none" );
  $('.ipad-portrait-big').css( "display", "none" );
  $('.iphone-landscape-big').css( "display", "none" );
  $('.iphone-portrait-big').css( "display", "none" );
};

var lgcircle = function() {
  col = "lg"

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').addClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

  $('.ipad-landscape-big').addClass('animated tada');
  $('.ipad-landscape-big').css( "display", "block" );
  $('.ipad-landscape-big').html(iframe);

  $('.macbook-big').css( "display", "none" );
  $('.ipad-portrait-big').css( "display", "none" );
  $('.iphone-landscape-big').css( "display", "none" );
  $('.iphone-portrait-big').css( "display", "none" );
};

var mdcircle = function() {
  col = "md"

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').addClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').removeClass('active');

  $('.ipad-portrait-big').addClass('animated tada');
  $('.ipad-portrait-big').css( "display", "block" );
  $('.ipad-portrait-big').html(iframe);

  $('.macbook-big').css( "display", "none" );
  $('.ipad-landscape-big').css( "display", "none" );
  $('.iphone-landscape-big').css( "display", "none" );
  $('.iphone-portrait-big').css( "display", "none" );
};

var smcircle = function() {
  col = "sm"

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').addClass('active');
  $('.xsstyle-circle').removeClass('active');

  $('.iphone-landscape-big').addClass('animated tada');
  $('.iphone-landscape-big').css( "display", "block" );
  $('.iphone-landscape-big').html(iframe);

  $('.macbook-big').css( "display", "none" );
  $('.ipad-landscape-big').css( "display", "none" );
  $('.ipad-portrait-big').css( "display", "none" );
  $('.iphone-portrait-big').css( "display", "none" );
};

var xscircle = function() {
  col = "xs"

  $('.xlstyle-circle').removeClass('active');
  $('.lgstyle-circle').removeClass('active');
  $('.mdstyle-circle').removeClass('active');
  $('.smstyle-circle').removeClass('active');
  $('.xsstyle-circle').addClass('active');

  $('.iphone-portrait-big').addClass('animated tada');
  $('.iphone-portrait-big').css( "display", "block" );
  $('.iphone-portrait-big').html(iframe);

  $('.macbook-big').css( "display", "none" );
  $('.ipad-landscape-big').css( "display", "none" );
  $('.ipad-portrait-big').css( "display", "none" );
  $('.iphone-landscape-big').css( "display", "none" );
};

if(col == "xl") {
  xlcircle()
}
if (col == "lg"){
  lgcircle()
}
if (col == "md"){
  mdcircle()
}
if (col == "sm"){
  smcircle()
}
if (col == "xs"){
  xscircle()
}

$(".url input").keyup(function(event){
  if(event.keyCode == 13){
    $(".refresh").click();
  }
});

$( ".home" ).click(function() {
  window.location="?url=example.html&col="+ col +"";
});

$( ".refresh" ).click(function() {
  url = $('.url input').val()
  window.location="?url="+ url +"&col="+ col +"";
});

$( ".xlstyle-circle" ).click(function() {
  xlcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".lgstyle-circle" ).click(function() {
  lgcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".mdstyle-circle" ).click(function() {
  mdcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".smstyle-circle" ).click(function() {
  smcircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});

$( ".xsstyle-circle" ).click(function() {
  xscircle()
  $("html, body").delay(0).animate({scrollTop: $('.color-circle').offset().top }, 500);
});




$( ".navicon" ).click(function() {
  $("#menu").css("display", "block");
});

$( ".close" ).click(function() {
  $("#menu").css("display", "none");
});

$(".columns a[href='/24-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>24 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/23-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>23 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/22-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>22 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/21-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>21 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/20-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>20 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/19-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>19 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/18-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>18 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/17-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>17 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/16-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>16 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/15-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>15 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/14-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>14 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/13-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>13 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/12-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>12 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/11-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>11 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/10-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>10 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/9-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>9 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/8-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>8 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/7-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>7 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/6-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>6 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/5-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>5 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/4-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>4 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/3-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>3 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
$(".columns a[href='/2-column-grid/']").hover(
  function(e){
    $(".hover-change").html("<b>2 Column</b> Grid")
  },
  function(e){
    $(".hover-change").html("<b>All Columns</b>")
  }
);
