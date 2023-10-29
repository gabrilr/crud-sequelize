
import { DataTypes } from 'sequelize';
import { sequelize } from'../db/db.js';

import { Usuario } from '../models/Usuario.js';
import { Publicacion } from '../models/Publicaciones.js';

export const Comentario = sequelize.define('Comentario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    publicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Publicacion,
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'id'
      }
    }
  });