/************************************************************************************************
 * Objetivo: Criar uma estrutura para trazer informações sobre os dados da Tony Pizzaria. 
 * Autor: Gustavo Henrique
 * Data: 13/12/2023
 * Versão: 1.0
************************************************************************************************/

var pizzaria = require('./tony-pizzaria.js')

const getListarClientes = () => {

    const clientesInfo = pizzaria.clientes.cliente
    let clientesArray = []
    let clientesJSON = {}

    clientesInfo.forEach((cliente) => {

        let clienteJSON = {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            senha: cliente.senha,
            telefone: cliente.telefone
        }

        clientesArray.push(clienteJSON)

    })

    clientesJSON.cliente = clientesArray
    clientesJSON.clientes = clientesInfo.length

    return clientesJSON

}


const getListarCategorias = () => {

    const categoriaInfo = pizzaria.categorias.categoria
    let categoriaArray = []
    let categoriaJSON = {}

    categoriaInfo.forEach((categoria) => {

        let categoriasJSON = {
            id: categoria.id,
            nome_categoria: categoria.nome_categoria
        }

        categoriaArray.push(categoriasJSON)

    })

    categoriaJSON.categoria = categoriaArray
    categoriaJSON.quantidade = categoriaInfo.length

    return categoriaJSON

}

const getListarProdutos = () => {

    const produtoInfo = pizzaria.produtos.produto
    let produtoArray = []
    let produtoJSON = {}

    produtoInfo.forEach((produto) => {

        let produtosJSON = {
            id: produto.id,
            nome_produto: produto.nome_produto,
            valor: produto.valor,
            categoria: produto.categoria.nome_categoria,
            avaliacao: produto.avaliacao
        }

        produtoArray.push(produtosJSON)

    })

    produtoJSON.produto = produtoArray
    produtoJSON.quantidade = produtoInfo.length

    return produtoJSON

}

const getComentariosPorProduto = (produtoId) => {
    const produtos = pizzaria.produtos.produto
    let produtoEncontrado = null

    produtos.forEach((produto) => {
        if (produto.id === produtoId) {
            produtoEncontrado = produto
        }
    })

    if (!produtoEncontrado) {
        return {
            mensagem: 'Produto não encontrado',
            comentarios: [],
            quantidade: 0
        }
    }

    const { nome_produto, comentario } = produtoEncontrado
    const comentariosArray = []

    comentario.forEach((comentario) => {
        const { cliente, texto, data } = comentario
        comentariosArray.push({
            cliente: cliente.nome,
            texto,
            data
        })
    })

    return {
        produto: nome_produto,
        comentarios: comentariosArray,
        quantidade: comentariosArray.length
    }
}

const getProdutosPorCategoria = (categoriaNome) => {
    
    const produtoInfo = pizzaria.produtos.produto
    let produtoArray = []

    produtoInfo.forEach((produto) => {
        
        if (produto.categoria.nome_categoria.toLowerCase() === categoriaNome.toLowerCase()) {
            
            let produtosJSON = {
                id: produto.id,
                nome_produto: produto.nome_produto,
                valor: produto.valor,
                avaliacao: produto.avaliacao,
            }

            produtoArray.push(produtosJSON)
        }
    })

    if (produtoArray.length === 0) {
        return {
            mensagem: 'Nenhum produto encontrado',
            produtos: [],
            quantidade: 0,
        }
    }

    return {
        categoria: categoriaNome,
        produtos: produtoArray,
        quantidade: produtoArray.length,
    }
}

const getEnderecoCliente = (clienteId) => {
    const clientesInfo = pizzaria.clientes.cliente
    let enderecoArray = []
    let enderecoJSON = {}

    let clienteEncontrado = null

    clientesInfo.forEach((cliente) => {
        if (cliente.id === clienteId) {
            clienteEncontrado = cliente

            cliente.endereco.forEach((endereco) => {
                let enderecoClienteJSON = {
                    cep: endereco.cep,
                    rua: endereco.rua,
                    complemento: endereco.complemento,
                    bairro: endereco.bairro,
                    estado: endereco.estado,
                }

                enderecoArray.push(enderecoClienteJSON)
            })
        }
    })

    if (!clienteEncontrado) {
        return {
            mensagem: 'Cliente não encontrado',
            endereco: [],
            quantidade: 0,
        }
    }

    enderecoJSON.endereco = enderecoArray
    enderecoJSON.quantidade = enderecoArray.length

    return enderecoJSON
}


module.exports = {
    getListarClientes,
    getListarCategorias,
    getListarProdutos,
    getComentariosPorProduto,
    getProdutosPorCategoria,
    getEnderecoCliente
}


// Ver os comentários pelo Id dos produtos

/*
console.log(getComentariosPorProduto(2))
*/


//Ver os produtos pela categoria fornecida

/* 
console.log(getProdutosPorCategoria('bebida'))
*/

//Ver o endereço dos clientes

/*
 console.log(getEnderecoCliente(3))

 */
