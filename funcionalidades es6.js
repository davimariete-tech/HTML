//novos recurso es6

//vetor de números
const listadenumeros=[1,2,3,4,5]

console.log("exibindo numeros do vetor:")
console.log(listadenumeros)

console.log("\nmultiplicando numeros do vetor:")
const dobrados= listadenumeros.map(n=>n*2)
console.log(dobrados)

console.log("\nfiltrar numeros pares do vetor:")
const pares= listadenumeros.filter(n=>n%2==0)
console.log(pares)

console.log("\nsomando todos os numeros do vetor;")
const soma=listadenumeros.reduce((soma,atual)=> soma+atual,0)
console.log(soma)
