$(document).ready(function(){
  $(".initial-show").click(function(){
    $('h1',this).toggle();
    $('p', this).toggle();
  });
});
