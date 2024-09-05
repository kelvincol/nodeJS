import { level3 } from './terceiro.js'


const level2 = () => {
    const valorLocal = 'BBB'

    return valorLocal + level3()
}

export { level2 }