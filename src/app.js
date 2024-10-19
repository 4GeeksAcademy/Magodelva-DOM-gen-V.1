// Recibimos los valores del formulario

document.getElementById('dataEntry').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe


// Obtenemos los valores de los inputs


  const input1 = document.getElementById('Primera palabra').value;
  const input2 = document.getElementById('Segunda palabra').value;
  const input3 = document.getElementById('Tercera palabra').value;
  const domainExtensions = ['.com', '.es', '.io', '.org', '.dev']

// Constante para aleatoreizar los inputs

  const inputsToRandomize = [input1, input2, input3];

// Establecemos la función para aleatorizar los valores 

const inputsToRandomizeValue1 = Math.floor(Math.random() * 3); // Se añaden 3 iguales para dar 3 valores diferentes
const inputsToRandomizeValue2 = Math.floor(Math.random() * 3);
const inputsToRandomizeValue3 = Math.floor(Math.random() * 3);
const domainExtensionsRandomized = Math.floor(Math.random() * 5);


  // Concatenar los valores aleatorizados para formar el dominio
const returnGeneratedDomain = () =>{
  return `www.${inputsToRandomize[inputsToRandomizeValue1]}${inputsToRandomize[inputsToRandomizeValue2]}${inputsToRandomize[inputsToRandomizeValue3]}${domainExtensions[domainExtensionsRandomized]}`
}

const domain = returnGeneratedDomain();  // Ejemplo usando ".com"

  // Mostrar el resultado
  
  document.getElementById('gen-dom').innerText = `Dominio generado: ${domain}`;
});

