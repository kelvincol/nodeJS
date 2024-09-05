import { readFile } from "./persistance.js"

import fs from 'fs'
jest.mock('fs')

test('ler arquivo', () => {
    fs.readFileSync.mockImplementation(() => 'batata')
    const resultado = readFile('c://test/test.txt')  
    expect(resultado).toEqual('batata')
})