const datosEstudiantes = [{
        nombre: "Juan José Varela Calle",
        github: "https://github.com/Emarinar",
        neocites: "https://neocities.org/site/edumarinar",
        email: "jjvarela@correo.iue.edu.co",
        foto: "images/FOtoJuanJose.jpg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "8%",
            estadotecnico: "9%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "6%",
            estadotecnico: "7%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "4%"
        }
    ],
        valoraciones: {
        valorhtml: "3%",
        valorcss: "4%",
        valorjs: "6%",
        valorui: "4%",
        valorux: "9%"
    }},
    {
        nombre: "Christian Cano Quiceno",
        github: "https://github.com/ccanoq72",
        neocites: "https://neocities.org/site/canoq",
        email: "ccanoq72@gamil.com",
        telefono: "301010101",
        foto: "images/cano.jpeg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "7%",
            estadotecnico: "9%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "8%",
            estadotecnico: "4%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "6%",
            estadotecnico: "10%"
        }
    ],
        valoraciones: {
        valorhtml: "8%",
        valorcss: "4%",
        valorjs: "6%",
        valorui: "4%",
        valorux: "9%"
    }
}];


function Plantilla(datos) {
    return `
    <div class="container">     
        <div class="Name"><h1 class="nombre">${datos.nombre}</h1></div>
        <div class="Foto1"><img src=${datos.foto} alt="" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="contenla">
                <li><img src="/images/github-brands.svg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/images/network-wired-solid.svg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/images/envelope-square-solid.svg" alt=""><a href="">${datos.email}</a></li>
                <li><img src="/images/whatsapp-brands.svg" alt=""><a href="">${datos.telefono}</a></li>
            </ul>
        </div>
    </div>
    


    <div class="Actividades">
        <table class="tabla">
            <tr>
                <th>Actividades</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>${datos.actividades[0].estadouiux}</td>
                <td>${datos.actividades[0].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>${datos.actividades[1].estadouiux}</td>
                <td>${datos.actividades[1].estadotecnico}</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>${datos.actividades[2].estadouiux}</td>
                <td>${datos.actividades[2].estadotecnico}</td>
            </tr>

        </table>
    </div> 
    


    <div class="Estados">
        <div class="valorhtml"><h2><a href= >Html </a></h2>
            <p>${datos.valoraciones.valhtml}</p>
        </div>
        <div class="valorcss"><h2><a href= >CSS </a></h2> 
            <p>${datos.valoraciones.valcss}</p>
        </div>
        <div class="valorjs"><h2><a href= >JS </a></h2>
            <p>${datos.valoraciones.valjs}</p>
        </div>
        <div class="valorui"><h2><a href= >UI </a></h2>
            <p>${datos.valoraciones.valui}</p>
        </div>
        <div class="valorui"><h2><a href= >UX</a></h2>
            <p>${datos.valoraciones.valux}</p>
        </div>
        <div class="imgicon"><a href=""><img src="/images/user-solid.svg" alt=""></a>
        </div>
    </div>
`}



const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");