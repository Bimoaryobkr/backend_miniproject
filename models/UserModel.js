const sql = require("../utils/db.js");

const User = {};

User.create = async (newUser) => {
    const [res, fields] = await sql.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [newUser.name, newUser.email, newUser.password]
    );
    return { id: res.insertId, ...newUser };
};

User.findByEmail = async (email) => {
    const [rows] = await sql.execute("SELECT * FROM users WHERE email = ?", [
        email,
    ]);
    if (rows.length) {
        return rows[0];
    }
    return null;
};

User.getAll = async () => {
    const [rows] = await sql.execute(
        "SELECT id, name, email, created_at FROM users"
    );
    return rows;
};

User.findById = async (userId) => {
    const [rows] = await sql.execute(
        "SELECT id, name, email, created_at FROM users WHERE id = ?",
        [userId]
    );
    if (rows.length) {
        return rows[0];
    }
    return null;
};

User.updateById = async (id, user) => {
    const [res] = await sql.execute(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [user.name, user.email, id]
    );
    if (res.affectedRows === 0) {
        return null;
    }
    return { id: id, ...user };
};

User.remove = async (id) => {
    const [res] = await sql.execute("DELETE FROM users WHERE id = ?", [id]);
    if (res.affectedRows === 0) {
        return null;
    }
    return res;
};

module.exports = User;
