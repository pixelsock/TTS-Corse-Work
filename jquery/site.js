$('#circle').click(function() {
  $('.square').fadeToggle();
});

$('.square').click(function() {
  $(this).toggleClass('wide');
});

$(function(){
  $('#sortable').sortable();
});
