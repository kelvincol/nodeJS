const start = async () =>{
    const bar = {
        capacidade: 200,
        mesas: 20,
        chopp: true,
        dono: {
            nome: 'Fausto',
            sobrenome: 'Silva'
        }
    }

    const buteco = {
        capacidade: 50,
        mesas: 5,
        chopp: false,
        dono: {
            nome: 'Albor',
            sobrenome: 'Ghetti'
        }
        
    }

    const buteco2 = {
        capacidade: 30,
        mesas: 3,
        chopp: true,
        dono: {
            nome: 'Silvio',
            sobrenome: 'Santos'
        }
        
    }

    let total =  0

    const listaBar = [bar, buteco, buteco2]
    for(const estabelecimento of listaBar){
         if(estabelecimento.chopp == true){
            total += estabelecimento.mesas
         }
       
    }
 
    console.log('total: '+ total)
    
    listaBar.forEach(estabelecimento => {
        console.log('mensagem2: ' + estabelecimento.mesas)
    })
    let total2 = 0
    listaBar.filter(estabelecimento => estabelecimento.chopp == true)
            .forEach(x => total2 += x.mesas)
    console.log('total2: ' + total2)

    const listaCapacidade = listaBar.map(estabelecimento => estabelecimento.capacidade)
    console.log(listaCapacidade)


    const listaDonos = listaBar.map(estabelecimento => estabelecimento.dono)
    listaDonos.forEach(dono => console.log('Donos dos bar: '  + dono.nome))

}

start()