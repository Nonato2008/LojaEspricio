const { getConnection } = require("../config/db");
const {clienteModel} = require ("../models/clienteModel");

const  clienteController = {
    // ---------------------
    //LISTAR TODOS OS clientes
    // GET /clientes
    // ---------------------

    listarClientes: async (req, res)=>{
        try {
            const clientes = await clienteModel.buscarTodos();
            
            res.status(200).json(clientes)
        } catch (error) {
            console.error("Erro ao listar clientes", error);
            res.status(500).json({message: 'Erro ao buscar clientes'});
            
        }
    },


    // ---------------------
    //CRIAR UM NOVO CLIENTE
    // POST /cliente
    /* COMO DESEJO RECEBER OS DADOS 
            {
                "nomeCliente": "valor",
                "cpfCliente": 00000000000
            }
    */
    // ---------------------

    criarCliente: async (req, res)=>{
        try {
            const{nomeCliente, cpfCliente} = req.body; // coleta dados usando método POST

            if(nomeCliente == undefined || cpfCliente == undefined || isNaN(cpfCliente)){//verificção dos dados
                return res.status(400).json({error: 'Campos obrigatórios não preenchidos!'})
            }

            const result = await clienteModel.verificarCPF(cpfCliente);
             if(result.length > 0){
                return res.status(409).json({message: "CPF Existente"});
             }
        
            await clienteModel.inserirCliente(nomeCliente, cpfCliente)

            res.status(201).json({message: 'Cliente cadastrado com sucesso!'});
        } catch (error) {
            console.error('Erro ao cadastrar cliente', error);
            res.status(500).json({erro: 'Erro no servido ao cadastrar cliente!'})
        }
    }
}   

module.exports = {clienteController};