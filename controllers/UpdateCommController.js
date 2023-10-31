
import { Comentario } from '../models/Comentario.js';

export const updateComm = async (req, res) => {
  const { contenido } = req.body;
  const { idPub, id } = req.params;

  try {
    const comentario = await Comentario.findOne({
        where: {
          id: id,
          publicacion_id: idPub
        }
    });

    if (comentario) {
      comentario.contenido = contenido;
      await comentario.save();
      res.status(200).json(comentario);
    } else {
      res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

