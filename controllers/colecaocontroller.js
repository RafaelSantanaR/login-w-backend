import dbKinex from '../database/db_config.js';
/*getcolecao, createcolecao, deletecolecao, */

export const getcolecao = async (req, res) => {
    try{
        const colecoes = await dbKinex('colecoes').select('*');
        res.status(200).json(colecoes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createcolecao = async (req, res) => {
    const { nome } = req.body;

    if (!nome ) {
        res.status(400).json({message: 'Dados inválidos'});
        return;
        }
        try {
            const colecoes = await dbKinex('colecoes').insert({ nome });
            res.status(201).json(colecoes);
        }catch (error) {
            res.status(500).json({message: error.message});
        }
}

export const deletecolecao = async (req, res) => {
    const { colecoesid } = req.params;
    try{
        const colecoes = await dbKinex('colecoes').delete().where({ id: colecoesid});
        res.status(201).json(colecoes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}