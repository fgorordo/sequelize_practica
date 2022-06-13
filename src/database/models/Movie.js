module.exports = (sequelize, dataTypes) => {
  let alias = 'Movie'
  let cols = {
    id: {
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
    } ,
    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    rating: {
      type: dataTypes.FLOAT(3,1).UNSIGNED,
      allowNull: false,
    },
    awards: {
      type: dataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    } ,
    release_date:{
      type: dataTypes.DATE,
      allowNull: false,
    } ,
    length: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    } ,
    genre_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    } ,
  }

  const Movie = sequelize.define(alias, cols, {
    timestamp: true,
    underscored: true
  })

  return Movie;
}