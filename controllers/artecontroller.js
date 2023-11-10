import dbKinex from '../database/db_config.js';

export const getArtes = async (req, res) => {
    try {
        const artes = await dbKinex('artes').select('*');
        res.status(200).json(artes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getArteById = async (req, res) => {
    const {ArteId} = req.params;
    
    try {
        const artes = await dbKinex('artes').select('*').where({id: ArteId});
        res.status(200).json(artes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createartes = async (req, res) => {
    const { nome } = req.body;

if (!nome ) {
    res.status(400).json({ message: 'Dados inválidos' });
    return; // Encerre a função após a resposta.
}

    try {
        const artes = await dbKinex('artes').insert({ nome });
        res.status(201).json(artes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteartes = async (req, res) => {
    const { arteId } = req.params;
    console.log(arteId);

    try{
        const cliente = await dbKinex('artes').delete().where({ id: arteId});
        res.status(201).json(cliente);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}