const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const Group = require("./group");
const GroupUser = require("./groupUser");

// associations

User.hasMany(Conversation);
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

Message.belongsTo(Group);
Group.hasMany(Message);

User.belongsToMany( User, { through: "groupUser", as: "userId" } );
Group.belongsToMany( Group, { through:"groupUser", as: "groupId" } );

module.exports = {
  User,
  Conversation,
  Message,
  Group,
  GroupUser
};
