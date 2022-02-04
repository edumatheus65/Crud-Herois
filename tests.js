const {
    deepEqual,
    ok
} = require('assert')
// const { listar } = require('./database')
const database = require('./database')

const DEFAUT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de herois', () => {
    // before(async () => {
    //     await database.cadastrar(DEFAUT_ITEM_CADASTRAR)
    // })
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAUT_ITEM_CADASTRAR
        const [resultado] = await database.listar(DEFAUT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })
    it('deve cadastrar um heroi usando arquivos', async () => {
        const expected = DEFAUT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAUT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAUT_ITEM_CADASTRAR.id)
        deepEqual(actual, expected)
    })
    it.only('deve remover um heroi por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAUT_ITEM_CADASTRAR.id)  
        deepEqual(resultado, expected)
    })
})



