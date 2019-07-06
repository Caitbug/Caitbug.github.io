$(function(){
  /* creating stars */
  for (i = 0; i < 10; i++)
    {
      $(".start").append("<div class='stars d" + i +"'></div>");    
         $(".start").append("<div class='stars s" + i +"'></div>");}
        for (i = 0; i < 15; i++)
    {
       $(".start").append("<div class='dots p" + i +"'></div>");     
     $(".start").append("<div class='dots t" + i +"'></div>");
    }
  
});
$(".navigate").click(function(e) {
e.preventDefault();
var location = $(this).attr("data-id");
    $('html, body').animate({
        scrollTop: $("#"+location).offset().top
    }, 2000);
     return false;
});
