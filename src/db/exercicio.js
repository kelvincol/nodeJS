import { openConnection, closeConnection, executeQuery, executeCountRows} from './postgres.js'


const conexao =  async () =>{
    await openConnection()

    totalVoltas = 10

    for(let voltas = 0; voltas < totalVoltas; voltas++){
        await executeQuery(adicionaUsuario('fausto' + voltas)) 
    }



    await closeConnection()

}

conexao()

const adicionaUsuario = (nomeUsuario) => 
    `INSERT INTO public.exercicio_node (nome, saldo)VALUES (\'${nomeUsuario}'\', 10000)`
