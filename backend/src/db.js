const { Pool } = require("pg");
const { database, user, password, host } = process.env;

class Db {
  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST || host,
      database,
      user,
      password,
    });
    this.init();
    this.pool.on("error", (err, client) => {
      this.init();
    });
  }

  async init() {
    try {
      const client = await this.pool.connect();
      await client.query("SELECT NOW()");
      client.release();
      console.log("🚀 DB connection is up");
    } catch (e) {
      console.log(`Error connecting to db e:${e}`);
    }
  }

  async query(q) {
    try {
      const { rows } = await this.pool.query(q);
      return rows;
    } catch (e) {
      console.log(`Error querying db q:${q} e:${e}`);
      throw e;
    }
  }
}

const db = new Db();
module.exports = db;
