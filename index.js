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
  

document.getElementById("code").addEventListener("click", codificar);
document.getElementById("decode").addEventListener("click", decodifica);
