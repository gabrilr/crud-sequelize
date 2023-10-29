import { Router } from "express";

import { registerUser } from "../controllers/RegisterUserController.js";
//import { find } from "../controllers/findUserController.js";
import { findUser, findAllUsers } from "../controllers/FindUserController.js";
import { updateUser } from "../controllers/UpdateUserController.js";
import { deleteUser } from "../controllers/DeleteUserController.js";

const router = Router();

router.post('/registrar-usuario', registerUser);
router.post('/buscar-usuario/:id', findUser);
router.get('/obtener-usuarios', findAllUsers);
router.put('/actualizar-usuario/:id', updateUser);
router.delete('/borrar-usuario/:id', deleteUser);

export default router;
