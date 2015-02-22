<<<<<<< HEAD
$('#plus-button').on('click', function() {
  $(this).button('toggle');
  alert("BUTTON WAS PRESSED");
  console.log("button pressed");
});

$(function(){
    $('#newThread').on('click', function(e){
        alert("BUTTON WAS PRESSED");
        console.log("button pressed");
=======
$(function(){
    $('#plus-button').on('click', function(e){
        alert("BUTTON WAS PRESSED");
        console.log("button pressed");
        $.ajax({
          type:'POST',
          url:'/vote/'+ $(this).attr('id') + '/1';
        })
>>>>>>> 83168ecabe7b7896378f76b3116602557f82b34f
    });
});
