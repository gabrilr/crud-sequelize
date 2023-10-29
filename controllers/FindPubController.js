
import { Publicacion } from '../models/Publicaciones.js';

export const findAllPubs = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        
        if (publicaciones) {
            res.status(200).json(publicaciones);
        } else{

            res.status(401).json({mess: 'no hay usuarios'});
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
};

export const findPub = async (req, res) => {
    const idPub  = req.params.id;

    try {
        const publicacion = await Publicacion.findByPk(idPub);
        if (publicacion) {
          res.status(200).json(publicacion);
        } else {
          res.status(404).json({ mensaje: 'Publicación no encontrada' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
      }
};
