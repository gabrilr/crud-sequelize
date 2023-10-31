
import { Comentario } from '../models/Comentario.js';

export const registerComm = async (req, res) => {
    try {
        const { contenido, publicacion_id, usuario_id } = req.body;
        const comentario = await Comentario.create({ contenido, publicacion_id, usuario_id });
        res.status(201).json(comentario);
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
};