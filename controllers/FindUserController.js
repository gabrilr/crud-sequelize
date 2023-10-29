
import { Usuario } from '../models/Usuario.js';

export const findAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        if (usuarios) {
            res.status(200).json(usuarios);
        } else{

            res.status(401).json({mess: 'no hay usuarios'});
        } 
    } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

export const findUser = async (req, res) => {
    const idU  = req.params.id;

    try {
        const usuario = await Usuario.findByPk(idU);
        if (usuario) {
        res.json(usuario);
        } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};
