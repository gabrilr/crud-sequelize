
import { Comentario } from '../models/Comentario.js';

export const deleteComm = async (req, res) => {
  const { idPub, id } = req.params;

  try {
    const comentario = await Comentario.findOne({
      where: {
        id: id,
        publicacion_id: idPub
      }
    });

    if (comentario) {
      await comentario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};