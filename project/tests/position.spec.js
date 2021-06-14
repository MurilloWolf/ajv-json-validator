 
const Ajv = require('ajv');

const  {positionSchema} = require('../../diagramSchema/classSchema')
const {dataValid, dataError} = require('../mock/position')

describe("Verificar o positionSchem", ()=>{

    const ajv = new Ajv();
    const validate = ajv.compile(positionSchema); 

    it('Verifica se o schema position é valido', ()=>{
        const isValid = validate(dataValid)
        expect(isValid).toBeTruthy();
    })

    it('Verifica se o schema position é invalido', ()=>{
        const isValid = validate(dataError[0])
        expect(isValid).toBeFalsy();
    })

    test.each(dataError)('Verifica array de dataError :$x , $y, $z', (data)=>{
      const isValid = validate(data)
      expect(isValid).toBeFalsy()
    })
})