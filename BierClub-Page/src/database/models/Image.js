module.exports = (sequelize, dataTypes) => {
  let alias = "Images";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(61),
    },
    createdAt: {
      type: dataTypes.DATE,
    },
    updatedAt: {
      type: dataTypes.DATE,
    },
  };
  let config = {
    tableName: "images",
    timestamps: false,
  };

  const Image = sequelize.define(alias, cols, config);

  Image.associate = function (models) {
    Image.belongsToMany(models.Products, {
      as: "products",
      through: "image_product",
      foreignKey: "image_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };

  return Image;
};
