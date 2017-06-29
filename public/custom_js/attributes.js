$(document).ready(function(){
"use strict";
  $('.toggleButton').click(function(event){
    // event.preventDefault();
    $('dd').toggleClass('invisible');
  });
  $('dt').click(function(event){
    event.preventDefault();
    $(this).toggleClass('highlight');
  });
  $('.lastButton').click(function(event){
    $('ul').each(function(index){
      $(this).children().last().css('background-color','yellow');
    });
  });
  $('h3').click(function(event){
    $(this).next().children().css('font-weight','bold');
  })
  $('li').click(function(event){
    $(this).parent().children().first().css('color','blue');
  });
});
