module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return Todo;
};
