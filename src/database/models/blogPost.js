const BlogPost = (sequelize, DataTypes ) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
      autoIncrement: true,
      },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'User',
        key: 'id',
      },
    }
  }, 
  {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
    { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};

module.exports = BlogPost;
