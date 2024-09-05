import fs from 'fs'

const readFile = (fileName) => {
    return fs.readFileSync(fileName, 'utf8')
}

const totalFilesInFolder = (folderPath) => {
    const result = fs.readdirSync(folderPath)

    return result ? result.length : 1
}

const readFilesInFolder = (folderPath) => {
    return fs.readdirSync(folderPath)
}

const saveFile = async (fileContent, finalPath) => {
    const onlyPath = path.dirname(finalPath)
    
    if (!fs.existsSync(onlyPath)){
        await fs.promises.mkdir(onlyPath, { recursive: true })
    } 
   
    fs.writeFileSync(finalPath, fileContent)
}

const saveFileText = (inputFileName, fileNumber, fileContent) => {
    const fileNameWithPath = generateDefaultOutputFilePath(inputFileName, fileNumber, 'txt')

    fs.writeFileSync(fileNameWithPath, fileContent)
}

const saveJSONFile = async (fileContent, finalPath) => {
    await saveFile(JSON.stringify(fileContent, null, 4), finalPath)
}


export { readFile,
    saveFileText,
    totalFilesInFolder,
    readFilesInFolder,
    saveFile,
    saveJSONFile }
