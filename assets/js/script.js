$(document).ready(function () {
    $("#right-arrow").click(function () {
        $(".dashbord-1").removeClass("show");
      });
    
      $("#nav-toggler").click(function () {
        $(".dashbord-1").addClass("show");
      });

      $(".decreament-btn").click(function () { 
        var value = $("#temperature").val();
        value--;
        $("#temperature").val(value);
      });

      $(".increament-btn").click(function () { 
        var value = $("#temperature").val();
        value++;
        $("#temperature").val(value);
      });
});