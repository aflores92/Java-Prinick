window.onload = function() {
    window.alert("algo");

    var campo;

    campo = document.getElementById("prueba").value;
    console.log(campo);

    var check;
    check = document.getElementById("prueba2").checked;

    if (check == true) {
        console.log("Esta Activado");
    } else {
        console.log("No esta activado");
    }

    var html;

    html = document.getElementById("noche").innerHTML;
    console.log(html);

    var a;

    document.getElementById("reemplazar").onblur = function() {
        a = document.getElementById("reemplazar").value;
        document.getElementById("NT").innerHTML = "deseleccionaste y esto fue lo escribiste: ";
        document.getElementById("NT2").innerHTML = a;
    }


}