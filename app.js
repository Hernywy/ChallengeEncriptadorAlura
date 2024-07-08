function getTextAndShow() {
    //Obtener texto
    var inputText = document.getElementById('Input').value;
    console.log(inputText);
    //encriptar texto
    let encryptedText = encryptText(inputText);
    console.log(encryptedText);
    //ocultar imagen
    document.getElementById("Imagen").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "flex";
    //mostrar texto
    document.getElementById("texto-encriptado").innerHTML = encryptedText;
}

function encryptText(text) {
    var encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    var decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        return decryptedText;
}

function getTextAndDecrypt(){
    var inputText = document.getElementById('Input').value;
    console.log(inputText);
    let decryptedText = decryptText(inputText);
    document.getElementById("Imagen").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "flex";
    //mostrar texto
    document.getElementById("texto-encriptado").innerHTML = decryptedText;
}

function copyText() {
    var inputText = document.getElementById('texto-encriptado').innerText;
    var tempInput = document.createElement('textarea');
    tempInput.value = inputText;
    document.body.appendChild(tempInput);

    // Selecciona el texto y lo copia al portapapeles
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');

    // Elimina el elemento temporal
    document.body.removeChild(tempInput);

    // Opcional: Muestra una alerta indicando que el texto se ha copiado
    alert("Texto copiado al portapapeles");
}

document.getElementById("textoEncriptado").style.display = "none";