"use strict";
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define(
    "Classes",
    {
      type: DataTypes.STRING,
      time: DataTypes.DATE,
      room: DataTypes.STRING
    },
    {}
  );
  Classes.associate = function(models) {
    // associations can be defined here
    Classes.belongsTo(models.Trainers);
  };
  return Classes;
};
