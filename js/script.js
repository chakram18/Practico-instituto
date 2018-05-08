var api = "AIzaSyBmYGsPfltjqaNnpwY0xJuhPfEJdRgC-yE";

// Mapa de google
function initMap() {
    var latLng = {
        lat: -34.917093,
        lng: -56.161890
    };

    var map = new google.maps.Map(document.getElementById("mapa"), {
        "center": latLng,
        "zoom": 14,
    });
    // Marcador del mapa
    var marker = new google.maps.Marker({
        position: latLng,
        map:map,
        title:"Instituto de ingles"
    });
}


var listaAlumnos = [];

function alumnos(alumnoNombre,alumnoApellido,alumnoEmail,alumnoFoto){
    this.nombre = alumnoNombre;
    this.apellido = alumnoApellido;
    this.email = alumnoEmail;
    this.foto = alumnoFoto;
}

$(document).ready(function(){
    $("#login").click(function(){
        window.open("alumnos.html")
    })
    $("#agregarAlumno").click(function(){
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();
    var foto = $("#foto").val();

    var alumno = new alumnos (nombre,apellido,email,foto);
    listaAlumnos.push(alumno);
})

  $("#consulta").click(function(){
        $.ajax({
          url:"http://www.scaggiano.com.uy/json.js",
            success: function(datos){
                $("tbody").empty();
                $("thead").removeClass("d-none");
                $("#successAlert").removeClass("d-none")
                for(var i = 0; i < listaAlumnos.length; i++){
                    $("tbody").append("<tr><td>"+ listaAlumnos[i].nombre + "</td> <td>"+ listaAlumnos[i].apellido +
                    "</td> <td>"+ listaAlumnos[i].email + "</td><td>"+ "<img width= 50px src= "+listaAlumnos[i].foto + "></td></tr>")
                }
            },
            error: function(){
                $("#errorAlert").removeClass("d-none")
            },
        })
    })
})