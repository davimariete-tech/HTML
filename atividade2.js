const listadenomes=["silva", "pedro", "paulo"]

const listadeusuarios=[
{nome:"silva", idade:14},
{nome:"pedro",idade:18 },
{nome:"paulo", idade:22}
];

console.log("exibindo os usuarios")

listadeusuarios.forEach(usuarios=>{
   console.log(`${usuario.nome}tem ${usuario.idade} anos.`)
})
    



console.log("\nFiltrando maiores de 18 anos");

const maioridade = listadeusuarios.filter(usuario => usuario.idade <= 18);

// use as {} caso precise de mais de uma linha

maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
);
        
console.log("\nfiltrando menores de 18 anos.")


console.log("\nna lista de numeros,filtre e mostre apenas numeros pares.")


console.log("\nna lista de nomes, mostre todos os nomes com foreach.")


console.log("\nna lista de usuarios, mostre apenas os nomes .")
const usuarioencontrado=listadeusuarios.findu(u=>u.nome==="ana")
console.log(usuarioencontrado)
console.log(`nome:${usuarioencontrado.nome}\nidade ${usuarioencontrado.idade}`)



