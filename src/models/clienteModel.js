const { sql, getConnection } = require("../config/db");

const clienteModel = {
    buscarTodos: async () => {
        try {

            const pool/* cria um conjunto de conexões */ = await getConnection(); //cria conexão com o BD

            let sql = 'SELECT * FROM Clientes';

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar clientes:', error)
            throw error; // Passa o erro para o controller tratar 
        }
    },

    verificarCPF: async (cpfCliente) => {
        try {
            const pool = await getConnection();

            const querySQL = 'SELECT * FROM Clientes WHERE cpfCliente = @cpfCliente';

            const result = await pool.request()
                .input('cpfCliente',  sql.Char(11), cpfCliente)
                .query(querySQL);

            return result.recordset;
        } catch (error) {
            console.error('Erro ao verificar CPF', error);
            throw error;
        }
    },
    
    inserirCliente: async (nomeCliente, cpfCliente) => {
        try {
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Clientes(nomeCliente, cpfCliente) VALUES (@nomeCliente, @cpfCliente)';

            await pool.request()
                .input('nomeCliente', sql.VarChar(100), nomeCliente) /*adiciona um valor na consulta*/
                .input('cpfCliente', sql.Char(11),cpfCliente)
                .query(querySQL);
        } catch (error) {
            console.error('Erro ao inserir Cliente',error);
            throw error; // Passa o erro para o controller tratar 
        }
    }
}

module.exports = {clienteModel}
