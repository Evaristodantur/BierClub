module.exports = (sequelize, dataTypes) => {
  let alias = "Products";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(61),
    },
    price: {
      type: dataTypes.INTEGER,
    },
    discount: {
      type: dataTypes.INTEGER,
    },
    stock: {
      type: dataTypes.INTEGER,
    },
    description: {
      type: dataTypes.STRING(280),
    },
    createdAt: {
      type: dataTypes.DATE,
    },
    updatedAt: {
      type: dataTypes.DATE,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Categories, {
      as: "categories",
      foreignKey: "category_id",
    });

    Product.belongsToMany(models.Carts, {
      as: "carts",
      through: "cart_product",
      foreignKey: "product_id",
      otherKey: "cart_id",
      timestamps: false,
    });

    Product.belongsToMany(models.Images, {
      as: "images",
      through: "image_product",
      foreignKey: "product_id",
      otherKey: "image_id",
      timestamps: false,
    });
  };

  return Product;
};
