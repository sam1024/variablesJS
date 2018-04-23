$("#form").submit(function(e) {
  if ($("#user").val() === "") {
    swal(
      "AVISO!!",
      "El campo usuario no puede ser vacio",
      "warning"
    );
    e.preventDefault();//CON ESTO EVITO QUE QUE EL FORMULARIO SE MANDE
    $("#user").focus();
  } else if ($("#pass").val() === "") {
    swal(
      "AVISO!!",
      "El campo contraseña no puede ser vacio",
      "warning"
    );
    $("#pass").focus();
    e.preventDefault();
  }
});
