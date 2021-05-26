import Ajv from "ajv"
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const projectSchema = { 
    type: "object",
    properties: {
        owner: {type: "string"},
        title: {type: "string"},
        description: {type: "string"},
        createdAtt: {type: "string"},
        updatedAtt:{type: "string"},
    },
    required: ["owner", "title", "description", "createdAtt"],
    additionalProperties: false
}

const validate = ajv.compile(projectSchema)

const data = {
    owner: "Wolf",
    title:"Diagrama 1",
    description:"Primeiro diagrama do projeto",
    createdAtt:"Wed May 26 2021 06:21:07 GMT-0300 (Horário Padrão de Brasília)",
}

const valid = validate(data)
valid ? console.log('Diagrama Valido') : console.log(validate.errors)
