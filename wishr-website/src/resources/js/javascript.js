$(document).on("click", "#toggle", function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

$(document).on("click", ".overlay-menu a", function(){
  console.log('Hallo');
  $("#toggle").removeClass('active');
  $('#overlay').removeClass('open');
});

$(document).on('click', 'label#photolabel', function() {
  console.log('Hallo');
});


$('#toggle').click(function() {
   ;
  });
