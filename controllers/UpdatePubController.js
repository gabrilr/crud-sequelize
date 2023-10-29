
import { Publicacion } from '../models/Publicaciones.js';

export const updatePub = async (req, res) => {
    const { titulo, contenido, usuario_id } = req.body;
    const { idPub } = req.params;

    try {
        const publicacion = await Publicacion.findByPk(idPub);

        if (publicacion) {

            publicacion.titulo = titulo;
            publicacion.contenido = contenido;
            publicacion.usuario_id = usuario_id;
            
            await publicacion.save();
            res.status(200).json(publicacion);
        } else {
            res.status(404).json({ mensaje: 'Publicación no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};