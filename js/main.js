const lastActivity = {
  'open_gate': false,
  'turn_lights': false,
  'turn_cooler': false,
  'open_door': false
};

function openGate() {
  const element = document.getElementById('open_gate');
  var lastActivity = true;
  return lastActivity.open_gate === true ? console.log('Fechando o portao') : console.log('Abrindo o portao');
};

 function soundAlarm() {
   const element = document.getElementById('sound_alarm');
   return console.log('Muito barulho de buzina');
 };

 function turnOnLights(lastActivity) {
   const element = document.getElementById('turn_on_lights');
   return lastActivity.turn_lights === true ? console.log('Apagando as luzes da garagem') : console.log('Ligando as luzes da garagem');
 };


 function turnOnAirCooler(lastActivity) {
   const element = document.getElementById('turn_on_air_cooler');
   return lastActivity.turn_cooler === true ? console.log('Desligando ar condicionado') : console.log('Ligando ar condicionado');
 };

 function openDoor(lastActivity) {
   const element = document.getElementById('open_door');
   return lastActivity.open_gate === true ? console.log('Fechando a porta de casa') : console.log('Abrindo a porta de casa');
 };

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
    hh = 12;
  }
  if(hh > 12){
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
