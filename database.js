const {
    readFile, writeFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.NOME_ARQ = 'herois.json'
    }
    async obterDadosArq() {
        const arquivo = await readFileAsync(this.NOME_ARQ, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverDadosArq(dados) {
        await writeFileAsync(this.NOME_ARQ, JSON.stringify(dados))
        return true
    }
    async listar(id){
        const dados = await this.obterDadosArq()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()