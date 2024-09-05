import { start } from './primeiro.js'

import { level3 } from './terceiro.js'
jest.mock('./terceiro.js')
    

test('teste sucesso', async () => {
    level3.mockImplementation(() => 'batata')
    const resultado1 = start()

    expect(resultado1).toBe('ABBBbatata')

    expect(level3).toHaveBeenCalledTimes(1)

})
