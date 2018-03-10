$(document).ready(function(){
  $('#link1').on('mouseover', function(){
      $('#link1').css({
          "background-color": "#F8DE7E",
      });
  });
  $('#link1').on('mouseleave', function(){
      $('#link1').css({
          "background-color": "#ffc",
      });
  });
  $('#link2').on('mouseover', function(){
      $('#link2').css({
          "background-color": "#F8DE7E",
      });
  });
  $('#link2').on('mouseleave', function(){
      $('#link2').css({
          "background-color": "#ffc",
      });
  });
  $('#link4').on('mouseover', function(){
      $('#link4').css({
          "background-color": "#F8DE7E",
      });
  });
  $('#link4').on('mouseleave', function(){
      $('#link4').css({
          "background-color": "#ffc",
      });
  });
  $('#link5').on('mouseover', function(){
      $('#link5').css({
          "background-color": "#F8DE7E",
      });
  });
  $('#link5').on('mouseleave', function(){
      $('#link5').css({
          "background-color": "#ffc",
      });
  });
});
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').hide()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      2000);
});
