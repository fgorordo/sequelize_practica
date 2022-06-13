module.exports = (sequelize, dataTypes) => {
  const Actor = sequelize.define('Actor',{
    id:  {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    created_at: {
      type: dataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: dataTypes.DATE,
      allowNull: true,
    },
    first_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    rating: {
      type: dataTypes.FLOAT(3,1)
    },
    favorite_movie_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      references: 'Movie',
      referencesKey: 'id'
    },
  },
  {
    timestamp: true,
    underscored: true
  })

  return Actor;
}