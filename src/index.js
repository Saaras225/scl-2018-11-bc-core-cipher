function decodifica(){
  var texto= document.getElementById("codemsj").value;
  var salto= parseInt(document.getElementById("number").value);
  var cifrado= window.cipher.decode(texto, salto);
  document.getElementById("decodemsj").value=cifrado;
  }

  function codificar(){
    var texto= document.getElementById("codemsj").value;
    var salto= parseInt(document.getElementById("number").value);
    var cifrado= window.cipher.encode(texto, salto);
    document.getElementById("decodemsj").value=cifrado;

  }

  function reset(){
    document.getElementById("codemsj").value="";
    document.getElementById("number").value="";
    document.getElementById("decodemsj").value="";
  }

  function envia(){
    var botn = document.getElementById("enviar");
    botn.innerHTML='ENVIANDO...';
    botn.disabled=true;
    setTimeout(function(){
      botn.innerHTML='ENVIAR';
      botn.disabled=false;
    },5500);
  }


document.getElementById("code").addEventListener("click", codificar);
document.getElementById("decode").addEventListener("click", decodifica);
document.getElementById("enviar").addEventListener("click", envia)
