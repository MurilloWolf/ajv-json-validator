 
const Ajv = require('ajv');

const  {attributesSchema} = require('../../diagramSchema/classSchema')
const {dataValid, dataError} = require('../mock/attribute')

describe("Verificar o attributeSchem", ()=>{
    const objectValues = 'name: $name, type: $type, permission: $permission, description: $description'

    const ajv = new Ajv();
    const validate = ajv.compile(attributesSchema); 

    it(`Verifica array de attributeSchema é inválido :
        {name: $name, type: $type, permission: $permission, description: $description}`, ()=>{
        const isValid = validate(dataValid)
        expect(isValid).toBeTruthy();
    })

    test.each(dataError)(`Verifica array de dataError é inválido :
        {name: $name, type: $type, permission: $permission, description: $description}`, (data)=>{
      const isValid = validate(data)
      expect(isValid).toBeFalsy()
    })
})