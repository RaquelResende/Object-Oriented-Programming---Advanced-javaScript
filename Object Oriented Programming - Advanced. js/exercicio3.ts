

// Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.


class Paciente{
    nome:string
    idade:number
    complicação:string

    leito: boolean
    

    informacaoP(){

        console.log( `A paciente ${pessoa.nome} possuí a idade ${pessoa.idade} apresentando um caso clínico de ${pessoa.complicação} .`)

    }
}

var pessoa = new Paciente
pessoa.nome = "Laryssa"
pessoa.idade = 26
pessoa.complicação = "cancer"
pessoa.leito= true

pessoa.informacaoP()