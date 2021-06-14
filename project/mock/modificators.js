const dataValid = [
    {
        pattern: ['observer'],
        description: "Padrao observer",
        type:['commun']
    },
    {
        pattern: ['observer'],
        description: "Padrao observer",
        type:['interface']
    },
    {
        pattern: ['builder'],
        description: "Padrao builder",
        type:['interface']
    },
    {
        pattern: ['strategy'],
        description: "Padrao strategy",
        type:['static']
    },
    
];

const dataError =[
   
    {
        pattern: ['Meu padrão'],
        description: "Padrao observer",
        type:['commun']
    },
    {
        pattern: ['observer'],
        description: "Padrao observer",
        type:['nenhum']
    },
    {
        description: "Padrao observer",
        type:['commun']
    },
    {
        pattern: ['observer'],
        description: "Padrao observer",
    },
    {
        pattern: ['strategy'],
        description: "Padrao observer",
        type:[]
    },
    {
        pattern: ['strategy'],
        description: "Padrao observer",
        type:[]
    },
    
   
]

module.exports = {dataError, dataValid}