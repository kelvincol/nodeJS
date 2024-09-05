import { generateDefaultOutputFilePath } from "./fileUtils.js"

import { __filename } from './fileSystem.js'
//jest.mock('./fileSystem.js')





test('calcular outputPath', () => {
 //   __filename.mockImplementation(() => 'C://domingao/output/fausto.txt')
    
    const resultado = generateDefaultOutputFilePath('fausto', 1, 'txt')  
    expect(resultado).toEqual('C:\\node ze lessons\\output\\fausto1.txt')
})