const { query } = require('express');
const db = require('../utils/database');

const Users = class Users {
  constructor(id, account, password) {
    this.id = id;
    this.account = account;
    this.password = password;
  }
  //CREATE
  static async create(body) {
    const { id, account, password } = body;
    const query = {
      text: `INSERT INTO users (id, account, password) VALUES ($1,$2,$3)`,
      values: [id, account, password],
    };
    return db.query(query);
  }

  // READ
  static async read() {
    try {
      const results = await db.query(`SELECT * FROM users ORDER BY id ASC`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  //UPDATE
  static async update(body) {
    const { id, account, password } = body;
    const query = {
      text: `UPDATE users SET account = $2, password = $3 WHERE id = $1;`,
      values: [id, account, password],
    };
    return db.query(query);
  }

  //DELETE
  static async delete(id) {
    console.log(id);
    const query = {
      text: `DELETE FROM users WHERE id = $1`,
      values: [id],
    };
    return db.query(query);
  }

  // LOGIN
  static async login(account) {
    try {
      const query = {
        text: `SELECT * FROM users WHERE account=$1;`,
        values: [account],
      };
      return db.query(query);
    } catch (error) {
      console.log('error', error);
    }
  }
};

module.exports = Users;
