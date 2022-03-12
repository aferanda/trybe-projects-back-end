const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    Attributes,
    {
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User,
    { foreingKey: 'userId', as: 'user' },
    );
  };

  return BlogPost;
};