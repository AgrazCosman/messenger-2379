const Sequelize = require("sequelize");
const db = require("../db");

const Group = db.define("group", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: `Group Conversation #idValue`
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "url/placeholder.jpeg"
    },
    visibility: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Group;