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
    async cadastrar(heroi) {
        const dados = await this.obterDadosArq()
        const id = heroi.id <= 2 ? heroi.id : Date.now()
        const heroidComId = {
            id,
            ...heroi
        }
        const dadosFinais = [
            ...dados,
            heroidComId
        ]
        const resultado = await this.escreverDadosArq(dadosFinais)
        return resultado
    }
    async listar(id){
        const dados = await this.obterDadosArq()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
    async remove(id) {
        const dados = await this.obterDadosArq()
        const indice  = dados.findIndex(item => item.id === parseInt(id))
        if(!indice) {
            throw.Error('O usuario informado não existe')
        }
        dados.split(indice -1)
        return await this.escreverDadosArq(dados)
    }
}

module.exports = new Database()