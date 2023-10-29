
import { sequelize } from'../db/db.js';

import { Usuario } from '../models/Usuario.js';
import { Publicacion } from '../models/Publicaciones.js';
import { Comentario } from '../models/Comentario.js';

// Relaciones entre modelos
Usuario.hasMany(Publicacion, { foreignKey: 'usuario_id' });
Publicacion.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(Comentario, { foreignKey: 'usuario_id' });
Comentario.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Publicacion.hasMany(Comentario, { foreignKey: 'publicacion_id' });
Comentario.belongsTo(Publicacion, { foreignKey: 'publicacion_id' });

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tablas sincronizadas correctamente');
  })
  .catch((err) => {
    console.error('Error al sincronizar las tablas: ', err);
  });
