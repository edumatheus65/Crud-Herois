const Commander = require('commander')
const Database = require('')

async function main() {
    Commander
        .version('v1')
        .option('-n, --nome [value]', "Nome do Heroi")
        .option('-p, -- poder [value]', "Poder do Heroi")

        .option('-c, --cadastrar', "Cadastrar um heroi")

        .parse(process.argv)

        try {
            if (Commander.cadastrar) {
                console.log(Commander)                
            }

        } catch (error) {
            console.error('DEU RUIM', error)
        }

}

main()