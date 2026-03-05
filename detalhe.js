export default class Detalhe{
    detalhe(empresa){
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`cnpj: ${empresa.cnpj}`);
        console.log("Endereco");
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero} \n`);
        console.log("funcionários:");

        empresa.funcionarios.forEach(f =>{
            console.log(`Nome: ${f.nome}`);
            console.log(`Matrícula: ${f.matricula}`);
            console.log(`CPF: ${f.cpf}`);
            console.log(`Rua: ${f.endereco.rua} Bairro: ${f.endereco.bairro} Cidade: ${f.endereco.cidade} Número: ${f.endereco.numero}`);
        })
    }
}