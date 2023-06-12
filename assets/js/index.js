$(function() {

  /* creating stars,clouds,etc */

  /*
  in the SCSS we create 30 randomized styles for stars and dots,
  but this only rerolls during compile, so to compensate for that
  and to still have a semi-random feel that changes with each page load,
  we're going to generate the divs at random too
  this will be run on load
  and show a random set of the pre-styled stars.
  */
  starValues['d'] = [];
  starValues['s'] = [];
  starValues['p'] = [];
  starValues['t'] = [];
  for (i = 1; i < 20; i++) {
    //we want a few less stars than dots
    if (i < 16) {
      $(".start").append("<div class='stars d" + uniqueRoll(1, 30, 'd') + "'></div>");
      $(".start").append("<div class='stars s" + uniqueRoll(1, 30, 's') + "'></div>");
    }
    $(".start").append("<div class='dots p" + uniqueRoll(1, 30, 'p') + "'></div>");
    $(".start").append("<div class='dots t" + uniqueRoll(1, 30, 't') + "'></div>");
  }
  for (i = 1; i < 5; i++) {
    $(".clouds").append("<div class='cloud c" + i + "'><div class='cloud-top'></div><div class='cloud-bottom'></div></div>");
  }
});


$(".navigate").click(function(e) {
  e.preventDefault();
  var location = $(this).attr("data-id");
  $('html, body').animate({
    scrollTop: $("#" + location).offset().top - 89
  }, 2000);
  return false;
});
$(".projectsNav").click(function(e){
  e.preventDefault();
  var location = $(this).attr("data-id");
  $('.activeProject').removeClass('activeProject');
  $('.'+location).addClass('activeProject');
  $(this).addClass('activeProject');

  console.log(location);
});
let starValues = [];

let roll = function(min, max) {
  let val = Math.floor(Math.random() * (max - min + 1)) + min;
  return val;
}

let uniqueRoll = function(min, max, set) {
  let val = 0;
  let unique = false;

  let stars = starValues[set];
  while (unique != true) {
    val = roll(min, max);
    if (!stars.includes(val)) {
      stars.push(val);
      unique = true;
    }
  }
  return val;
}
