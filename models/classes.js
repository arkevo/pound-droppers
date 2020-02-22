"use strict";
module.exports = (sequelize, DataTypes) => {
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
  };
  return Classes;
};
