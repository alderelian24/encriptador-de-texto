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
    let resultadoDiv = document.getElementById('resultado');
    let imagenResultado = document.getElementById('imagen-resultado');
    let textoResultado = document.getElementById('texto-resultado');
    let textoEncriptado = document.getElementById('texto-encriptado');
    let botonCopiar = document.getElementById('copiar');

    if (texto) {
        imagenResultado.style.display = 'none';
        textoResultado.style.display = 'none';
        textoEncriptado.style.display = 'block';
        botonCopiar.style.display = 'block';
        textoEncriptado.value = texto;
    } else {
        imagenResultado.style.display = 'block';
        textoResultado.style.display = 'block';
        textoEncriptado.style.display = 'none';
        botonCopiar.style.display = 'none';
    }
}

// Función para copiar el texto
function copiarTexto() {
    let textoEncriptado = document.getElementById('texto-encriptado');
    textoEncriptado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.getElementById('copiar').addEventListener('click', copiarTexto);

// Agrergar eventos a los botones
document.getElementById('encriptar').addEventListener('click', encriptar);
document.getElementById('desencriptar').addEventListener('click', desencriptar);