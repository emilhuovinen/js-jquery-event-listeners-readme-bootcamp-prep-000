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
  $('#typing').on('keydown', function(){
    if (event.key == "g") {
      alert('You have press G')
    }
  });
}

$(document).ready(function(){

// call functions here

});
