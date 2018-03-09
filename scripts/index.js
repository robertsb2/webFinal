$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').hide()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      2000);
});