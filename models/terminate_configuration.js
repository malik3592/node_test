
module.exports = (sequelize, DataTypes) => {
  const terminate_configuration = sequelize.define(
    "terminate_configuration",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      message: DataTypes.STRING,
      time:DataTypes.INTEGER
    },
    {
      timestamps: true,
      tableName: "terminate_configuration",
    }
  );

  return terminate_configuration;
};
