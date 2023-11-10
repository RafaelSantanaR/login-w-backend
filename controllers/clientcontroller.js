import dbKinex from '../database/db_config.js';

export const getClientes = async (req, res) => {
    try {
        // Busca todos os clientes
        const clientes = await dbKinex('clientes').select('*');
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getClienteById = async (req, res) => {
    // Passa o id do cliente como parâmetro (exemplo: localhost:3003/cliente/1)
    const { clienteId } = req.params;
    
    try {
        const cliente = await dbKinex('clientes').select('*').where({id: clienteId});
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createCliente = async (req, res) => {
    // Desmembra os dados do corpo da requisição
    // Informa os dados que serão inseridos no banco de dados através do corpo da requisição
    const { email, senha } = req.body;

    // Verifica se os dados foram enviados
    if (!email || !senha ) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; 
    }

    try {
        // Insere os dados na tabela
        const cliente = await dbKinex('clientes').insert({ email, senha });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

export const updateCliente = async (req, res) => {
    const { clienteId } = req.params;
    const { email, senha } = req.body;

    if (!email || !senha ) {
        res.status(400).json({ message: 'Dados inválidos' });
        return; // Encerre a função após a resposta.
    }

    try {
        const cliente = await dbKinex('clientes').update({ email, senha }).where({ id: clienteId });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCliente = async (req, res) => {
    const { clienteId } = req.params;

    try {
        const cliente = await dbKinex('clientes').delete().where({ id: clienteId });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

