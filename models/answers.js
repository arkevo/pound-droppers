"use strict";
module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define(
    "Answers",
    {
      a1: DataTypes.INTEGER,
      a2: DataTypes.INTEGER,
      a3: DataTypes.INTEGER,
      a4: DataTypes.INTEGER,
      a5: DataTypes.INTEGER,
      a6: DataTypes.INTEGER
    },
    {}
  );
  Answers.associate = function(models) {
    // associations can be defined here
  };
  return Answers;
};
