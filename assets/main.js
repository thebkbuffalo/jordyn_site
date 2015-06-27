$(document).ready(function(){
  console.log("linked");

  $('navItem').click(function(){
    $('li.active').removeClass('active');
    $(this).addClass('active');
  });
});