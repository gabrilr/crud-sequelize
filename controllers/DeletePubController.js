
import { Usuario } from '../models/Usuario.js';

export const deletePub = async (req, res) => {
    const idPub  = req.params.id;

  try {
    const publicacion = await Publicacion.findByPk(idPub);
    if (publicacion) {
      await publicacion.destroy();
      res.status(204).json({mess: "eliminado con exito"});
    } else {
      res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};