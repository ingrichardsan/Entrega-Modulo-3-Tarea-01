var nombre = ["Arquero", "Bruja", "Caballero", "Dragon", "Goblin",
    "Golem", "Los Pillos", "Miner info", "Monta Puercos",
    "Pekka", "Principe"];

var imagenes = ["arquero.png", "bruja.png", "caballero.png",
    "dragon.png", "goblin.webp", "golem.png", "los-pillos.png", "Miner_info.webp",
    "montaPuercos.webp", "Pekka.webp", "principe.png"];

var descripcion = ["Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.",
                    "Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha",
                    "Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.",
                    "El Bebé dragón es una de las nueve cartas de tropa que inspiraron a una tropa en Clash of Clans.",
                    "Es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.",
                    "Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3",
                    "Está formada por dos `niñas pillas` y un `niño pillo`, el cual tiene la función de defender a sus amigas mientras estas lanzan `chicles` a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.",
                    "Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal",
                    "Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.",
                    "Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.",
                    "Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo."
                 ];

var imagenActual = 0;
let avance = 0;
let retroceso = 0;

capturarAvanzar();

function capturarAvanzar() {
    let clicDer = document.getElementById(`clicDer`);
    clicDer.addEventListener(`click`, incrementar);
}

function incrementar() {
    avance = avance + 1;
    if (avance < nombre.length) {
        document.getElementById("desc").innerHTML = nombre[avance];
        var imagenAMostrar = imagenes[avance];
        document.getElementById('personaje').src = './imagenes/' + imagenAMostrar;
        clicIzq.disabled = false;
        clicDer.disabled = false;
    } else {
        avance = avance - 1;
        clicDer.disabled = true;
        clicIzq.disabled = false;
    }
}

capturarRetrazar();

if (avance <= 0) {
    clicIzq.disabled = true;
    clicDer.disabled = false;
}

function capturarRetrazar() {
    let clicIzq = document.getElementById(`clicIzq`);
    clicIzq.addEventListener(`click`, decrementar);
}


function decrementar() {
    if (avance <= 0) {
        clicIzq.disabled = true;
        clicDer.disabled = false;
    } else {
        avance = avance - 1;
        clicIzq.disabled = false;
        clicDer.disabled = false;
        document.getElementById("desc").innerHTML = nombre[avance];
        var imagenAMostrar = imagenes[avance];
        document.getElementById('personaje').src = './imagenes/' + imagenAMostrar;
    }
}

mostrarDescripcion();

function mostrarDescripcion() {
    let clicDesc = document.getElementById(`desc`);
    clicDesc.addEventListener(`click`, abrirDesc);
}

function abrirDesc() {
    document.getElementById("mensaje").innerHTML = descripcion[avance];
    var x = document.getElementById('alerta');
    var y = document.getElementById('principal');
        x.style.display = 'grid';
        y.style.display = 'none';
    } 


mostrarPersonaje();

function mostrarPersonaje() {
    let clicDesc = document.getElementById(`volver`);
    clicDesc.addEventListener(`click`, volverPersonaje);
}

function volverPersonaje() {
    document.getElementById("mensaje").innerHTML = descripcion[avance];
    var x = document.getElementById('alerta');
    var y = document.getElementById('principal');
    x.style.display = 'none';
    y.style.display = 'grid';
    
}













