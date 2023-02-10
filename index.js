import readLineSync from 'readline-sync'
import chalk from 'chalk'
//const ck = require ('chalk')

const valores = []
let input = ""

//laço while
console.log(chalk.magentaBright('Programa de propriedade do CSS'))
while (input != "sair")
{
    valores.push(input)
    input = readLineSync
    .question ("Digite as propriedades de CSS ")
    .toLocaleLowerCase()
}

//mostra o conteúdo do vetor
console.log(chalk.blueBright(valores.sort().join('\n')))