// Recibimos los valores del formulario

document.getElementById('data-entry').addEventListener('submit', function(event)  {
  event.preventDefault(); // Evita que el formulario se envíe


// Formatear el string de entrada

const caseFormat = (element) => { 
  return element.toLowerCase()
  };

  const inputOne = [caseFormat(document.getElementById('pronouns').value)];
  const inputTwo = [caseFormat(document.getElementById('elements').value)];
  const inputThree = [caseFormat(document.getElementById('adjective').value)];
  const domains = ['.com', '.es', '.io', '.org', '.dev'];

// Obtenemos los valores de los inputs

const getArray = (element) => {
  return element.map();
};

const pronouns = getArray(inputOne);
const elements = getArray(inputTwo);
const adjectives = getArray(inputThree);



// Convertir arr

for(let pronoun of pronouns) {
  for(let elemento of elements) {
    for(let adjetivo of adjectives) {
      for(let domain of domains) {
        console.log([pronoun, elemento, adjetivo, domain]);
      }
    }
  }
}
})