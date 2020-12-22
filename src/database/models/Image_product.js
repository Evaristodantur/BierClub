module.exports = (sequelize, dataTypes) => {
    let alias = "Image-Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "image_product",
        timestamps: false
    };

    const Image_Product = sequelize.define(alias, cols, config);

    return Image_Product;
}