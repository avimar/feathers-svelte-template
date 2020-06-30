const { Service } = require('feathers-knex');

exports.Users = class Users extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'users'
    });
  }
};
