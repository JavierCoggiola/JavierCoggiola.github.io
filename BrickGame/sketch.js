var barra;
var bloques = []; /* array de bloques */
var bola;
var inicio;
var vidastext;
var javi;
var misvidas = 3;
var perdio = false;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style("z-index: -1");
    barra = new Barra(); /* inicializo clases de objetos */
    bola = new Bola();

    /* creo filas y columnas */
    for (var i = 0; i < 5; i++) { /* 5 filas */
        for (var j = 0; j < 15; j++) { /* 15 columnas */
            bloques.push(new Bloque(j * 130, i * 65)); /* añado objeto al array bloques */
        }
    }

    texto();
    textoVidas();
    textoJavi();
}


function draw() {

    background(0);
    if (perdio == false) {
        /* dibujo las filas y columnas */
        for (var i = 0; i < bloques.length; i++) {
            bloques[i].dibujar();
            if (bola.choque(bloques[i])) { /* si la bola colisiona con bloque */
                bola.velocidadY = -bola.velocidadY; /* vuelve bola para abajo */
                bloques.splice(i, 1); /* borro bloque del vector bloques con funcion splice de javascript */
            }
        }

        barra.dibujar();
        barra.teclado();

        if (bola.choque(barra)) { /* si la bola colisiona con barra */
            bola.velocidadY = -bola.velocidadY; /* vuelve bola para arriba */
        }
        if (bola.y < 0) {
            background(155);
            finalGano(); /* gano */
        }

        if (bola.y > height) { /* Aca reseteo el origen de la bola cada vez que pierde (antes de llegar a 0 vidas)*/
            bola.y = height - 100;
            bola.x = width / 2;
            bola.velocidadY = -bola.velocidadY;
            misvidas -= 1;
            cargarVidas();
            if (1 > misvidas) {
                perdio = true; /* perdio (llego a 0 vidas )*/
            }
        }

        bola.dibujar();
        bola.mover();
    } else {

        background(255);
        final();
    }
}

function final() {
    inicio.style('font-family: monospace; color: #000; font-size: 60px;')
    inicio.position(width / 3, height / 3);
    inicio.html('Perdiste :(');
}
function finalGano() {
    inicio.style('font-family: monospace; color: #000; font-size: 60px;')
    inicio.position(width / 3, height / 3);
    inicio.html('Ganaste :)');
}
function texto() {
    inicio = createP('Trata de llegar al otro lado de los ladrillos !! <br> Apreta <span style="color: red;"> S </span> para empezar el juego <br> Mueve la barra con <span style="color: red;"> A </span> y <span style="color: red;">D </span>');
    inicio.position(20, height - 240);
    inicio.style('font-family: monospace; color: #fff; font-size: 30px;')
}

function cargarVidas() {

    vidastext.html('Vidas : ' + misvidas);
}

function textoVidas() {
    vidastext = createP('Vidas : ' + misvidas);
    vidastext.position(width - 200, height - 100);
    vidastext.style('font-family: monospace; color: green; font-size: 30px;')
}
function textoJavi() {
    javi = createP('El grupo de los pibes');
    javi.position(20, height - 100);
    javi.style('font-family: monospace; color: blue; font-size: 20px;')
}
function keyReleased() { /* se reinicia la posicion false para que tenga que tener apretado A o D */
    barra.derecha = false;
    barra.izquierda = false;
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        barra.izquierda = true;
    } else if (key === 'd' || key === 'D') {
        barra.derecha = true;
    } else if (key === 's' || key === 'S') {
        bola.comenzar = true;
        inicio.html('');
    }
}

function Barra() {
    this.x = width / 2;
    this.y = height - 50;
    this.ancho = 200;
    this.alto = 30;
    this.velocidad = 10;
    this.izquierda = false;
    this.derecha = false;

    this.teclado = function () {
        if (this.izquierda) { /* muevo a la izquierda */
            this.x -= this.velocidad;
        } else if (this.derecha) { /* muevo a la derecha */
            this.x += this.velocidad;
        }
        this.top = this.x - this.ancho / 2; /* actualizando top y abajo */
        this.abajo = this.x + this.ancho / 2;
    }

    this.top = this.x - this.alto / 2; /* porque la pos x de cada la barra inicia al medio */
    this.abajo = this.x + this.alto / 2;

    this.dibujar = function () {
        rectMode(CENTER);
        fill(0, 105, 132);
        rect(this.x, this.y, this.ancho, this.alto);
    }
}

/* bloques les paso x y por parametro (se crean en el vector) */
function Bloque(x, y) {
    this.random = random(90, 130);
    this.x = x + 60;
    this.y = y + 60;
    this.ancho = this.random;
    this.alto = 50;

    this.color1 = random(255);
    this.color2 = random(255);
    this.color3 = random(255);

    this.top = this.x - this.ancho / 2; /* porque la pos x de cada rect inicia al medio */
    this.abajo = this.x + this.ancho / 2;

    this.dibujar = function () {
        fill(this.color1, this.color2, this.color3);
        rect(this.x, this.y, this.ancho, this.alto);
    }
}

function Bola() {
    this.x = width / 2;
    this.y = height - 100;
    this.radio = 25;
    this.velocidadX = 4;
    this.velocidadY = 4;
    this.comenzar = false;

    this.dibujar = function () {
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, this.radio, this.radio);
    }

    this.mover = function () {
        if (this.comenzar == true) {

            this.x += this.velocidadX;
            this.y -= this.velocidadY;
            if ((this.x > width) || (this.x < 0)) {
                this.velocidadX = -this.velocidadX;
            }
        }
    }

    /* colision igualando centros x e y + su alto y ancho */
    this.choque = function (elemento) {
        if (this.y <= elemento.y + elemento.alto / 2 && this.y >= elemento.y - elemento.alto / 2)
            if (this.x >= elemento.top && this.x <= elemento.abajo) /* bola dentro del rectangulo */
                return true;
        return false;

    }
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight);
}
