import {_, nil, KeywordCxt} from Ajv

ajv.addKeyword({
  keyword: "range",
  type: "number",
  code(cxt: KeywordCxt) {
    const {schema, parentSchema, data} = cxt
    const [min, max] = schema
    const eq: Code = parentSchema.exclusiveRange ? _`=` : nil
    cxt.fail(_`${data} <${eq} ${min} || ${data} >${eq} ${max}`)
  },
  metaSchema: {
    type: "array",
    items: [{type: "number"}, {type: "number"}],
    minItems: 2,
    additionalItems: false,
  },
})