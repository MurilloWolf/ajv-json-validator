const dataValid = {
    x: 100,
    y: 100,
    z: 1,
};

const dataError =[
    {
        x:'100',
        y:200,
        z:100
    },
    {
        x:100,
        y:'200',
        z:100
    },
    {
        x: 100,
        y:200,
    },
    {
        x:100,
        z:100,
    }
]

module.exports = {dataError, dataValid}