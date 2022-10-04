
var imgValidate = false;
var audioValidate = false;

function alterGarageImg() {
    if (imgValidate == true) {
        document.getElementById("garageId").src="./img/Garage-Open.png";
        imgValidate = false;
    }else {
        document.getElementById("garageId").src="./img/Garage-Locked.png";
        imgValidate = true;
    }
}

window.onload = function alterLightImg() { 
     
    debugger
    if (imgValidate == true) {
        debugger
        document.getElementById("lightId").src="./img/Light-On.png";
        imgValidate = false;
    }else {
        debugger
        document.getElementById("lightId").src="./img/Light-Off.png";
        imgValidate = true;
    }
}

function alterDoorImg() {
    
    if (imgValidate == true) {
        document.getElementById("doorId").src="./img/Door-Open.png";
        imgValidate = false;
    }else {
        document.getElementById("doorId").src="./img/Door-Closed.png";
        imgValidate = true;
    }
}

function alterAirConditionerImg() {
    
    if (imgValidate == true) {
        document.getElementById("airConditionerId").src="./img/Air-Conditioner-On.png";
        imgValidate = false;
    }else {
        document.getElementById("airConditionerId").src="./img/Air-Conditioner-Off.png";
        imgValidate = true;
    }
}

function alterHomeSecurityImg() {
    
    if (imgValidate == true) {
        document.getElementById("homeSecurityId").src="./img/Home-Security-On.png";
        imgValidate = false;
        audioValidate = false
        play()
    }else {
        document.getElementById("homeSecurityId").src="./img/Home-Security-Off.png";
        imgValidate = true;
        play()
        audioValidate = true
    }
}


function play() {
    var audio = new Audio('./mixkit-police-siren-1641.wav');
    if (audioValidate == false) {
        audio.play()
    }else {
        audio.pause()
        audio.currentTime = 0;
    }
};


function alterLightImgModal() {
    if (imgValidate == true) {
        document.getElementById("modal-img").src="./img/lampada_on.gif";
    }else {
        document.getElementById("modal-img").src="./img/lampada_off.gif";
    }
}