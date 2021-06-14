const dataValid = {
    name: "atributo 1",
    type: "integer",
    permission: "public",
    description: "atributo 1"
};

const dataError =[
   
    {
        type: "integer",
        permission: "public",
        description: "atributo 1 "
    },
    {
        name: "atributo 1",
        type: "inteiro",
        permission: "public",
        description: "atributo 1 "
    },
    {
        name: "atributo 1",
        type: "integer",
        permission: "publico",
        description: "atributo 1 "
    },
    {
        name: "atributo 1",
        type: "integer",
        permission: "public",
        
    }
]

module.exports = {dataError, dataValid}