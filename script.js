// Función para adivinar el número utilizando el algoritmo de búsqueda binaria
function guessNumber(min, max) {
    let guess;
    while (min <= max) {
      guess = Math.floor((min + max) / 2);
      const response = confirm(`¿Es tu número ${guess}?`);
  
      if (response) {
        document.getElementById('result').innerHTML = `<p class="text-success"><strong>R2-D2</strong> tu número es el ${guess}, excelente decisión.</p>`;
        return;
      } else if (!response && min === max) {
        document.getElementById('result').innerHTML = `<p class="text-danger"><strong>R2-D2</strong> R2D2, no encontré tu número. ¿Estás seguro de haberlo pensado?</p>`;
        return;
      } else if (response) {
        document.getElementById('result').innerHTML = `<p class="text-success"><strong>R2-D2</strong> tu número es el ${guess}, excelente decisión.</p>`;
        return;
      } else if (guess > 50) {
        max = guess - 1;
      } else {
        min = guess + 1;
      }
    }
  }
  
  // Event listener para el botón de comenzar
  document.getElementById('startButton').addEventListener('click', function() {
    guessNumber(1, 100);
  });
  