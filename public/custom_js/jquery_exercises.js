$(document).ready(function(){
  "use strict";
  // var content = $('#title').html();
  // alert(content);
  // $('.codeup').css('border',' 1px solid black');
  // $('li').css('font-size','20px');
  // $('h1,p,li').css('background-color','yellow');
  // var content = $('h1').html();
  // alert(content);
  $('body').css('background-color','magenta');
  $('h1').click(function(){
    $(this).css('background-color','red');
  });
  $('p').click(fontSize);
  $('li').hover(liRed,liWhite,);


  function fontSize(){
    $(this).css('font-size','18px');
  }
  function liRed(){
    $(this).css('color','red');
  }
  function liWhite(){
    $(this).css('color','white');
  }
});
