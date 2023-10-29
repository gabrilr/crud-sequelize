
import { Usuario } from '../models/Usuario.js';

export const registerUser = async (req, res) => {
    try {
        const { nombre, email } = req.body;
        const usuario = await Usuario.create({ nombre, email });
        res.status(201).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};