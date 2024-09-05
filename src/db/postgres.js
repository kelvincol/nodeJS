import pg from 'pg'


let internalPool

const internalHost = {
    user: global.process.env.DB_USER || 'postgres',
    password: global.process.env.DB_PASSWORD || '000000',
    host: global.process.env.DB_HOST || 'localhost',
    port: global.process.env.DB_PORT || 5432,
    database: 'postgres',
    connectionTimeoutMillis : 5000,
    idleTimeoutMillis : 30000
}

const openConnection = async (host = internalHost) => {
  try {
    if(!internalPool){
      internalPool = new pg.Pool(host)
      await internalPool.connect()
    }

    console.log('Database connected.')
  } catch (error) {
    console.log('Cannot connected to database.')
    console.log(error)
  }
  
}
const closeConnection = async () => {
  if(internalPool){
    await internalPool.end()
    console.log('DB connection closed')
  }
}

const executeQuery = async (query) => {
  try {
    const result = await internalPool.query(query)

    return result.rows || null
  } catch (error) {
    console.log('Error parsing result query')
  }

  return null
}



const executeCountRows = async (query) => {
  if(!query){
    return 0
  }

  const result = await executeQuery(query)

  if(!result || result.rows){
    return 0
  }

  return result[0].count
}

export { openConnection, closeConnection, executeQuery, executeCountRows }

