    var hexnum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    // document.querySelector("#generatecolor").addEventListener("click", generatecolor)

    function generatecolor() {
      var myhex = [];
      var newColor = "#";
      for (i = 0; i < 6; i++) {
        var ass = Math.floor(Math.random() * 14);
        // console.log("ass" + ass)
        for (j = 0; j < hexnum.length; j++) {
          if (ass == j) {
            newColor += hexnum[j];
            myhex.push(hexnum[j])
          }
          // console.log(j, hexnum[j])
        }
      }
      myhex.unshift("#");
      // console.log(myhex.join())

      // document.querySelector("#content").innerText = newColor;
      // document.querySelector(".genCol").style = "background:" + newColor + ";";
      // document.querySelector(".genColor").value = newColor;
      // copy();
      return newColor;
    }


    function invertcolor(color) {
      // var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
      console.log(result)
      var b = color.toString().split("");
      hexnumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      hexinverse = ["f", "e", "d", "c", "b", "a", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
      var myIndex = [];
      var myhexcolor = [];
      var newcolor = "#";
      // console.log(b)
      for (var i = 1; i < b.length; i++) {
        for (var j = 0; j < hexnumber.length; j++) {
          if (b[i] == hexnumber[j]) {
            myIndex.push(j);
            myhexcolor.push(hexinverse[j]);
            newcolor += hexinverse[j];
            // console.log(j, b[i], hexnumber[j])
          }
        }
      }
      myhexcolor.unshift("#");
      return newcolor;
    }
