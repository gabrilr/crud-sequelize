import { Router } from "express";

import { registerUser } from "../controllers/RegisterUserController.js";
import { findUser, findAllUsers } from "../controllers/FindUserController.js";
import { updateUser } from "../controllers/UpdateUserController.js";
import { deleteUser } from "../controllers/DeleteUserController.js";

import { registerPub } from "../controllers/RegisterPubController.js";
import { findPub, findAllPubs } from "../controllers/FindPubController.js";
import { updatePub } from "../controllers/UpdatePubController.js";
import { deletePub } from "../controllers/DeletePubController.js";

import { registerComm } from "../controllers/RegisterCommController.js";
import { findComm, findCommsPerPub } from "../controllers/FindCommController.js";
import { updateComm } from "../controllers/UpdateCommController.js";
import { deleteComm } from "../controllers/DeleteCommController.js";

const router = Router();

router.post('/registrar-usuario', registerUser);
router.post('/buscar-usuario/:id', findUser);
router.get('/obtener-usuarios', findAllUsers);
router.put('/actualizar-usuario/:id', updateUser);
router.delete('/borrar-usuario/:id', deleteUser);

router.post('/nueva-publicacion', registerPub);
router.post('/buscar-publicacion/:id', findPub);
router.get('/obtener-publicaciones', findAllPubs);
router.put('/actualizar-publicacion/:id', updatePub);
router.delete('/borrar-publicacion/:id', deletePub);

router.post('/nuevo-comentario', registerComm);
router.post('/publicacion/:idPub/buscar-comentario/:id', findComm);
router.get('/publicacion/:idPub/buscar-comentario/', findCommsPerPub);
router.put('/publicacion/:idPub/actualizar-comentario/:id', updateComm);
router.delete('/publicacion/:idPub/eliminar-comentario/:id', deleteComm);

export default router;
