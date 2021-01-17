$(document).ready(function() {

// Setting the current day and time
var currentDay = document.getElementById("currentDay");
var now = moment().format("LLLL");
currentDay.innerHTML= now;


// Saving items in hourly blocks into local storage

// Block 1
$(".save").on("click", function(event){
    event.preventDefault();

    var message1 = document.querySelector("#block-1").value;
    localStorage.setItem("message1", message1);
    
 });

function getMessage1(){
   var storedMessage1 = localStorage.getItem("message1");

   if(storedMessage1 !== null) {
      document.querySelector("#block-1").value = storedMessage1;
   }
   else
      document.querySelector("#block-1").value = "";
}

$("#block-1").on("load", getMessage1());

// Block 2
$(".save").on("click", function(event){
   event.preventDefault();

   var message2 = document.querySelector("#block-2").value;
   localStorage.setItem("message2", message2);
   
});

function getMessage2(){
  var storedMessage2 = localStorage.getItem("message2");

  if(storedMessage2 !== null) {
     document.querySelector("#block-2").value = storedMessage2;
  }
  else
     document.querySelector("#block-2").value = "";
}

$("#block-2").on("load", getMessage2());

// Block 3
$(".save").on("click", function(event){
   event.preventDefault();

   var message3 = document.querySelector("#block-3").value;
   localStorage.setItem("message3", message3);
   
});

function getMessage3(){
  var storedMessage3 = localStorage.getItem("message3");

  if(storedMessage3 !== null) {
     document.querySelector("#block-3").value = storedMessage3;
  }
  else
     document.querySelector("#block-3").value = "";
}

$("#block-3").on("load", getMessage3());

// Block 4
$(".save").on("click", function(event){
   event.preventDefault();

   var message4 = document.querySelector("#block-4").value;
   localStorage.setItem("message4", message4);
   
});

function getMessage4(){
  var storedMessage4 = localStorage.getItem("message4");

  if(storedMessage4 !== null) {
     document.querySelector("#block-4").value = storedMessage4;
  }
  else
     document.querySelector("#block-4").value = "";
}

$("#block-4").on("load", getMessage4());

// Block 5
$(".save").on("click", function(event){
   event.preventDefault();

   var message5 = document.querySelector("#block-5").value;
   localStorage.setItem("message5", message5);
   
});

function getMessage5(){
  var storedMessage5 = localStorage.getItem("message5");

  if(storedMessage5 !== null) {
     document.querySelector("#block-5").value = storedMessage5;
  }
  else
     document.querySelector("#block-5").value = "";
}

$("#block-5").on("load", getMessage5());

// Block 6
$(".save").on("click", function(event){
   event.preventDefault();

   var message6 = document.querySelector("#block-6").value;
   localStorage.setItem("message6", message6);
   
});

function getMessage6(){
  var storedMessage6 = localStorage.getItem("message6");

  if(storedMessage6 !== null) {
     document.querySelector("#block-6").value = storedMessage6;
  }
  else
     document.querySelector("#block-6").value = "";
}

$("#block-6").on("load", getMessage6());

// Block 7
$(".save").on("click", function(event){
   event.preventDefault();

   var message7 = document.querySelector("#block-7").value;
   localStorage.setItem("message7", message7);
   
});

function getMessage7(){
  var storedMessage7 = localStorage.getItem("message7");

  if(storedMessage7 !== null) {
     document.querySelector("#block-7").value = storedMessage7;
  }
  else
     document.querySelector("#block-7").value = "";
}

$("#block-7").on("load", getMessage7());

// Block 8
$(".save").on("click", function(event){
   event.preventDefault();

   var message8 = document.querySelector("#block-8").value;
   localStorage.setItem("message8", message8);
   
});

function getMessage8(){
  var storedMessage8 = localStorage.getItem("message8");

  if(storedMessage8 !== null) {
     document.querySelector("#block-8").value = storedMessage8;
  }
  else
     document.querySelector("#block-8").value = "";
}

$("#block-8").on("load", getMessage8());

// Block 9
$(".save").on("click", function(event){
   event.preventDefault();

   var message9 = document.querySelector("#block-9").value;
   localStorage.setItem("message9", message9);
   
});

function getMessage9(){
  var storedMessage9 = localStorage.getItem("message9");

  if(storedMessage9 !== null) {
     document.querySelector("#block-9").value = storedMessage9;
  }
  else
     document.querySelector("#block-9").value = "";
}

$("#block-9").on("load", getMessage9());

// Setting colour of the block

var currentHour = parseInt(moment().format('H'));

var row1 = document.querySelector("#block-1");
var row1 = 9
var row2 = document.querySelector("#block-2");
var row2 = 10
var row3 = document.querySelector("#block-3");
var row3 = 11
var row4 = document.querySelector("#block-4");
var row4 = 12
var row5 = document.querySelector("#block-5");
var row5 = 13
var row6 = document.querySelector("#block-6");
var row6 = 14
var row7 = document.querySelector("#block-7");
var row7 = 15
var row8 = document.querySelector("#block-8");
var row8 = 16
var row9 = document.querySelector("#block-9");
var row9 = 17


//if (currentHour === row1) {
//      setColor(row, "red");
//    } else if ((currentHour < row1)) {
//      setColor(row, "green");
//    } else if ((currentHour > row1)) {
//      setColor(row, "grey");
//    } else {
//      setColor(row, "white");
//    }

//const rows = document.getElementsByClassName("row");
//let currentHour = parseInt(moment().format('H'));

//Array.from(rows).forEach(row => {
//  let
//    rowIdString = row.id,
//    rowHour;
//  if (rowIdString) {
//    rowHour = parseInt(rowIdString);
//  }
//  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
//    if (currentHour === rowHour) {
//      setColor(row, "red");
//    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//      setColor(row, "green");
//    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//      setColor(row, "lightgrey");
//    } else {
//      setColor(row, "white");
//    }
//  }
//});

//function setColor(row1, color) {
//  row1.style.backgroundColor = color;
//}

// Block 1
if (currentHour === row1) {
 $("#block-1").css("background-color","red");
}
   else if(currentHour > row1) {
    $("#block-1").css("background-color","lightgrey");
}
else if(currentHour < row1){

$("#block-1").css("background-color","green");
}

// Block 2
if (currentHour === row2) {
   $("#block-2").css("background-color","red");
  }
     else if(currentHour > row2) {
      $("#block-2").css("background-color","lightgrey");
  }
  else if(currentHour < row2){
  
  $("#block-2").css("background-color","green");
  }

// Block 3
if (currentHour === row3) {
   $("#block-3").css("background-color","red");
  }
     else if(currentHour > row3) {
      $("#block-3").css("background-color","lightgrey");
  }
  else if(currentHour < row3){
  
  $("#block-3").css("background-color","green");
  }

// Block 4
if (currentHour === row4) {
   $("#block-4").css("background-color","red");
  }
     else if(currentHour > row4) {
      $("#block-4").css("background-color","lightgrey");
  }
  else if(currentHour < row4){
  
  $("#block-4").css("background-color","green");
  }

// Block 5
if (currentHour === row5) {
   $("#block-5").css("background-color","red");
  }
     else if(currentHour > row5) {
      $("#block-5").css("background-color","lightgrey");
  }
  else if(currentHour < row5){
  
  $("#block-5").css("background-color","green");
  }

// Block 6
if (currentHour === row6) {
   $("#block-6").css("background-color","red");
  }
     else if(currentHour > row6) {
      $("#block-6").css("background-color","lightgrey");
  }
  else if(currentHour < row6){
  
  $("#block-6").css("background-color","green");
  }

// Block 7
if (currentHour === row7) {
   $("#block-7").css("background-color","red");
  }
     else if(currentHour > row7) {
      $("#block-7").css("background-color","lightgrey");
  }
  else if(currentHour < row7){
  
  $("#block-7").css("background-color","green");
  }  

// Block 8
if (currentHour === row8) {
   $("#block-8").css("background-color","red");
  }
     else if(currentHour > row8) {
      $("#block-8").css("background-color","lightgrey");
  }
  else if(currentHour < row8){
  
  $("#block-8").css("background-color","green");
  }  

// Block 9
if (currentHour === row9) {
   $("#block-9").css("background-color","red");
  }
     else if(currentHour > row9) {
      $("#block-9").css("background-color","lightgrey");
  }
  else if(currentHour < row9){
  
  $("#block-9").css("background-color","green");
  }  

 });