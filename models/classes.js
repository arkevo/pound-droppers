"use strict";
module.exports = (sequelize, DataTypes) => {
  const Trainers = sequelize.define(
    "Trainers",
    {
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      introduction: DataTypes.STRING
    },
    {}
  );
  const Classes = sequelize.define(
    "Classes",
    {
      type: DataTypes.STRING,
      time: DataTypes.DATE,
      room: DataTypes.STRING,
      trainerid: DataTypes.INTEGER
    },
    {}
  );
  Classes.associate = function(models) {
    // associations can be defined here
    Trainers.hasMany(Classes, {
      foreignKey: "trainerid"
    });
    Classes.belongsTo(Trainers);
  };
  return Classes;
};
