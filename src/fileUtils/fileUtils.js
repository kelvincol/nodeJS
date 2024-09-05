
import path from 'path'
import { __filename } from './fileSystem.js'




const getOutputPath = () => { 
    const __dirname = path.dirname(__filename) 
    return path.join(path.resolve(__dirname,'../', 'output'))
}


const generateDefaultOutputFilePath = (fileName, fileNumber, fileExtension) => {
    const rawFileName = path.parse(fileName)
    const inputFileName = rawFileName ? rawFileName.name : fileName
    const outputFileName = `${inputFileName}${fileNumber ? fileNumber : ''}.${fileExtension}`

    return path.join(getOutputPath(), outputFileName)
}



export {
         generateDefaultOutputFilePath
         }