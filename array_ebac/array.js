const arrayAlunos = [
    {
        nome: "Pedro",
        nota: 2,
    },
    {
        nome: "Laura",
        nota: 7,
    },
    {
        nome: "Alison",
        nota: 5,
    },
    {
        nome: "Bruna",
        nota: 10,
    },
    {
        nome: "Rodrigo",
        nota: 9,
    },
    {
        nome: "Natalia",
        nota: 6,
    }
]

const checkNota = arrayAlunos.filter(function(item){
    return item.nota >= 6;
})

console.log(checkNota);