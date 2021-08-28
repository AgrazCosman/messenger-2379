const Sequelize, { Op } = require("sequelize");
const db = require("../db");

const GroupUser = db.define("groupUser", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

// Find all group conversations belonging to a specific user
GroupUser.findGroupConversationsByUserId = async function (userId) {
  const GroupUser = await GroupUser.findAll({
    where: {
      userId: {
        [Op.eq]: userId
      }
    }
  });

  return GroupUser;
};

module.exports = GroupUser;
