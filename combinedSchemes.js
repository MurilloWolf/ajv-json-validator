 import Ajv from "ajv"
 const schema = {
    $id: "http://example.com/schemas/schema.json",
    type: "object",
    properties: {
      foo: {$ref: "defs.json#/definitions/int"},
      bar: {$ref: "defs.json#/definitions/str"},
    },
  }
  
  const defsSchema = {
    $id: "http://example.com/schemas/defs.json",
    definitions: {
      int: {type: "integer"},
      str: {type: "string"},
    },
  }
const ajv = new Ajv()
const validate = ajv.addSchema(defsSchema).compile(schema)

const data = {
    foo: 1,
    str: "a"
}

const valid = validate(data)
valid ? console.log('Diagrama Valido') : console.log(validate.erros)
