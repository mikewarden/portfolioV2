$(document).ready(function (){
  $("tr").on("mouseover", function() {
    var hovered =
        $(this).hasClass("highlight");
    $("tr").removeClass("highlight");
    if(!hovered)
      $(this).addClass("highlight");
});
});