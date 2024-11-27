let carro =
{
    marca: "jeep",
    modelo: "renegade",
    ano: 2024,
}

// chamar um objeto

console.log(carro.marca);
console.log(carro.modelo);

//Modificar

carro.modelo = "compass";

// Adicionar

carro["cor"] = "azul"

console.log(carro.ano);
console.log(carro.cor );   
console.log(carro.modelo);