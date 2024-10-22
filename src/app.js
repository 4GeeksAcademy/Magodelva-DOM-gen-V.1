// Recibimos los valores del formulario

document.getElementById('data-entry').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe


// Formatear el string de entrada

const caseFormat = (element) => { 
  return element.toLowerCase().trim()
  };


// Obtenemos los valores de los inputs


  const firstInput = [caseFormat(document.getElementById('first-word').value)];
  const secondInput = [caseFormat(document.getElementById('second-word').value)];
  const thirdInput = [caseFormat(document.getElementById('third-word').value)];
  const domains = ['.com', '.es', '.io', '.org', '.dev'];

// Constante auxiliar para aleatorizar

  const inputsToRandomize = [firstInput, secondInput, thirdInput];

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

