 
const Ajv = require('ajv');
const  {associationsSchema} = require('../../diagramSchema/classSchema')
const {dataValid, dataError} = require('../mock/association')

describe("Verificar o attributeSchem", ()=>{

    const ajv = new Ajv();
    const validate = ajv.compile(associationsSchema); 

   
    test.each(dataValid)(`Verifica se o array schema methods é valido:
       {id:$classId, type:$type, tag:$tag, read:$read, navigation:$navigation}`, (data)=>{
        const isValid = validate(data)
        expect(isValid).toBeTruthy();
    })

 /*    test.each(dataError)(`Verifica se o array schema methods é valido:
    {name:$name, returnType:$returnType, permission:$permission}, description:$description`, (data)=>{
     console.table(data.params)
     const isValid = validate(data)
     expect(isValid).toBeFalsy();
 }) */

})