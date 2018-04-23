$("#form_register").submit(function(e) {
  if ($("#nombre").val() === "") {
    swal(
      "AVISO!!!",
      "El campo nombre no puede ser vacio",
      "warning"
    );
    $("#nombre").focus();
    e.preventDefault();
  } else if ($("#user").val() === "") {
    swal(
      "AVISO!!!",
      "El campo usuario no puede ser vacio",
      "warning"
    );
    e.preventDefault();
  } else if ($("#pass").val() === "") {
    swal(
      "AVISO!!!",
      "El campo Contraseña no puede ser vacio",
      "warning"
    );
    e.preventDefault();
  }
});
