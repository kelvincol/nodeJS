import { conexao } from "./exercicio2.js";

import { openConnection, closeConnection, executeQuery} from './postgres.js'
jest.mock('./postgres.js')


beforeEach(() => {
    jest.clearAllMocks()
  })

test('testa retorno/conexao', async () => {
    executeQuery.mockReturnValue([{nome: 'carlinhos', saldo: 10}])
    const resultado = await conexao() 
    expect(resultado).toEqual([{nome: 'carlinhos', saldo: 10}])
    expect(executeQuery).toHaveBeenCalledWith('select nome, saldo from exercicio_node')
    expect(openConnection).toHaveBeenCalledWith()
    expect(closeConnection).toHaveBeenCalledWith()  
})

test('testa retorno/conexao com lista vazia', async () => {
  executeQuery.mockReturnValue([]) // Mock retorna uma lista vazia
  const resultado = await conexao() 
  expect(resultado).toEqual([]) // Esperamos que o resultado seja uma lista vazia
  expect(executeQuery).toHaveBeenCalledWith('select nome, saldo from exercicio_node')
  expect(openConnection).toHaveBeenCalledWith()
  expect(closeConnection).toHaveBeenCalledWith()  
})