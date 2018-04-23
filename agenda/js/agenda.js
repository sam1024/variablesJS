$("#add_icon").on("click", function() {
  console.log("click");
  $(".modal").css("top", "0");
  $('#nombre').focus();
});

$("#btn_cancel").on("click", function() {
  $(".modal").css("top", "-150%");
});
