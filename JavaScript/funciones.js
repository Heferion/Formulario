function EnviarFormulario() {
    let formulario = document.forms["formularioRegistro"];
    if (formulario["ingresarNombre"].value == "") {
        alert("Debe Ingresar el Nombre");
        return false;
    }else if (formulario["ingresarPrApellido"].value == "") {
        alert("Debe Ingresar el Primer Apellido");
        return false;
    }else if (formulario["ingresarSgApellido"].value == "") {
        alert("Debe Ingresar el Segundo Apellido");
        return false;
    }else if (formulario["telefono"].value == "") {
        alert("Debe Ingresar el Teléfono");
        return false;
    }else if (formulario["correoElectronico"].value == "") {
        alert("Debe Ingresar el Correo Electrónico");
        return false;
    }else if (formulario["hombreMujer"].value == "") {
        alert("Debe Ingresar el Género");
        return false;
    }else if (formulario["estadoCivil"].value == "") {
        alert("Debe Ingresar el Estado Civil");
        return false;
    }else if (formulario["pais"].value == "") {
        alert("Debe Ingresar el País de Origen");
        return false;
    }else if (formulario["fechaNacimiento"].value == "") {
        alert("Debe Ingresar la Fecha de Nacimiento");
        return false;
    }else if (formulario["textoDescripcion"].value == "") {
        alert("Debe Ingresar una Breve Descripción");
        return false;
    }else if (formulario["usuario"].value == "") {
        alert("Debe Ingresar el Usuario");
        return false;
    }else if (formulario["contraseña"].value == "") {
        alert("Debe Ingresar la Contraseña");
        return false;
    }else{
        return true;
    }
    
}



