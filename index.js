
let app = new PIXI.Application(1440,640,{
    transparent: true
});

const sound = PIXI.sound.Sound.from('Button_Click.wav');


document.querySelector('#menu').appendChild(app.view);

//create containers

let container = new PIXI.Container();
let bets = new PIXI.Container();
let coins = new PIXI.Container();
let info = new PIXI.Container();
let win = new PIXI.Container();
let toggle = new PIXI.Container();
let toggleButton = new PIXI.Container();
let auto = new PIXI.Container();
let autoBtn = new PIXI.Container();
let autoList = new PIXI.Container();
let spin = new PIXI.Container();
let spinBtn = new PIXI.Container();

var maskAuto = new PIXI.Graphics();
maskAuto.drawRect(0, -320, 500, 400);
autoList.addChild(maskAuto);
autoList.mask = maskAuto;


const toggleOn = -30;
const toggleOff = 5;
const autoListOpen = -310;
const autoListClosed = 5;


let background = PIXI.Sprite.fromImage('img/bg_copy.png');


// create some textures from an image path
let textureButtonI = PIXI.Texture.fromImage('img/butt-i.png');
let textureButtonIDown = PIXI.Texture.fromImage('img/butt-i-down.png');
let textureButtonIOver = PIXI.Texture.fromImage('img/butt-i-hover.png');
let textureButtonIDisable = PIXI.Texture.fromImage('img/butt-i-disable.png');
let textureISign = PIXI.Texture.fromImage('img/info_sign.png');
let textureISignDisable = PIXI.Texture.fromImage('img/info_sign-disabled.png');

let textureButtonPlus = PIXI.Texture.fromImage('img/butt-plus.png');
let textureButtonPlusDown = PIXI.Texture.fromImage('img/butt-plus-down.png');
let textureButtonPlusOver = PIXI.Texture.fromImage('img/butt-plus-hover.png');
let textureButtonPlusDisable = PIXI.Texture.fromImage('img/butt-disable.png');
let textureSignPlus = PIXI.Texture.fromImage('img/plus_sign.png');
let textureSignPlusDisable = PIXI.Texture.fromImage('img/plus_sign-disable.png');
let textureSignMinus = PIXI.Texture.fromImage('img/minus_sign.png');
let textureSignMinusDisable = PIXI.Texture.fromImage('img/minus_sign-disable.png');

let textureBet =  PIXI.Texture.fromImage('img/bet_field.png');

let textureCoin = PIXI.Texture.fromImage('img/coin_bg.png');

let textureToggleOnBg = new PIXI.Texture.fromImage('img/toggle-on_bg.png');
let textureToggleOffBg = new PIXI.Texture.fromImage('img/toggle-off_bg.png');

let textureToggleOff = new PIXI.Texture.fromImage('img/toggle.png');
let textureToggleOn = new PIXI.Texture.fromImage('img/toggle-on.png');
let textureToggleOver = new PIXI.Texture.fromImage('img/toggle-hover.png');
let textureToggleDisable = new PIXI.Texture.fromImage('img/toggle-disable.png');

let textureAutoBtn = new PIXI.Texture.fromImage('img/btn_auto.png');
let textureAutoBtnDown = new PIXI.Texture.fromImage('img/btn_auto-down.png');
let textureAutoBtnOver = new PIXI.Texture.fromImage('img/btn_auto-hover.png');
let textureAutoBtnDisable = new PIXI.Texture.fromImage('img/btn_auto-disable.png');

let textureSpin = new PIXI.Texture.fromImage('img/spin_btn.png');
let textureSpinOver = new PIXI.Texture.fromImage('img/spin_btn-hover.png');
let textureSpinDown = new PIXI.Texture.fromImage('img/spin_btn-down.png');
let textureSpinDisable = new PIXI.Texture.fromImage('img/spin_btn-disable.png');


let textureSpinPlay = new PIXI.Texture.fromImage('img/spin_play.png');
let textureSpinStop = new PIXI.Texture.fromImage('img/spin_stop.png');
let textureSpinRerun = new PIXI.Texture.fromImage('img/spin_rerun.png');



let buttons = [];


//create all sprites
let buttonI = new PIXI.Sprite(textureButtonI);
let signInfo = new PIXI.Sprite(textureISign);

let buttonPlus = new PIXI.Sprite(textureButtonPlus);
let signPlus = new PIXI.Sprite(textureSignPlus);

let buttonMinus = new PIXI.Sprite(textureButtonPlus);
let signMinus = new PIXI.Sprite(textureSignMinus);

let betbg = new PIXI.Sprite(textureBet);
let coinbg = new PIXI.Sprite(textureCoin);

let winField = new PIXI.Sprite.fromImage('img/win_bg.png');

let toggleBg = new PIXI.Sprite(textureToggleOffBg);
let toggleBtn = new PIXI.Sprite(textureToggleOff);
let signToggle = new PIXI.Sprite.fromImage('img/toggle_sign.png');


let autoButton = new PIXI.Sprite(textureAutoBtn);
let autoButtonSign = new PIXI.Sprite.fromImage('img/btn_auto_sign.png');
let autoListBg = new PIXI.Sprite.fromImage('img/auto-list_bg.png');

let spinButton = new PIXI.Sprite(textureSpin);
let signSpin = new PIXI.Sprite(textureSpinPlay);





buttonPlus.down = textureButtonPlusDown;
buttonPlus.over = textureButtonPlusOver;
buttonPlus.normal = textureButtonPlus;

buttonMinus.down = textureButtonPlusDown;
buttonMinus.over = textureButtonPlusOver;
buttonMinus.normal = textureButtonPlus;

buttonI.down = textureButtonIDown;
buttonI.over = textureButtonIOver;
buttonI.normal = textureButtonI;

autoButton.down = textureAutoBtnDown;
autoButton.over = textureAutoBtnOver;
autoButton.normal = textureAutoBtn;

spinButton.over = textureSpinOver;
spinButton.down = textureSpinDown;
spinButton.normal = textureSpin;


function constr(butt){


    butt.cursor = 'grab';
    butt.anchor.set(0.5);


    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt

        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);

    // add button to array
    buttons.push(butt);
}

function constrToggle(butt){


    butt.cursor = 'grab';


    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt
    // Mouse & touch events are normalized into
    // the pointer* events for handling different
    // button events.
        .on('pointerdown', onToggleDown)
        .on('pointerover', onToggleOver)
        .on('pointerout', onToggleOut);

    // add it to the stage
    app.stage.addChild(butt);

    // add button to array
    buttons.push(butt);
}

function constrAuto(butt){

    butt.cursor = 'grab';


    // make the button interactive...
    butt.interactive = true;
    butt.buttonMode = true;

    butt

        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onAutoOver)
        .on('pointerout', onAutoOut);


    app.stage.addChild(butt);

    // add button to array
    buttons.push(butt);
}


function onButtonDown() {


    this.isdown = true;
    this.texture = this.down;
    sound.play();
}

function onButtonUp() {
    this.isdown = false;
    if (this.isOver) {
        this.texture = this.over;
    }
    else {
        this.texture = this.normal;
    }
}

function onButtonOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = this.over;
}

function onButtonOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = this.normal;
}

function onToggleDown() {

    this.isdown = true;
    if (toggleBg.texture == textureToggleOffBg){
        toggleBg.texture = textureToggleOnBg;
        toggleBtn.texture = textureToggleOn;
        toggleButton.y = toggleOn;
    }else{
        toggleBg.texture = textureToggleOffBg;
        toggleBtn.texture = textureToggleOff;
        toggleButton.y = toggleOff;
    };

    this.alpha = 1;
    sound.play();
}

function onToggleOver() {
    this.isOver = true;

    toggleBtn.texture = textureToggleOver;
}

function onToggleOut() {

    if(toggleButton.y == toggleOn){
        toggleBtn.texture = textureToggleOn;
    }else{
        toggleBtn.texture = textureToggleOff;
    }

}

function onAutoOver(){
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = this.over;
    listBgUp();
}

function onAutoOut(){
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = this.normal;
    listBgDown();
}


function listBgUp(){
    window.requestAnimationFrame(listBgUp);
    if(autoListBg.y != autoListOpen && autoButton.isOver){
        autoListBg.y -= autoListClosed;
    }
}

function listBgDown(){

    window.requestAnimationFrame(listBgDown);
    if(autoListBg.y != autoListClosed && !autoButton.isOver){
        autoListBg.y += 5;
    }
};

constr(buttonI);
constr(buttonPlus);
constr(buttonMinus);
constrToggle(toggleButton);
constrAuto(autoButton);
constr(spinButton);


buttons[0].x = 185;
buttons[0].y = 115;

buttons[1].x = 55;
buttons[1].y = 55;

buttons[2].x = 345;
buttons[2].y = 55;

signInfo.anchor.set(.5);
signInfo.x = 185;
signInfo.y = 115;


signMinus.anchor.set(.5);
signMinus.x = 55;
signMinus.y = 55;

signPlus.anchor.set(.5);
signPlus.x = 345;
signPlus.y = 55;

toggleBtn.anchor.set(.5);
toggleBtn.x = 85;
toggleBtn.y = 70;

signToggle.anchor.set(.5);
signToggle.x = 85;
signToggle.y = 70;

autoButtonSign.anchor.set(.5);
autoButtonSign.x = 100;
autoButtonSign.y = 60;

spinButton.x = 170;
spinButton.y = 170;


info.addChild(buttonI,signInfo);

coins.addChild(coinbg);
coins.x = 660;
coins.y = 65;

bets.addChild(betbg,buttonPlus,buttonMinus,signPlus,signMinus);
bets.scale.x = bets.scale.y = (1);
bets.anchor = (.5);
bets.x = 250;
bets.y = 65;

win.addChild(winField);
win.anchor = .5;
win.x = 855;
win.y = 20;

toggleButton.addChild(toggleBtn,signToggle);
toggleButton.x = 0;
toggleButton.y = 5;

toggle.addChild(toggleBg,toggleButton);
toggle.x = 1715;
toggle.y = 65;

autoBtn.addChild(autoButton,autoButtonSign);

autoList.addChild(autoListBg);
autoListBg.y = 0;


auto.addChild(autoList,autoBtn);
auto.x = 1900;
auto.y = 65;

spinBtn.addChild(spinButton,signSpin);
signSpin.x = 90;
signSpin.y = 85;

spin.addChild(spinBtn);
spin.x = 2100;
spin.y = -50;

app.stage.addChild(container);
container.addChild(background,info,bets,coins,win,toggle,auto,spin);
container.scale.x = container.scale.y = .5;
container.y = 200;

