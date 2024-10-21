function enviar(){
  alert('grabar');
}
function verificaryenviar(){
  var nom = document.getElementById('nom').value;
  var mail = document.getElementById('mail').value;
  var asunto = document.getElementById('asunto').value;
  var men = document.getElementById('men').value;
  if(nom!='' & asunto!='' & mail!='' & men!=''){
    enviar();
  }
  else{
    alert('Por favor completar los Datos solicitados');
    document.getElementById('nom').focus();
  }
}
function abriryoutube(){
  window.open('https://youtube.com/@celaida.tejidos?si=eVjjuCvdzKPyztkc');
}
window.onload = function () {
    document.getElementById('canalyoutube').onclick = abriryoutube
    document.getElementById('enviar').onclick = verificaryenviar
}