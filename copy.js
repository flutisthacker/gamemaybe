document.addEventListener("keyup", (e) => {
  if (e.keyCode == 122) {
    document.requestFullscreen().catch((err) => console.log("couldnt open in fullscreen"))
  }
  if (e.keyCode == 27) {
    document.requestFullscreen().catch((err) => console.log("couldnt open in fullscreen"))
  }
})

function copy() {
  var content = document.getElementById('content').innerHTML;
  var textare = document.createElement('textarea')
  textare.value = content
  textare.setAttribute('readonly', '')
  textare.style = {
    position: 'absolute',
    left: '-9999px'
  }
  document.querySelector('body').appendChild(textare);
  textare.select()
  document.execCommand('copy');
  console.log('copied')
  document.querySelector('body').removeChild(textare)
}

function paste() {
  var container = document.getElementById('pastehere').innerHTML;
  var textare = document.createElement('textarea')
  textare.value = content
  textare.setAttribute('readonly', '')
  textare.style = {
    position: 'absolute',
    left: '-9999px'
  }
  document.querySelector('body').appendChild(textare);
  textare.select()
  document.execCommand('paste');
  alert('copied')
  document.querySelector('body').removeChild(textare)
}

function handlePaste(e) {
  var clipboardData, pastedData;

  // Stop data actually being pasted into div
  e.stopPropagation();
  e.preventDefault();

  // Get pasted data via clipboard API
  clipboardData = e.clipboardData || window.clipboardData;
  pastedData = clipboardData.getData('Text');

  // Do whatever with pasteddata
  alert(pastedData);
}
document.getElementById('pastebtn').addEventListener('paste', handlePaste);
