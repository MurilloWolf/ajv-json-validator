 
const Ajv = require('ajv');
const  {modificatorsSchema} = require('../../diagramSchema/classSchema')
const {dataValid, dataError} = require('../mock/modificators')

describe("Verificar o attributeSchem", ()=>{

    const ajv = new Ajv();
    const validate = ajv.compile(modificatorsSchema); 

    test.each(dataValid)(`Verifica se o array schema modificator é valido:
       {pattern: $pattern, description: $description, type: $type}`, (data)=>{
        const isValid = validate(data)
        expect(isValid).toBeTruthy();
    })

    test.each(dataError)(`Verifica array de schema modificator é inválido: 
      {pattern: $pattern, description: $description, type: $type}`, (data)=>{
      const isValid = validate(data)
      expect(isValid).toBeFalsy()
    })
})