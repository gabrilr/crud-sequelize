
import { Publicacion } from '../models/Publicaciones.js';

export const registerPub = async (req, res) => {
    try {
        const { titulo, contenido, usuario_id } = req.body;
        const publicacion = await Publicacion.create({ titulo, contenido, usuario_id });
        res.status(201).json(publicacion);
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
};