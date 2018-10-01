//define functions here
function getIt () {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function frameIt () {
  $('img').addClass('tasty')
}

function pressIt () {
  $('input').on('keydown', function(){
    if (key.which == 71) {
      alert('You have press G')
    }
  });
}

$(document).ready(function(){

// call functions here

});
