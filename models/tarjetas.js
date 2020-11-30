let Tarjetas = (sequelize, Sequelize) => {
    let modelo = sequelize.define(
      "Tarjetas",
      {
        numeroTarjeta: {
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        idPersona: {
            type: Sequelize.INTEGER,
            references: {
                model: "Personas",
                key: "idPersona"
            }
        },
        caducidadTarjeta: {
          notEmpty: true,
          type: Sequelize.DATEONLY
        },
        cvvTarjeta: {
          notEmpty: true,
          type: Sequelize.INTEGER
        },
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    modelo.associate = function(models) {
      modelo.belongsTo(models.Personas, { foreignKey: "idPersona" });
    };
    return modelo;
  };
  module.exports = Tarjetas;