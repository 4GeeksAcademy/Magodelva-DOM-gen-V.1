// Recibimos los valores del formulario

document.getElementById('data-entry').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe


// Formatear el string de entrada

const caseFormat = (element) => { 
  return element.toLowerCase().trim()
  };


// Obtenemos los valores de los inputs


  const input1 = caseFormat(document.getElementById('first-word').value);
  const input2 = caseFormat(document.getElementById('second-word').value);
  const input3 = caseFormat(document.getElementById('third-word').value);
  const domains = ['.com', '.es', '.io', '.org', '.dev'];

// Constante auxiliar para aleatorizar

  const inputsToRandomize = [input1, input2, input3];

// Establecemos las constantes randomizadas

const first = Math.floor(Math.random() * 3); // Se añaden 3 iguales para dar 3 valores diferentes
const second = Math.floor(Math.random() * 3);
const third = Math.floor(Math.random() * 3);
const domainRandom = Math.floor(Math.random() * 5);

// 

  // Concatenar los valores aleatorizados para formar el dominio
const unifyDomainItems =`www.${inputsToRandomize[first]}${inputsToRandomize[second]}${inputsToRandomize[third]}${domains[domainRandom]}`;

const domain = unifyDomainItems;  // Ejemplo usando ".com"

  // Mostrar el resultado
  
  console.log(document.getElementById('gen-dom').innerText = `${domain}`);
});

