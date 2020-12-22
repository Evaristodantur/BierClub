module.exports = (sequelize, dataTypes) => {
    let alias = "Images";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(61)
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "images",
        timestamps: false
    };

    const Image = sequelize.define(alias, cols, config);

    return Image;
}