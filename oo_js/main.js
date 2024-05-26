/* • Crie uma classe de uma abstração; */
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("Acelerar");
    };
}

/* • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente; */
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizSalario = function() {
        console.log(this.salario + " De Salario");
    }
}

function Funcionario(nome,cargo,salario) {
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome);
}

function Chefe(nome,cargo,salario) {
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const chefe1 = new Chefe("Pedro", "CEO", 35000);
funcionario1.dizOi()
funcionario1.dizSalario()
chefe1.dizOi()
chefe1.dizSalario()

/* • Crie pelo menos três instâncias de objetos; */
const carroDoJoao = new Carro("Fiesta","Ford",2020,2016);
const carroDaMaria = new Carro("Ranger","Ford",2020,2016);
const carroDoCarlos = new Carro("Mustang","Ford",2020,2016);
const carroDoPedro = new Carro("Maverick","Ford",2020,2016);