/*************************************************************************
 * Objetivo: Criar uma API para responder dados da Tony Pizzaria         *
 * Autor: Gustavo Henrique                                               *
 * Data: 13/12/2023                                                      *
 * Versão: 1.0                                                           *
**************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()


app.use((request, response, next) => {

    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

//EndPoints: listar todos os produtos
app.get('/pizzaria/produtos', cors(), async (request, response, next) => {

    let controleListaProdutos = require('./modulo/consultas.js')
    let produtos = controleListaProdutos.getListarProdutos()
    response.json(produtos)
    response.status(200)
})


//EndPoints: listar todos os clientes
app.get('/pizzaria/clientes', cors(), async (request, response, next) => {

    let controleListaClientes = require('./modulo/consultas.js')
    let clientes = controleListaClientes.getListarClientes()
    response.json(clientes)
    response.status(200)
})


//EndPoints: listar todos as categorias
app.get('/pizzaria/categorias', cors(), async (request, response, next) => {

    let controleListaCategorias = require('./modulo/consultas.js')
    let categorias = controleListaCategorias.getListarCategorias()
    response.json(categorias)
    response.status(200)
})

//EndPoints: listar comentarios dos clientes pelo Id do produto
app.get('/pizzaria/comentarios/:produtoId', cors(), async (request, response, next) => {
    
    let idProduto = request.params.produtoId
    let controleComentarios = require('./modulo/consultas.js')

    let dadosComentarios = controleComentarios.getComentariosPorProduto(idProduto)

    if (dadosComentarios) {
        response.json(dadosComentarios)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

//EndPoints: listar os produtos filtrando pelo nome da categoria

app.get('/pizzaria/produtos/:categoriaNome', cors(), async (request, response, next) => {
    
    let nomeCategoria = request.params.categoriaNome
    let controleProdutosCategorias = require('./modulo/consultas.js')

    let dadosProdutos = controleProdutosCategorias.getProdutosPorCategoria(nomeCategoria)

    if (dadosProdutos) {
        response.json(dadosProdutos)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

//Endpoints: listar o endereço dos clientes

app.get('/pizzaria/endereco/:clienteId', cors(), async (request, response, next) => {
    let clienteId = request.params.clienteId
    let controleEnderecoCliente = require('./modulo/consultas.js')

    let dadosEndereco = controleEnderecoCliente.getEnderecoCliente(clienteId)

    if (dadosEndereco) {
        response.json(dadosEndereco)
        response.status(200)
    } else {
        response.status(404)
        response.json({ erro: "Não foi possivel encontrar um item" })
    }

})

app.listen(8080, function () {
    console.log('servidor rodando na porta 8080')
})

