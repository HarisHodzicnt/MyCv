$(document).ready(function(){
  var i=0;
  var counter=0;
  if(localStorage.getItem("counter")!==null){
    counter=localStorage.getItem("counter");
  }
  localStorage.setItem("counter", counter);
  AOS.init({
 duration: 1200
});
$("#sendButton").click(function(){
  counter++;
    if($(".newsletter-email").val().indexOf("@")<0 || $(".newsletter-email").val().indexOf(".")<0 ){
      return false;
    }
    alert(counter);
  localStorage.setItem("Email"+counter,$(".newsletter-email").val());
  localStorage.setItem("counter", counter);
});
var imePrezime=$("#fullName");
setTimeout(function(){

i++;
if(i==11){
  i=0;
}
},500);
  var list={
    0:"HTML",
    1:"CSS",
    2:"Java Script",
    3:"SQL",
    4:"PhotoShop"
  }
  var i=0;
    var sI=setInterval(function(){
      $(".change-text").text(list[i]);
      i++;
      if(i>5){
      i=0;
      }
    },2000);
    $(window).resize(function() {
        if (($(window).width() < 768))
        {
            $(".col-xs-6 span").removeClass("remove1");
            $(".top-text").addClass("fontsizes");
        };
    });
    $(".education").hover(function(){
      $(this).toggleClass('toogle2');}
    );

  });
