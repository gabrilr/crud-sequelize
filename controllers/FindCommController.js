
import { Comentario } from '../models/Comentario.js';

export const findComm = async (req, res) => {
  const { idPub, id } = req.params;

  try {
    const comentario = await Comentario.findOne({
      where: {
        id: id,
        publicacion_id: idPub
      }
    });

    if (comentario) {
      res.json(comentario);
    } else {
      res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

export const findCommsPerPub = async (req, res) => {
    const { idPub } = req.params;
  
    try {
      const comentarios = await Comentario.findAll({
        where: {
          publicacion_id: idPub
        }
      });
  
      if (comentarios) {
        res.json(comentarios);
      } else {
        res.status(404).json({ mensaje: 'Comentario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };