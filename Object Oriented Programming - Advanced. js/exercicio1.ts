// Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class patinete{

marca: string;
modelo:string;
preço: number;

transporta: string;


informação(){
console.log(` Na ${patineteB.marca} você encontra  o modelo ${patineteB.modelo} por a penas R$${patineteB.preço.toFixed(2)}!! É ISSO MESMO --> R$${patineteB.preço.toFixed(2)} `)


}
}

var patineteB = new patinete 
patineteB.marca = "Rihappy"
patineteB.modelo = "esporte"
patineteB.preço = 1000

patineteB.informação()