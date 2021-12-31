$(function(){
    $( ".row" ).clone().appendTo( ".rows" );
  });


  // function w3_open() {
  //   document.getElementById("mySidebar").style.display = "block";
  // }
  
  // function w3_close() {
  //   document.getElementById("mySidebar").style.display = "none";
  // }

  $(document).ready(function() {
    $('.menu-icon').on('click', function() {
      $('#mySidebar').addClass('visible');
    });

    $('.close-btn').on('click', function() {
      $('#mySidebar').removeClass('visible');
    });

  });