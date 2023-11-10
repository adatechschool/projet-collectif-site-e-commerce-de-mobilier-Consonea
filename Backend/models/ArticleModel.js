const db = require("../sqlConnection");

class Article {
  constructor(
    name,
    type,
    colors,
    price,
    height,
    width,
    depth,
    description,
    status,
    quantity,
    user_id
  ) {
    this.name = name;
    this.type = type;
    this.colors = colors;
    this.price = price;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.description = description;
    this.status = status;
    this.quantity = quantity;
    this.user_id = user_id;
  }

  static async getAllArticles() {
    let sql = `SELECT * FROM articles;`;
    return await db.execute(sql);
  }

  static async updateArticle(articleId, updatedData) {
    try {
      const sql = `
        UPDATE articles
        SET 
          name = '${updatedData.name}',
          type = '${updatedData.type}',
          colors = '${updatedData.colors}',
          price = ${updatedData.price},
          height = ${updatedData.height},
          width = ${updatedData.width},
          depth = ${updatedData.depth},
          description = '${updatedData.description}',
          status = ${updatedData.status},
          quantity = ${updatedData.quantity},
          user_id = ${updatedData.user_id}
        WHERE id = ${articleId};`;

      await db.execute(sql);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article :", error);
      throw error;
    }
  }

  static async getArticleByID(articleId) {
    const query = `SELECT * FROM articles WHERE id =${articleId}`;
    const [rows] = await db.query(query, [articleId]);
    return rows[0];
  }

  static async getArticleByType(articleType) {
    const query = `SELECT * FROM articles WHERE type ='${articleType}'`;
    const [rows] = await db.query(query, [articleType]);
    return rows[0];
  }

  static async getArticlesByUser(user_id) {
    const sql = `SELECT * FROM articles WHERE user_id =${user_id}`;
    return await db.execute(sql);
  }

  async saveArticle() {
    let sql = `
    INSERT INTO articles(
      name,
      type,
      colors,
      price,
      height,
      width,
      depth,
      description,
      status,
      quantity,
      user_id
    )
    VALUES(
        '${this.name}',
        '${this.type}',
        '${this.colors}',
        '${this.price}',
        '${this.height}',
        '${this.width}',
        '${this.depth}',
        '${this.description}',
        '${this.status}',
        '${this.quantity}',
        '${this.user_id}'
    )
    `;
    return await db.execute(sql);
}

static async deleteArticleByID(id) {
    const query = `DELETE FROM articles WHERE id = ${id}`;
    await db.query(query,[id]);
  } 


}

module.exports = Article;