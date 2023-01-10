
let amigo = {nome:'Eduardo', sexo:'M', peso:80.1, engordar(p){
    console.log('Engordou!');
    this.peso += p;
}};

console.log(amigo);
console.log(amigo.nome);
console.log(amigo.peso);

amigo.engordar(5);
console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg.`);