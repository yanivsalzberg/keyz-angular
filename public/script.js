var c2 = new Audio('assets/c2.mp3');
var d2 = new Audio('assets/d2.mp3');
var e2 = new Audio('assets/e2.mp3');
var f2 = new Audio('assets/f2.mp3');
var g2 = new Audio('assets/g2.mp3');
var a2 = new Audio('assets/a2.mp3');
var b2 = new Audio('assets/b2.mp3');
var c3 = new Audio('assets/c3.mp3');





var noteLog = [];

/////////////////////////////////



var audioArray = [
  {c2: new Audio('assets/c2.mp3'), bg: 'red', txt: "<b>do </b>", noteNum: 1, id: "#do"},
  {d2: new Audio('assets/d2.mp3'), bg: 'orange', txt: "<b>re </b>", noteNum: 2, id: "#re"},
  {e2: new Audio('assets/e2.mp3'), bg: 'yellow', txt: "<b>mi </b>", noteNum: 3, id: "#mi"},
  {f2: new Audio('assets/f2.mp3'), bg: 'green', txt: "<b>fa </b>", noteNum: 4, id: "#fa" },
  {g2: new Audio('assets/g2.mp3'), bg: 'blue', txt: "<b>sol </b>", noteNum: 5, id: "#sol"},
  {a2: new Audio('assets/a2.mp3'), bg: 'purple', txt: "<b>la </b>", noteNum: 6, id: "#la"},
  {b2: new Audio('assets/b2.mp3'), bg: 'pink', txt: "<b>ti </b>", noteNum: 7, id: "#ti"},
  {c3: new Audio('assets/c3.mp3'), bg: 'red', txt: "<b>do </b>", noteNum: 8, id: "#do2" }
]



var clickNote = function (audio) {
  audio.play()
  $(audio.id).css("background-color", "white");
}

// $("#do").click(clickNote(audioArray[0]))




// var clickNote = function (    ) {
//   c2.play();
//   $("#do").css("background-color", "white");
//   setTimeout(function(){
//     $("#do").css("background-color", "red");
//   }, 500);
//   noteLog.push(1);
//   console.log(noteLog);
//   $("#bx10").append("text");
// });





/////////////////////////////////

$("#do").click(function() {
  c2.play();
  $("#do").css("background-color", "white");
  setTimeout(function(){
    $("#do").css("background-color", "red");
  }, 500);
  noteLog.push(1);
  console.log(noteLog);
  $("#bx10").append("<b>do </b>");
});





$("#re").click(function() {
  d2.play();
  $("#re").css("background-color", "white");
  setTimeout(function(){
    $("#re").css("background-color", "orange");
  }, 500);
  noteLog.push(2);
  console.log(noteLog);
  $("#bx10").append("<b>re </b>");
});




$("#mi").click(function() {
  e2.play();
  $("#mi").css("background-color", "white");
  setTimeout(function(){
    $("#mi").css("background-color", "yellow");
  }, 500);
  noteLog.push(3);
  console.log(noteLog);
  $("#bx10").append("<b>mi </b>");
});



$("#fa").click(function() {
  f2.play();
  $("#fa").css("background-color", "white");
  setTimeout(function(){
    $("#fa").css("background-color", "green");
  }, 500);
  noteLog.push(4);
  console.log(noteLog);
  $("#bx10").append("<b>fa </b>");
});




$("#sol").click(function() {
  g2.play();
  $("#sol").css("background-color", "white");
  setTimeout(function(){
    $("#sol").css("background-color", "blue");
  }, 500);
  noteLog.push(5);
  console.log(noteLog);
  $("#bx10").append("<b>sol </b>");
});



$("#la").click(function() {
  a2.play();
  $("#la").css("background-color", "white");
  setTimeout(function(){
    $("#la").css("background-color", "purple");
  }, 500);
  noteLog.push(6);
  console.log(noteLog);
  $("#bx10").append("<b>la </b>");
});




$("#ti").click(function() {
  b2.play();
  $("#ti").css("background-color", "white");
  setTimeout(function(){
    $("#ti").css("background-color", "pink");
  }, 500);
  noteLog.push(7);
  console.log(noteLog);
  $("#bx10").append("<b>ti </b>");
});




$("#do2").click(function() {
  c3.play();
  $("#do2").css("background-color", "white");
  setTimeout(function(){
    $("#do2").css("background-color", "red");
  }, 500);
  noteLog.push(8);
  console.log(noteLog);
  $("#bx10").append("<b>do </b>");
});
