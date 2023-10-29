
import { Usuario } from '../models/Usuario.js';

export const deleteUser = async (req, res) => {
    const idU  = req.params.id;

    try {
        const usuario = await Usuario.findByPk(idU);
        if (usuario) {
        await usuario.destroy();
        res.status(204).json({mess: "eliminado con exito"});
        } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};
