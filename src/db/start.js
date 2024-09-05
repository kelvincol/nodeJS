import { openConnection, closeConnection, executeQuery, executeCountRows} from './postgres.js'


const conexao =  async () =>{
    await openConnection()

    const resultado = await executeQuery('select * from pessoa')
    const total = await executeCountRows('select count(*) from pessoa')
    const novo = await executeQuery('INSERT INTO public.pessoa (nome, idade)VALUES (\'cazalbe\', 70)')

    await closeConnection()

}

conexao()