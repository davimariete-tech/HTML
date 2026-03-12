// exemplo com vetor de nomes
const listadenomes = ["ana", "maria", "joana"];

// vetor com numeros
const listadenumeros = [1, 2, 3, 4, 5];

// vetor de objetos com dados de nome e idade
// um objeto carrega dados como uma classe
const listadeusuarios = [
    { nome: "ana", idade: 25 },
    { nome: "maria", idade: 35 },
    { nome: "joana", idade: 45 }
];

// percorrendo e exibindo os elementos do vetor
// forEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor");

// use as {} caso precise de mais de uma linha
listadeusuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
});

// como os antigos
console.log("\nExibindo todos os usuários do vetor.");
for (let i = 0; i < listadeusuarios.length; i++) {
    console.log(`${listadeusuarios[i].nome} tem ${listadeusuarios[i].idade} anos.`);
}

console.log("\nFiltrando maiores de 18 anos");

const maioridade = listadeusuarios.filter(usuario => usuario.idade >= 18);

// use as {} caso precise de mais de uma linha

maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
);
        
//ache pessoas de quarenta anos na lista

const quarenta= listadeusuarios.find(u=>u.idade ===45);
console.log(`nome:${quarenta.nome}\nidade:${quarenta.idade}`)


console.log("\nna lista de usuarios,somando todas as idades:")
const somaidades= listadeusuarios.reduce((total,usuario)=> total+ usuario.idade, 0)
console.log(somaidades)

