//vetores.

const listaDENOMES=["MARTA", "JOSÉ", "MARIA"]

console.log("\nexibindo todos os elementos:")
console.log(listaDENOMES)

console.log("\nexibindo o primeiro elemento:")
console.log(listaDENOMES[0])


console.log("\nadicionando um elemento:")
listaDENOMES.push("marilia")
console.log(listaDENOMES)

console.log("\n adicionando um elemento:")
listaDENOMES.push("bill")
console.log(listaDENOMES)

console.log("\nremovendo um elemento:")
//no índice 2, remover apenas 1 elemento
listaDENOMES.splice(2,1)
console.log(listaDENOMES)


console.log("\nremovendo um elemento:")
listaDENOMES.splice(1,1)
console.log(listaDENOMES)

console.log("\nremovendo apenas o primeiro elemento:")
listaDENOMES.shift()
console.log(listaDENOMES)