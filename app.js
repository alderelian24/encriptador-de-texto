// Diccionario de encriptación
const encryptDict = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función de encriptación
function encriptar() {
    let texto = document.getElementById('texto').value.toLowerCase();
    let textoEncriptado = texto.replace(/[aeiou]/g, letra => encryptDict[letra]);
    mostrarResultado(textoEncriptado);
}

// Función de desencriptación
function desencriptar() {
    let texto = document.getElementById('texto').value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, function(matched){
        return Object.keys(encryptDict).find(key => encryptDict[key] === matched);
    });
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    let resultadoDiv = document.querySelector('.contenido__resultado');
    resultadoDiv.innerHTML = `
        <textarea readonly id="resultado">${texto}</textarea>
        <button onclick="copiarTexto()" class="boton__copiar">Copiar</button>
    `;
}

// Función para copiar el texto
function copiarTexto() {
    let resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

// Agrergar eventos a los botones
document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);