
var imgValidate = true;
var audioValidate = true;

//Universal
function alterLightImg() { 
    if (imgValidate == true) {
        document.getElementById("lightId").src="./img/smart-home-functions/Light-On.png";
        document.getElementById("ModalLightId").src="./img/Lamp-On.gif";
        imgValidate = false;
    }else {
        document.getElementById("lightId").src="./img/smart-home-functions/Light-Off.png";
        document.getElementById("ModalLightId").src="./img/Lamp-Off.gif";
        imgValidate = true;
    }
}

//Service Room
function alterWashingMachinneImg() {
    if (imgValidate == true) {
        document.getElementById("washingMachinneId").src="./img/smart-home-functions/Washing-machinne-On.png";
        document.getElementById("ModalGarageId").src="./img/Garage-Open.gif";
        imgValidate = false;
    }else {
        document.getElementById("washingMachinneId").src="./img/smart-home-functions/Washing-machinne-Off.png";
        document.getElementById("ModalGarageId").src="./img/smart-home-functions/Washin-machinne-Off.gif";
        imgValidate = true;
    }
}

function alterRobotImg() {
    if (imgValidate == true) {
        document.getElementById("robotId").src="./img/smart-home-functions/Robot-On.png";
        document.getElementById("ModalGarageId").src="./img/Garage-Open.gif";
        imgValidate = false;
    }else {
        document.getElementById("robotId").src="./img/smart-home-functions/Robot-Off.png";
        document.getElementById("ModalGarageId").src="./img/smart-home-functions/Washin-machinne-Off.gif";
        imgValidate = true;
    }
}


//Garage
function alterGarageImg() {
    if (imgValidate == true) {
        document.getElementById("garageId").src="./img/Garage-Open.png";
        document.getElementById("ModalGarageId").src="./img/Garage-Open.gif";
        imgValidate = false;
    }else {
        document.getElementById("garageId").src="./img/Garage-Locked.png";
        document.getElementById("ModalGarageId").src="./img/Garage-Close.gif";
        imgValidate = true;
    }
}

function alterDoorImg() {
    
    if (imgValidate == true) {
        document.getElementById("doorId").src="./img/Door-Open.png";
        document.getElementById("ModalDoorId").src="./img/Door-Open.gif";
        imgValidate = false;
    }else {
        document.getElementById("doorId").src="./img/Door-Closed.png";
        document.getElementById("ModalDoorId").src="./img/Door-close.gif";
        imgValidate = true;
    }
}

//Living Room / Office
function alterAirConditionerImg() {
    
    if (imgValidate == true) {
        document.getElementById("airConditionerId").src="./img/smart-home-functions/Air-Conditioner-On.png";
        document.getElementById("ModalAirConditionerId").src="./img/Air-Conditioner-Open.gif";
        imgValidate = false;
    }else {
        document.getElementById("airConditionerId").src="./img/smart-home-functions/Air-Conditioner-Off.png";
        document.getElementById("ModalAirConditionerId").src="./img/Air-Conditioner-Close.gif";
        imgValidate = true;
    }
}



//Exterior home
function alterHomeSecurityImg() {
    
    if (imgValidate == true) {
        document.getElementById("homeSecurityId").src="./img/Home-Security-On.png";
        document.getElementById("ModalAlarmId").src="./img/warning-lights.gif";
        play()
        imgValidate = false;
        audioValidate = false
    }else {
        document.getElementById("homeSecurityId").src="./img/Home-Security-Off.png";
        document.getElementById("ModalAlarmId").src="./img/warning-lights.gif";
        play()
        imgValidate = true;
        audioValidate = true
        
    }
}


function play() {
    var audio = new Audio('./mixkit-police-siren-1641.wav');
    debugger
    if (audioValidate == true) {
        audio.play()
    }else {
        debugger
        audio.currentTime = 0
        audio.pause()
       
    }
};




//Watch
let a;
let time;
setInterval(() => {
  a = new Date();
  time = a.getHours() + ':' + a.getMinutes();
  document.getElementById('time').innerHTML = time;
}, 1000);


function alertMessage() {
    window.alert("Nenhum dispositivo conectado")
}