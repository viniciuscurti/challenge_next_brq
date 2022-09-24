
var imgValidate = false;

function alterGarageImg() {
    
    if (imgValidate == true) {
    document.getElementById("garageId").src="../img/Garage-Open.png";
    imgValidate = false;
    }else if (imgValidate == false) {
    document.getElementById("garageId").src="../img/Garage-Locked.png";
    imgValidate = true;
    }
}

function alterLightImg() {
    
    if (imgValidate == true) {
    document.getElementById("lightId").src="../img/Light-On.png";
    imgValidate = false;
    }else if (imgValidate == false) {
    document.getElementById("lightId").src="../img/Light-Off.png";
    imgValidate = true;
    }
}

function alterDoorImg() {
    
    if (imgValidate == true) {
    document.getElementById("doorId").src="../img/Door-Open.png";
    imgValidate = false;
    }else if (imgValidate == false) {
    document.getElementById("doorId").src="../img/Door-Closed.png";
    imgValidate = true;
    }
}

function alterAirConditionerImg() {
    
    if (imgValidate == true) {
    document.getElementById("airConditionerId").src="../img/Air-Conditioner-On.png";
    imgValidate = false;
    }else if (imgValidate == false) {
    document.getElementById("airConditionerId").src="../img/Air-Conditioner-Off.png";
    imgValidate = true;
    }
}

function alterHomeSecurityImg() {
    
    if (imgValidate == true) {
    document.getElementById("homeSecurityId").src="../img/Home-Security-On.png";
    imgValidate = false;
    }else if (imgValidate == false) {
    document.getElementById("homeSecurityId").src="../img/Home-Security-Off.png";
    imgValidate = true;
    }
}

