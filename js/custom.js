$(window).scroll(function () {
  if ($(this).scrollTop() > 120) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});
