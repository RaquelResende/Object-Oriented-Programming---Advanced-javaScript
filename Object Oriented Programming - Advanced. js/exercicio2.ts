

// Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class contaBancaria{

    conta:number
    agencia:number
    senha:string
    nome:string

    estrato: number
    dados: string

    informacaoB(){

        console.log(`Bem-Vinda ${conta.nome} sua conta/agência é :${conta.conta}-${conta.agencia}\nDigite sua senha: ${conta.senha}\n   Veja mais------->\n Seu estrato é de R$${conta.estrato.toFixed(2)}`)

    }
}

var conta = new contaBancaria 
conta.conta = 2425
conta.agencia = 24
conta.senha= "...."
conta.nome = "Raquel Pinto Resende"
conta.estrato= 100000
conta.dados="corrente"

conta.informacaoB()