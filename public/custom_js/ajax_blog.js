$(document).ready(function(){
  "use script";
  var blogRequest = $.get("data/blog.json");
  blogRequest.done(function(data,status){
    console.log(data);
  });
  blogRequest.fail(function(jqXhr, status, error){
    console.log(status);
    console.log(error);
  });
  
});
