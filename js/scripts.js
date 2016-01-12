$(document).ready(function() {
  $("#light-btn").click(function(){
    $("body").removeClass();
  });
  $("#dark-btn").click(function() {
    $("body").removeClass();
    $("body").addClass("darkview");
  });
});
