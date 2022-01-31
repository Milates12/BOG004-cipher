const cipher = {
  // ...
   /* Funcion para cifrar la contraseña del usuario */
   encode: (places, message) => {
    if(places <= 0) {
      throw new TypeError("Verifique los valores")
    }
    let cipherText="";                                        //Aquí se almacena las letras que ya fueron cifradas por el 'for'
    for (let i=0; i<message.length; i++) {                   // For para recorrer el array y cambiar las letras
      let turnInto = message.charCodeAt(i);                  //Convierte cada letra en código ASCII
      if (turnInto < 65 || turnInto > 90) {                 //Condicional 'if' para aceptar solamente las letras mayúsculas
        alert("Por favor, solo ingresa letras mayúsculas."); // Alert si la persona no escribe en letras mayúsculas
      } else {
        turnInto = (turnInto-65+parseInt(places))%26+65;    //Si se cumple la condición puede aplicar la formula para cifrar la contraseña
        cipherText += String.fromCharCode(turnInto);         // Iteración para retornar un 'string' y almacenarlo en la variable 'cipherText'
      }
    }
    return cipherText;
  },
  //Funcion para descrifrar la contraseña del usuario
  decode: (places2, message2) => {
    if(places2 <= 0) {
      throw new TypeError("Verifique los valores")
    }
    let decipherText="";                                //Aquí se almacena las letras que ya fueron descifradas por el 'for'
    for (let i=0; i<message2.length; i++){              // For para recorrer el array y cambiar las letras
      let turnInto2 = message2.charCodeAt(i);           //Convierte cada letra en código ASCII
      if (turnInto2 < 65 || turnInto2 > 90) {           //Condicional 'if' para aceptar solamente las letras mayúsculas
        alert("Por favor, solo ingresa letras mayúsculas."); // Alert si la persona no escribe en letras mayúsculas
      } else {
        turnInto2 = (turnInto2+65-parseInt(places2))%26+65;    /* Si se cumple la condición puede aplicar la formula para cifrar la contraseña */
        decipherText += String.fromCharCode(turnInto2);    // Iteración para retornar un 'string' y almacenarlo en la variable 'cipherText'
      }
    }
    return decipherText;
  }
};

export default cipher;
