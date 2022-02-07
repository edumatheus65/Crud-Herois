const { Command, program } = require("commander");
const Database = require("./database");

async function main() {
    const program = new command()
    program
    .version("v1")
        .option("-n, --nome [value]", "Nome do Heroi")
        .option("-p, --poder [value]", "Poder do Heroi")

        .option("-c, --cadastrar", "Cadastrar um Heroi")

        program.parse(process.argv);

        const options = program.opts();
        const heroi = new Heroi(options);

        try {
            if (options.cadastrar) {
                console.log(options)                
            }

        } catch (error) {
            console.error('DEU RUIM', error)
        }

}

main()