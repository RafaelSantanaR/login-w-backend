import {Router,json} from 'express';
import { createartes, getArteById, getArtes, deleteartes } from './controllers/artecontroller.js';
import { createCliente, getClientes, deleteCliente} from './controllers/clientcontroller.js';
import { getcolecao, createcolecao, deletecolecao } from './controllers/colecaocontroller.js';
import { login } from './controllers/logincontroller.js';

const router = Router();

router.use(json())

//cliente
router.get('/cliente',getClientes)
router.post('/cliente',createCliente)
router.delete('/cliente/:clienteId',deleteCliente)

//artes
router.get('/artes',getArtes)
router.post('/artes',createartes)
router.get('/artes',getArteById)
router.delete('/artes/:arteId',deleteartes)

//colecoes
router.get('/colecoes',getcolecao)
router.post('/colecoes',createcolecao)
router.delete('/colecoes/:colecoesid',deletecolecao)

//login
router.post('/login',login )

export default router;