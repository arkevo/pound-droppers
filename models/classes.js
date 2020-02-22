'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    type: DataTypes.STRING,
    time: DataTypes.DATE,
    room: DataTypes.STRING
  }, {});
  Classes.associate = function(models) {
    // associations can be defined here
  };
  return Classes;
};

// module.exports = Classes;
// module.exports = Classes;


// const NukeUser = sequelize.define('nuke_users', {
//   // ...
// });

// module.exports = NukeUser;