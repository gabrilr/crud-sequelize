
import { Usuario } from '../models/Usuario.js';

export const updateUser = async (req, res) => {
    const { nombre, email } = req.body;
    const { id } = req.params;
  
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        usuario.nombre = nombre;
        usuario.email = email;
        await usuario.save();
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };