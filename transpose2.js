var Ckey = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "-"];
var Nepnotes = ["सा", "रेे।", "रे", "ग|", "ग", "म", "म।", "प", "ध।", "ध", "नि।", "नि", "-"];
var Cskey = ["c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "-"];
var Dkey = ["d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "-"];
var Dskey = ["d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "-"];
var Ekey = ["e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "-"];
var Fkey = ["f", "f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "-"];
var Fskey = ["f#", "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "-"];
var Gkey = ["g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "-"];
var Gskey = ["g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "-"];
var Akey = ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "-"];
var Askey = ["a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "-"];
var Bkey = ["b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "-"];

// songs = document.querySelector("#songs");
// songkey = document.querySelector("#songkey");
// translate = document.querySelector("#translate");
// Ckey.map(key => console.log(`${key} is the natural key`))

// translate.addEventListener("click", () => {
//   // translates(eval(songs.value))
//   translates(totranspose)
// });
// songs.addEventListener("change", () => {
//   transpose(eval(songs.value), eval(songkey.value + "key"))
// });
// songkey.addEventListener("change", () => {
//   transpose(eval(songs.value), eval(songkey.value + "key"))
// });

var totranspose = [];

function translates(note) {
  // to nepali
  let newscale = [];
  for (i = 0; i < note.length; i++) {
    if ((note[i].length == 2 || note[i].length == 3 || note[i].length == 4) && !note[i].includes("#")) {
      notej = [];
      notei = note[i].split("")
      console.log(notei, note[i])
      for (z = 0; z < notei.length; z++) {
        for (x = 0; x < Ckey.length; x++) {
          if (notei[z] == Ckey[x]) {
            console.log(Ckey[x], notei[z], Nepnotes[x])
            notej.push(Nepnotes[x])
          }
        }
      }
      console.log("my length" + note[i].length, note[i]);

      console.log(notej)
      const searchRegExp = /,/g;
      const replaceWith = '';
      const result = notej.join().replace(searchRegExp, replaceWith);
      newscale.push(result);
    }

    for (j = 0; j < Nepnotes.length; j++) {
      if (note[i] == Ckey[j]) {
        console.log(note[i], Nepnotes[j])
        newscale.push(Nepnotes[j]);
      }
    }
  }
  // hello
  return newscale;
  // tabledisplay(newscale);
}

function transpose(note, key) {
  newscale = [];
  for (i = 0; i < note.length; i++) {
    if (note[i].length == 2 || note[i].length == 3 || note[i].length == 4) {
      notej = [];
      notei = note[i].split("")
      // console.log(notei, note[i])
      for (z = 0; z < notei.length; z++) {
        for (x = 0; x < Ckey.length; x++) {
          if (notei[z] == Ckey[x]) {
            // console.log(Ckey[x], notei[z], key[x])
            notej.push(key[x])
          }
        }
      }
      console.log("my length" + note[i].length, note[i]);
      console.log(notej + "conjoined piece")
      const searchRegExp = /,/g;
      const replaceWith = '';
      const result = notej.join().replace(searchRegExp, replaceWith);
      newscale.push(result);

    }
    for (j = 0; j < Ckey.length; j++) {
      if (note[i] == Ckey[j]) {
        newscale.push(key[j]);
      }
    }
  }
  totranspose = newscale;
  // tabledisplay(newscale);
  return newscale;
}

function tabledisplay(na) {
  maketable();
  count = 0;
  tbody = document.querySelector('.tbody');
  for (i = 0; i < na.length; i++) {
    if (i % 8 == 0) {
      tr = document.createElement('tr');
    }
    td = document.createElement('td');
    td.innerHTML = na[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  }
}

function maketable() {
  //     <table class="table table-hover">
  //   <thead class="thead thead-dark">
  //     <tr>
  //       <td>1</td>
  //       <td>2</td>
  //       <td>3</td>
  //       <td>4</td>
  //     </tr>
  //   </thead>
  //   <tbody class="tbody"></tbody>
  // </table>

  body = document.querySelector('.list');
  body.innerHTML = ""
  table = document.createElement('table');
  table.className = "table table-hover"
  thead = document.createElement('thead');
  thead.className = "thead bg-dark text-light"
  tbody = document.createElement('tbody');
  tbody.className = "tbody"
  theadtr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = "1";
  td2 = document.createElement('td');
  td2.innerHTML = "2";
  td3 = document.createElement('td');
  td3.innerHTML = "3";
  td4 = document.createElement('td');
  td4.innerHTML = "4";
  td5 = document.createElement('td');
  td5.innerHTML = "5";
  td6 = document.createElement('td');
  td6.innerHTML = "6";
  td7 = document.createElement('td');
  td7.innerHTML = "7";
  td8 = document.createElement('td');
  td8.innerHTML = "8";
  table.prepend(tbody)
  theadtr.prepend(td8)
  theadtr.prepend(td7)
  theadtr.prepend(td6)
  theadtr.prepend(td5)
  theadtr.prepend(td4)
  theadtr.prepend(td3)
  theadtr.prepend(td2)
  theadtr.prepend(td1)
  thead.prepend(theadtr)
  table.prepend(thead)
  body.prepend(table)

}
