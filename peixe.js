//faz a pre config dos comandos da biblioteca Phaser
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

//cria a variável game e armazena as configs do Phaser
var game = new Phaser.Game(config);

//cria a variável caranguejo
var caranguejo;

//faz o preload das imagens identificando a localização
function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image ('caranguejo','assets/peixes/crustaceo.png');

    this.load.image('bolhas', 'assets/bolhas.png');

    this.load.image('algas', 'assets/algas.png');

}

//adiciona as imagens e define o tamanho
function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(70, 170, 'bolhas').setScale(0.6);

    this.add.image(700, 450, 'bolhas').setScale(0.4);

    this.add.image(160, 460, 'bolhas').setScale(0.305);

    this.add.image (100, 540, 'algas').setScale(0.3);

    this.add.image (700, 80, 'algas').setScale(0.3).setFlip(true, true);

    caranguejo = this.add.image(400, 300, 'caranguejo');

    //muda a orientação do caranguejo
    caranguejo.setFlip(true, false);

 


}

//define a movimentação do caranguejo pelo cursor
function update() {
    caranguejo.x = this.input.x;
    caranguejo.y = this.input.y;

   
}

//resposta à pergunta do autoestudo
var resposta = "Eu já tinha programado antes, mas há muito tempo atrás. Acho que a última vez que eu tinha realmente trabalhado em um código foi no início de 2022. E ainda, era um código básico de calculadora no javascript, se eu não me engano. Então, foi uma experiência muito legal retomar alguns conceitos de lógica de programação e rever algumas partes de HTML, CSS e Javascript!";
console.log(resposta);
