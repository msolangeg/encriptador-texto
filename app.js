
// --------------------------------------Limpiar caja-------------------------
function limpiarCaja() {
    document.getElementById('textOriginal').value = '';
}
// ----------------------------------------------Esconder boton y textarea-----
 document.getElementById('output_text').style.display = 'none'

// -----------------------------------------funcion encriptar------------------

function encriptar() {
   
    const textCapture = document.getElementById('textOriginal').value;
    let textModify = "";

    
    if (textCapture) {
        document.getElementById('image_astro').style.display = 'none'
        document.getElementById('empty_message').style.display = 'none'
        document.getElementById('output_text').style.display = ''

      for (let i = 0; i < textCapture.length; i++) {
        const letra = textCapture[i].toLowerCase();

        switch (letra) {
          case 'e':
            textModify += 'enter';
            break;
          case 'i':
            textModify += 'imes';
            break;
          case 'a':
            textModify += 'ai';
            break;
          case 'o':
            textModify += 'ober';
            break;
          case 'u':
            textModify += 'ufat';
            break;
          default:
            textModify += letra;
           
        }
      }
      document.getElementById('textOutput').textContent = textModify;
      limpiarCaja();
    }    
}

// --------------------------------------funcion desencriptar------------------

function desencriptar(textoEncriptado) {
      const reglasDes = {
          enter: "e",
          imes: "i",
          ai: "a",
          ober: "o",
          ufat: "u"
        };

    let textoDesencriptado = "";
    
    document.getElementById('image_astro').style.display = 'none'
    document.getElementById('empty_message').style.display = 'none'
  

let i = 0;
while (i < textoEncriptado.length) {
    let segmento = "";
    if (i + 5 <= textoEncriptado.length && reglasDes.hasOwnProperty(textoEncriptado.substring(i, i + 5))) {
        segmento = textoEncriptado.substring(i, i + 5);
    } else if (i + 4 <= textoEncriptado.length && reglasDes.hasOwnProperty(textoEncriptado.substring(i, i + 4))) {
        segmento = textoEncriptado.substring(i, i + 4);
    } else if (i + 3 <= textoEncriptado.length && reglasDes.hasOwnProperty(textoEncriptado.substring(i, i + 3))) {
        segmento = textoEncriptado.substring(i, i + 3);
    } else if (i + 2 <= textoEncriptado.length && reglasDes.hasOwnProperty(textoEncriptado.substring(i, i + 2))) {
        segmento = textoEncriptado.substring(i, i + 2);
    }

    if (segmento) {
        textoDesencriptado += reglasDes[segmento];
        i += segmento.length;
    } else if (textoEncriptado[i] === " ") {
        textoDesencriptado += " ";
        i++;
    } else if (textoEncriptado[i] === "\n") {
        textoDesencriptado += "\n";
        i++;
    } else {
        textoDesencriptado += textoEncriptado[i];
        i++;
    }
}

return textoDesencriptado;
}

function desencriptarTexto() {
const textoEncriptado = document.getElementById('textOriginal').value;
const textoDesencriptado = desencriptar(textoEncriptado);

document.getElementById('textOutput').textContent = textoDesencriptado;
}
// --------------------------------copy button----------------------------------

const textarea = document.getElementById('textOutput');
const copyButton = document.getElementById('textCopy');

//alerta
const alertContainer = document.getElementById('alert-container');
const alertMessage = document.getElementById('alert-message');


function showAlert(message, type = 'success') { 
    alertContainer.classList.remove('success', 'error'); 
    alertContainer.classList.add(type); 
    alertMessage.textContent = message;
    alertContainer.style.display = 'block';
    setTimeout(hideAlert, 1500);
  }
  
  
  function hideAlert() {
    alertContainer.style.display = 'none';
  }

//copia boton
copyButton.addEventListener('click', () => {
  const textToCopy = textarea.value;

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showAlert('¡El texto ha sido copiado!');
      })
      .catch(err => {
        showAlert('Fallo al copiar' + err, 'error');
      });
  }
});
