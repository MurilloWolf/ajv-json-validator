import Ajv from "ajv"

const positionSchema = {
    type:"object",
    properties: {

        x: {type: "integer"},
        y: {type: "integer"},
        z: {type: "integer"}
    },
    required: ["x","y","z"],
    additionalProperties: false
}

const modificatorsSchema = {
    type:"object",
    properties: {
        pattern:{
            type:"array",
            uniqueItems: true,
            additionalItems: false,
            items:[
                {enum:["none","observer"]}
            ],
            minItems: 1,
            maxItems: 3
        }, 
        type:{
            type:"array",
            uniqueItems: true,
            additionalItems: false,
            items:[{type:"string"}],
            minItems: 1,
        },
        description: {type: "string"},
    },
    required: ["pattern","description"],
    additionalProperties: false
}


const classSchema = {
    type:"object",
    properties: {
        uuid: {type: "string"},
        title:{type: "string"},
        type:{type: "string"},
        position: positionSchema,
        modificator: modificatorsSchema,
    },
    required: ["uuid", "title", "type", "position", "modificator"],
    additionalProperties: false
 }


const ajv = new Ajv()
const validate = ajv.compile(classSchema)

const data = {
    uuid: "a1sde-23dfxef=23x",
    title:"Classe 1",
    type: "abstract",
    position: {
        x: 10,
        y: 10,
        z: 1
    },
    modificator:{
        description:"A simple modificator exemple",
        pattern: ["observer"],
        type: ["abstract"]
    }
}

const valid = validate(data)
valid ? console.log('Diagrama Valido') : console.log(validate.erros)
