window.cipher = {
  encode: (stringU,jump) => {
      let stringResult="";
      let code= stringU.toUpperCase();
      for (i=0;i<=code.length;i++){
        let carac= code.charAt(i);
        let codeString= carac.charCodeAt(0);
        if (codeString>=65&&codeString<=90){
          let ascii= (codeString-65+jump)%26+65;
          let coding= String.fromCharCode(ascii);
          stringResult= stringResult+coding;
        } else {
          stringResult= stringResult+carac;
        }
      }
      return stringResult;
  },

    decode: (stringU,jump) => {
      let stringResult="";
      let code= stringU.toUpperCase();
      for (i=0;i<=code.length;i++){
        let carac= code.charAt(i);
        let codeString= carac.charCodeAt(0);
        if (codeString>=65&&codeString<=90){
          let ascii= (codeString+65-jump)%26+65;
          let coding= String.fromCharCode(ascii);
          stringResult= stringResult+coding;
        } else {
          stringResult= stringResult+carac;
        }
      }
      return stringResult;
    }

  };
