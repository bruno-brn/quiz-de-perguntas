const Sequelize = require('sequelize')

const connection = new Sequelize('quiz_q', 'root', 'mysqlDatabase$', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection