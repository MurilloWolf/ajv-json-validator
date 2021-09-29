 
const Ajv = require('ajv');
const  {methodsSchema} = require('../../diagramSchema/classSchema')
const {dataValid, dataError} = require('../mock/methods')

describe("Verificar o attributeSchem", ()=>{

    const ajv = new Ajv();
    const validate = ajv.compile(methodsSchema); 

   
    test.each(dataValid)(`Verifica se o array schema methods é valido:
       {name:$name, returnType:$returnType, permission:$permission}, description:$description`, (data)=>{
        const isValid = validate(data)
        expect(isValid).toBeTruthy();
    })

    test.each(dataError)(`Verifica se o array schema methods é inválido:
    {name:$name, returnType:$returnType, permission:$permission}, description:$description`, (data)=>{
     const isValid = validate(data)
     expect(isValid).toBeFalsy();
 })

})