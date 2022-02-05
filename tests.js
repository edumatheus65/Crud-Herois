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

const DEFAUT_ITEM_ATUALIZAR = {
    nome: 'Laterna Verde',
    poder: 'Poder do Anel',
    id: 2
}

describe('Suite de manipulação de herois', () => {
    before(async () => {
        await database.cadastrar(DEFAUT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAUT_ITEM_ATUALIZAR)
    })
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
    it('deve remover um heroi por id', async () => {
        const expected = true
        const resultado = await database.remover(DEFAUT_ITEM_CADASTRAR.id)  
        deepEqual(resultado, expected)
    })
    it('Deve atualizar um heroi por id', async () => {
        const expected = {
            ...DEFAUT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro',            
        }
        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }
        await database.atualizar(DEFAUT_ITEM_ATUALIZAR.id, novoDado)
        const resultado = 

        deepEqual(resultado, expected)
    })
})



