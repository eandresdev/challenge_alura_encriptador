
function encriptar() {
    let inputText = document.querySelector(".form__txt__entrada").value;
    let textoEncriptado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let inputText = document.querySelector(".form__txt__entrada").value;
    let textoDesencriptado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let resultadoContainer = document.querySelector(".txt__salida__container");
    let titulo = document.querySelector(".txt__salida__titulo");
    let mensaje = document.querySelector(".txt__salida__msj");
    let botonCopiar = document.getElementById("btnCopiar");

    titulo.textContent = "Tu mensaje ha sido cifrado.";
    mensaje.textContent = texto;
    botonCopiar.classList.remove("hidden"); // Muestra el botón de copiar
}

function copiarTexto() {
    let texto = document.querySelector(".txt__salida__msj").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}





//  const d = document;
//  const textArea = d.querySelector('.form__txt__entrada');




// const claves = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

// function encriptar(frase) {
//     let textoEncriptado = "";

//     for(let i = 0; i < frase.length; i++) {

//         let letra = frase[i];
//         let encriptada = letra;
//         for(let j = 0; j < claves.length; j++) {
//             if(letra === claves[j][0]) {
//                 encriptada = claves[j][1]; 
//                 break;
//             }
            
//         }
//         textoEncriptado += encriptada ;
//     }

//     return textoEncriptado;
// }

// function desencriptar(frase) {
//     let textoDesencriptado = "";
   
//     for (let i = 0; i < frase.length; i++) {
//         let segmentoEncontrado = false;

//         for (let j = 0; j < claves.length; j++) {
//             let encriptado = claves[j][1];

//             if (frase.startsWith(encriptado, i)) {
//                 textoDesencriptado += claves[j][0]; 
//                 i += encriptado.length - 1; 
//                 segmentoEncontrado = true;
//                 break;
//             }
//         }

//         if (!segmentoEncontrado) {
//             textoDesencriptado += frase[i];
//         }
//     }

//     return textoDesencriptado;
// }