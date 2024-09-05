import { openConnection, closeConnection, executeQuery} from './postgres.js'
const convertePessoa = (nome, saldo) => {nome, saldo}


const convertePessoa2 = (nome2, saldo2) => {
    return {nome: nome2, saldo: saldo2}
}

const conexao =  async () =>{
    await openConnection()

    //buscar os registros no banco da tabela exercicio_node e guardar numa variavel
    
    const buscaBD = await executeQuery('select nome, saldo from exercicio_node')
    const dadosUser = buscaBD
  
    //iterar nessa lista de retorno e converter para uma lista de objetos
  
    let listaObjetos = []
   
    for(const dados of dadosUser){
        listaObjetos.push({nome:dados.nome, saldo:dados.saldo})
    }


    await closeConnection()

    return listaObjetos

}

export {conexao}

 






const adicionaUsuario = (nomeUsuario) => 
    `INSERT INTO public.exercicio_node (nome, saldo)VALUES (\'${nomeUsuario}'\', 10000)`
