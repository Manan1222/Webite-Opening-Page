$(document).ready(function() {

  $('.openModal').click(function(){
         $('#myModal').css("display", "block");
         $('#myModal').css("animation", 'fadeIn 0.6s');
         return false;
     });

});

window.onload = function(){
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.animation = "fadeOut 0.6s";
    setTimeout(function(){
   modal.style.display = "none";
    }, 600);
}};
