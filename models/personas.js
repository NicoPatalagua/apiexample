let Personas = (sequelize, Sequelize) => {
    let modelo = sequelize.define(
      "Personas",
      {
        idPersona: {
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        cedulaPersona: {
          unique: true,
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        nombrePersona: {
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        direccionPersona: {
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        celularPersona: {
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        correoPersona: {
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        username: {
          notEmpty: true,
          defaultValue: "N/A",
          type: Sequelize.STRING
        },
        passwordUser: {
            notEmpty: true,
            defaultValue: "N/A",
            type: Sequelize.STRING
        },
        numeroTarjeta: {
            notEmpty: true,
            type: Sequelize.INTEGER
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    modelo.associate = function(models) {
      modelo.hasMany(models.Tarjetas, { foreignKey: "numeroTarjeta" });
    };
    return modelo;
  };
  module.exports = Personas;