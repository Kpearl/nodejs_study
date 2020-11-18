const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        create_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaltValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    })
}