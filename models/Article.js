const { Model, DataTypes } = require("sequelize");
const { User } = require("./User");

class Article extends Model {
  static initModel(sequelize) {
    Article.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "article",
      },
    );

    return Article;
  }
}

//User.belongsTo(Article);

module.exports = Article;
