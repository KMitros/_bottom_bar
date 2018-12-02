var PIXI = require("pixi.js");
var app = new PIXI.Application(1000,90,{
    roundPixels:
});



document.querySelector('#menu').appendChild(app.view);

//create containers

let container = new PIXI.Container();
let bets = new PIXI.Container();


var background = PIXI.Sprite.fromImage('img/bg_copy.png');
background.width = 1440;
background.height = 90;




// create some textures from an image path
var textureButton = PIXI.Texture.fromImage('img/butt-i-n.png');
var textureButtonDown = PIXI.Texture.fromImage('img/butt-i-down.png');
var textureButtonOver = PIXI.Texture.fromImage('img/butt-i-hover.png');

var textureButtonPlus = PIXI.Texture.fromImage('img/butt-plus.png');
var textureButtonPlusDown = PIXI.Texture.fromImage('img/butt-plus-hover.png');
var textureButtonPlusOver = PIXI.Texture.fromImage('img/butt-plus-down.png');

var textureBet =  PIXI.Texture.fromImage('img/bet_field.png');

var buttons = [];

var buttonPositions = [
    85, 65
];

var button = new PIXI.Sprite(textureButton);
var buttonPlus = new PIXI.Sprite(textureButtonPlus);
var betbg = new PIXI.Sprite(textureBet);












function constr(butt){

    butt.buttonMode = true;

    butt.anchor.set(0.5);
    butt.x = buttonPositions[0];
    butt.y = buttonPositions[1];

    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt
    // Mouse & touch events are normalized into
    // the pointer* events for handling different
    // button events.
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    // Use mouse-only events
    // .on('mousedown', onButtonDown)
    // .on('mouseup', onButtonUp)
    // .on('mouseupoutside', onButtonUp)
    // .on('mouseover', onButtonOver)
    // .on('mouseout', onButtonOut)

    // Use touch-only events
    // .on('touchstart', onButtonDown)
    // .on('touchend', onButtonUp)
    // .on('touchendoutside', onButtonUp)

    // add it to the stage
    app.stage.addChild(butt);

    // add button to array
    buttons.push(butt);
}

constr(button);

constr(buttonPlus);

// set some silly values...
buttons[0].scale.set(.5);


buttons[1].x = 50;
buttons[1].y = 55;


function onButtonDown() {

    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = textureButtonOver;
    }
    else {
        this.texture = textureButton;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = textureButtonOver;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = textureButton;
}


bets.addChild(betbg,buttonPlus);
bets.scale.x = bets.scale.y = (0);
bets.anchor = (.5);
bets.x = 155;
bets.y = 55;


app.stage.addChild(container);
container.addChild(background,button, bets);
container.scale.x = container.scale.y = 0.5;
container.y = 40;