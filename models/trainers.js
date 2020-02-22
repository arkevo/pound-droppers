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
  Trainers.associate = function(models) {
    // associations can be defined here
  };
  return Trainers;
};
