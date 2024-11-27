// Declara uma fucão

function calcular_area(raio)
{
    const pi = 314159;
    return pi * raio * raio;

}

let raio = 1;
let area = calcular_area(raio);
console.log (`A área do círculo é de ${area} sendo que seu raio é de ${raio}`);