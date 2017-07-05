$(document).ready(function(){
  "use script";
  var blogRequest = $.get("data/blog.json");
  blogRequest.done(function(data,status){
    console.log(data);
    fillBlog(data);
  });
  blogRequest.fail(function(jqXhr, status, error){
    console.log(status);
    console.log(error);
  });
  function fillBlog(input){
    for (var i = 0; i < input.length; i++) {
      $('#posts').append('<article class="post container"><h2>' + input[i].title + '</h2><h5>' + input[i].date + '</h5><h6>' + input[i].categories.join(', ') + '</h6><p>' + input[i].content + '</p></article>');
    }
  }
});
