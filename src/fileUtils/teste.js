import  {readFile, saveFileText, readFilesInFolder, saveFile, saveJSONFile } from "./fileUtils.js"


const lerFraseRandomica = () => {
     const fausto = readFile('C:\\node ze lessons\\DojoNodeJS\\src\\output\\oloco.txt')
     const frases = fausto.split('\r\n')
     const randomNumber = Math.floor(Math.random() * frases.length)
    
      console.log(frases[randomNumber])
}

const salvarArquivo = () => {
        const conteudo = 'batatas\ndescascar'
     saveFileText('batata', '', conteudo)

}

const lerArquivosPasta = () => {
     const arquivos = readFilesInFolder() // se passar caminho entre '' ele le os arquivos, senao ele busca o caminho padrao
    
     for(const arquivo of arquivos) {
        console.log(arquivo)
    }
}

const objetoPessoa = () =>{
    const result = readFile('D:\\Repositórios\\DojoNodeJS\\src\\Output\\qualquer.txt')
    const lista = result.split('\r\n')
    const resultado = []
    for (const i of lista){
        const pessoa = i.split(';')
        resultado.push({'nome': pessoa[0], 'idade': pessoa[1], 'sexo': pessoa[2]})
        
    }
    console.log(resultado)

}

const concatenador = (palavra1, palavra2) => {
    return `${String(palavra1).replaceAll('a', 'x').replaceAll('x', 'a')} ${palavra2}`

}


const salvarJson = async () =>{
    const pessoa = {'nome': 'Raphael', 'idade': '30', 'sexo': 'M'}
    //TODO: pegar metodo que salva objeto

    pessoa.nome
   await saveJSONFile (pessoa,'C:\\node ze lessons\\DojoNodeJS\\src\\output\\cadastro2.json' )
    console.log(concatenador('batata', 'doce'))

}

const start = async () =>{
     await salvarJson()
    const arquivoBruto = readFile('C:\\node ze lessons\\DojoNodeJS\\src\\output\\cadastro.json')
    const pessoa = JSON.parse(arquivoBruto)
    for(const key of Object.keys(pessoa)) {
        console.log(pessoa[key])
    }
    console.log('')

}

start()