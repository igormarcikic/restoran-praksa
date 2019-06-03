$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});


function counterFunction(n) {
  var click = document.getElementById('result'+n).innerHTML;
  click++;
  document.getElementById('result'+n).innerHTML = click;
  document.getElementById('counter'+n).classList.add("fas");
}

