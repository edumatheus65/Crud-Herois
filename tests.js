const {
    deepEqual,
    ok
} = require('assert')
const database = require('./database')

const DEFAUT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de herois', () => {
    it('Deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAUT_ITEM_CADASTRAR
        const [resultado] = await database.listar(DEFAUT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })
})



