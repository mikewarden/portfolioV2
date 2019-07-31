$(document).ready(function ()

{
  
  $("#kickTwoDiv").click(function(){
    $(this).effect("bounce", {times:2}, 100);
  })
    
   $("#snareDiv").click(function(){
    $(this).effect("bounce", {times:6}, 80);
  })

   $("#engoDivOne").click(function(){
    $(this).effect("bounce", {times:7}, 400);
  })

    $("#engoDivTwo").click(function(){
    $(this).effect("bounce", {times:5}, 600);
  })
  
   $("#engoDivThree").click(function(){
    $(this).effect("bounce", {times:3}, 40);
  })
  
  



  $(".divWhiteKeys").click(function(){
    $(this).effect("shake", {distance:5}, 200);
  })
  

    $(".divBlackKeys").click(function(){
    $(this).effect("shake", {distance:5}, 200);
  })
  

  $(".divWhiteKeys").click(function(){
    $("#tears").effect("drop", {direction: "down"}, 1000 );
  });
  

  $(".divBlackKeys").click(function(){
    $("#tears").effect("drop", {direction: "down"}, 1000 );
  });


  $(".divWhiteKeys").click(function(){
    $("#tearsTwo").effect("drop", {direction: "down"}, 700 );
  });
  

  $(".divBlackKeys").click(function(){
    $("#tearsTwo").effect("drop", {direction: "down"}, 1200 );
  });


  
 
  
})