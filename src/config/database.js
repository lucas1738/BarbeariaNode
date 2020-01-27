module.exports = {

  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscore: true,
    underscoreAll: true,
    quoteIdentifiers: false,
  },
};
