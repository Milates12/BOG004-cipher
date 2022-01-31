import cipher from './cipher.js';

// Aqui se obtiene el elemento por su ID "buttonCi" del HTML para ser manipulados en JS
let botonCifrar = document.getElementById("buttonCi");
// Funcion para cifrar el mensaje con el click
    function cipherClick(){  
        let places = document.getElementById("displacement").value; // Se obtiene el elemento por su ID del offset 'displacement'
        let message = document.getElementById("cipherInput").value; // Se obtiene el elemento por su ID del 'cipherInput'
         // console.log(places,message);  //Solamente sirve para saber si la función es correcta en la consola
        let cipherPassword = cipher.encode(places,message); //Dejamos en una variable el objeto chiper con su método encode
        document.getElementById("spanCipher").innerHTML = 'Tu contraseña cifrada es: '+ cipherPassword; // Se invoca el elemento 'spanCipher' con un .innerHTMl para mostrarlo en la página
        // console.log(cipherPassword);  // Muestra en la consola el resultado del cifrado para verificar si está bien
    }
// Evento para escuchar el click del botón 'Cifrar'
botonCifrar.addEventListener("click",cipherClick);

// Aqui se obtiene el elemento por su ID "decipher" del HTML para ser manipulados en JS
    let botonDescifrar = document.getElementById("decipher");
// Funcion para descifrar el mensaje con el click
    function deCipherClick(){
        let places2 = document.getElementById("displacementBack").value; // Se obtiene el elemento por su ID del offset 'displacementBack'
        let message2 = document.getElementById("decipherInput").value; // Se obtiene el elemento por su ID del 'decipherInput'
        // console.log(places2,message2); //Solamente sirve para saber si la función es correcta en la consola
        let decipherPassword = cipher.decode(places2,message2); //Dejamos en una variable el objeto chiper con su método decode
        document.getElementById("spanDecipher").innerHTML = 'Tu contraseña descifrada es: ' + decipherPassword; // Se invoca el elemento 'spanCipher' con un .innerHTMl para mostrarlo en la página
        //console.log(decipherPassword); // Muestra en la consola el resultado del descifrado para verificar si está bien
    }
botonDescifrar.addEventListener("click", deCipherClick);

// console.log(cipher);
