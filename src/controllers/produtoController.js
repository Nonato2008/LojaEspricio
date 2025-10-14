const {produtoModel} = require("../models/produtoModel");

const produtoController = {
    // ---------------------
    //LISTAR TODOS OS PRODUTOS
    // GET /produtos
    // ---------------------

    listarProdutos: async (req, res)=>{
        try {
            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);
        } catch (error) {
            console.error("Erro ao listar produtos", error);
            res.status(500).json({messgae: 'Erro ao buscar produtos'});
        }
    },

    // ---------------------
    //CRIAR UM NOVO PRODUTO
    // POST /produtos
    /* COMO DESEJO RECEBER OS DADOS 
            {
                "nomeProduto": "valor",
                "precoProduto": 0.00
            }
    */
    // ---------------------

    criarProduto: async (req, res)=>{
        try {
            
            const {nomeProduto, precoProduto}=req.body; // coleta dados usando método POST

            if(nomeProduto == undefined || precoProduto == undefined || isNaN(precoProduto)){ //verificção dos dados
                return res.status(400).json({error: 'Campos obrigatórios não preenchidos!'})
            }

            await produtoModel.inserirProduto(nomeProduto, precoProduto)

<<<<<<< HEAD
            res.status(201).json({message: 'Produto cadastrado com sucesso!'});
=======
            res.status(201).json({messgae: 'Produto cadastrado com sucesso!'});
>>>>>>> 14bad74017c00cdf8f5a971709f94239aee56688

        } catch (error) {
            console.error('Erro ao cadastrar produto', error);
            res.status(500).json({erro: 'Erro no servidor ao cadastrar produto!'});
        }
    }

}

module.exports = {produtoController};