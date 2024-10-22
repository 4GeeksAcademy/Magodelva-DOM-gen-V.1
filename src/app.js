// Recibimos los valores del formulario

document.getElementById('data-entry').addEventListener('submit', function(event)  {
  event.preventDefault(); // Evita que el formulario se envíe


// Formateo del input a minúsculas

const caseFormat = (element) => { 
  return element.toLowerCase()
  };

// Recibimos los datos del los inputs y se guardan en arrays

  const inputOne = [caseFormat(document.getElementById('pronouns').value), caseFormat(document.getElementById('pronounsTwo').value), caseFormat(document.getElementById('pronounsThree').value)];
  const inputTwo = [caseFormat(document.getElementById('elements').value), caseFormat(document.getElementById('elementsTwo').value), caseFormat(document.getElementById('elementsThree').value)];
  const inputThree = [caseFormat(document.getElementById('adjective').value), caseFormat(document.getElementById('adjectiveTwo').value), caseFormat(document.getElementById('adjectiveThree').value)];
  const domains = ['.com', '.es', '.io', '.org', '.dev'];

// Simplificamos las variables

  const pronouns = inputOne;
  const elements = inputTwo;
  const adjectives = inputThree;

// Hacemos el loop en todos los arrays

for(let pronoun of pronouns) {
  for(let elemento of elements) {
    for(let adjetivo of adjectives) {
      for(let domain of domains) {
        console.log(`www.${pronoun}${elemento}${adjetivo}${domain}`); // Devolvemos los dominios generados en la consola
      }
    }
  }
}
})