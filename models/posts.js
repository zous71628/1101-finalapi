const { query } = require('express');
const db = require('../utils/database');

const Posts = class Posts {
  constructor(id, title, content,image,date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.date = date;

  }
  //CREATE
  static async create(body) {
    const { id,title, content,image} = body;
    const date = new Date().toString();
    const query = {
      text: `INSERT INTO posts (id,title, content,image,date) VALUES ($1,$2,$3,$4,$5)`,
      values: [id,title, content,image,date],
    };
    return db.query(query);
  }

  // READ 
  static async read() {
    try {
      const results = await db.query(`SELECT * FROM posts`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  //UPDATE
  static async update(body) {
    const { id, title, content,image } = body;
    const date = new Date().toString();
    const query = {
      text: `UPDATE posts SET title = $2, content = $3,image = $4, date = $5 WHERE id = $1;`,
      values: [id, title, content,image,date],
    };
    return db.query(query);
  }

  //DELETE
  static async delete(id) {
    console.log(id);
    const query = {
      text: `DELETE FROM posts WHERE id = $1`,
      values: [id],
    };
    return db.query(query);
  }
};

module.exports = Posts;