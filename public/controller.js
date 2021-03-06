app.controller('controller', function ($scope){

  $scope.recording = [];

  $scope.soundLibrary = [
    {color: "red", name: "do", sound: new Audio('assets/c2.mp3'), noteNum: 1},
    {color: "orange", name: "re", sound: new Audio('assets/d2.mp3'), noteNum: 2},
    {color: "yellow", name: "mi", sound: new Audio('assets/e2.mp3'), noteNum: 3},
    {color: "green", name: "fa", sound: new Audio('assets/f2.mp3'), noteNum: 4},
    {color: "blue", name: "sol", sound: new Audio('assets/g2.mp3'), noteNum: 5},
    {color: "purple", name: "la", sound: new Audio('assets/a2.mp3'), noteNum: 6},
    {color: "pink", name: "ti", sound: new Audio('assets/b2.mp3'), noteNum: 7},
    {color: "red", name: "do", sound: new Audio('assets/c3.mp3'), noteNum: 8}
  ]

  $scope.makeNoise = function(key){
    key.sound.play();
    $scope.recording.push(key.name);
    
  }

});
