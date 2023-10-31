
import { Publicacion } from '../models/Publicaciones.js';

export const deletePub = async (req, res) => {
    const idPub  = req.params.id;

  try {
    const publicacion = await Publicacion.findByPk(idPub);
    if (publicacion) {
      await publicacion.destroy();
      res.status(204).send(); // no es necesario enviar un mensaje ya que el status 204 es signo de una eliminacion
    } else {
      res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};