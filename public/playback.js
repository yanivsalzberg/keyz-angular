function clicked() {

  for (var i = 0; i < noteLog.length; i++) {
      console.log(noteLog[i]);

      if (noteLog[i]==1) {
        c2.play();
        setTimeout('', 1000);
      }
      else if (noteLog[i]==2) {
        d2.play();
      }
      else if (noteLog[i]==3) {
        e2.play();
      }
      else if (noteLog[i]==4) {
        f2.play();
      }
      else if (noteLog[i]==5) {
        g2.play();
      }
      else if (noteLog[i]==6) {
        a2.play();
      }
      else if (noteLog[i]==7) {
        b2.play();
      }
      else if (noteLog[i]==8) {
        c3.play();
      }

    }

    noteLog = [];

}





  // switch(expression) {
  //     case n:
  //         code block
  //         break;
  //     case n:
  //         code block
  //         break;
  //     default:
  //         code block
  // }
