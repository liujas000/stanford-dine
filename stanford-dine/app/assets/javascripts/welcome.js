$(document).ready(function(){
  $('#plus-button').on('click', function() {
    $(this).button('toggle');
    alert("BUTTON WAS PRESSED");
    console.log("button pressed");
  })
})  
