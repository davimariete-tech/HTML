const listadealunos=[
    {nome:"ana", nota:5.0}
    {nome:"bruno", nota:10.0}
    {nome:"carla", nota:2.0}
    {nome:"andrea", nota:7.0}
    {nome:"marta", nota:6.0}
];

console.log("encontre a aluna marta e mostra o nome e a media dela")

const exibiraluna=listadealunos.findu(u=>u.nome==="marta")
console.log(`nome:${exibiraluna.nome} nota: $`)
console.log(exibiraluna)


console.log("mostre a media geral da turma")

console.log("mostre o nome e a  nota  dos alunos com nota abaixo  de 7.0")

console.log("mostre apenas o nome dos alunos com maior ou igual  a 7.0")
