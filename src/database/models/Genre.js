module.exports = (sequelize, dataTypes) => {
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
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: true,
    },
    active: {
      type: dataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  }

  const Genre = sequelize.define('Genre', cols, {
    timestamp: true,
    underscored:true
  })

  return Genre; 
}