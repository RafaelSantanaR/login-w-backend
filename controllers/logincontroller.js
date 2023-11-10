import dbKinex from '../database/db_config.js';

export const login = async (req,res) => {
    const {email, senha} = req.body;

    if(!email || !senha) {
        res.status(400).json({message: 'porfavor, forneça email e senha.'});
        return;        
    }
    try {
        const user = await dbKinex('clientes')
        .where({email, senha})
        .select('id','email')

        if(user.length > 0){
            res.status(200).json({message: 'login bem-sucedido', user});
        } else {
            res.status(401).json({message: 'credenciais invalidas'});
        }
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}