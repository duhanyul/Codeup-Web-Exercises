$(document).ready(function(){
"use strict";
  $('.toggleButton').click(function(event){
    event.preventDefault();
    $('dd').toggleClass('invisible');
  });
  $('dt').click(function(event){
    event.preventDefault();
    $(this).toggleClass('highlight');
  });
});
