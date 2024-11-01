
function myFunction(){
    var element = document.body;
    element.classList.toggle("pink-mode");
 }

var div = document.getElementById('log2');
var texto = 'Larissa Rocha';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
  if (!char.length) return clearInterval(typer);
  var next = char.pop();
  el.innerHTML += next;
  },90);
}

escrever(texto, div);