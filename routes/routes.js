import { Router } from "express";

import { registerUser } from "../controllers/RegisterUserController.js";
import { findUser, findAllUsers } from "../controllers/FindUserController.js";
import { updateUser } from "../controllers/UpdateUserController.js";
import { deleteUser } from "../controllers/DeleteUserController.js";

import { registerPub } from "../controllers/RegisterPubController.js";
import { findPub, findAllPubs } from "../controllers/FindPubController.js";
import { updatePub } from "../controllers/UpdatePubController.js";
import { deletePub } from "../controllers/DeletePubController.js";

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

export default router;
