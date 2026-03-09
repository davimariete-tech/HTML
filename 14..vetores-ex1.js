//exercício

//crie um vetor com nome de seus familiares
// com seis nomes. 

//

const listadefamily=["douglas","carlos", "silvia", "horeca", "caribe"]

console.log("\n exibindo lista:")
console.log(listadefamily)

console.log("\nadcionando um elemento:")
listadefamily.push("nilerdson")
console.log(listadefamily)

console.log("\nchamando o primeiro nome:")
console.log(listadefamily[0])

console.log("\nremovendo um elemento:")
listadefamily.splice(3,1)
console.log(listadefamily)