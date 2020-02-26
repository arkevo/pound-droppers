module.exports = function(sequelize, DataTypes) {
  var calendar = sequelize.define(
    "Calendar",
    {
      month: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      day: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hour: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      min: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      ampm: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      event: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 255],
            message: "Event must be between 1 and 255 characters in length."
          }
        }
      }
    },
    {
      freezeTableName: true
    }
  );

  return calendar;
};
