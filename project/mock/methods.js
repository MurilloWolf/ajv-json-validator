const dataValid = [
   {
       name:'getName',
       returnType: 'string',
       permission: 'public',
       description: '',
       params: null
   },
   {
        name:'setName',
        returnType: '',
        permission: 'public',
        description: 'retorna o nome da classe',
        params: [{
            name:"name",
            type:"string"
        }]
    },{
        name:'setEndereco',
        returnType: '',
        permission: 'public',
        description: 'retorna o nome da classe',
        params: [{
            name:"rua",
            type:"string"
        },{

            name:"bairro",
            type:"string"
        },{

            name:"cidade",
            type:"string"
        }  
        ]
    },
    {
        name:'add',
        returnType: '',
        permission: 'private',
        description: 'adiciona um elemento',
        params: []
    }
]

const dataError =[
    {
      
        returnType: 'string',
        permission: 'public',
        description: '',
        params: null
    },
    {
         name:'setName',
        
         permission: 'public',
         description: 'retorna o nome da classe',
         params: [{
             name:"name",
             type:"string"
         }]
     },{
         name:'setEndereco',
         returnType: '',
        
         description: 'retorna o nome da classe',
         params: [{
             name:"rua",
             type:"string"
         },{
 
             name:"bairro",
             type:"string"
         },{
 
             name:"cidade",
             type:"string"
         }  
         ]
     },
     {
         name:'add',
         returnType: '',
         permission: 'private',
         description: 'adiciona um elemento',
      
     },{
        name:'add',
        returnType: '',
        permission: 'meu tipo',
        description: 'adiciona um elemento',
        params:[]
     
    },
     
]

module.exports = {dataError, dataValid}