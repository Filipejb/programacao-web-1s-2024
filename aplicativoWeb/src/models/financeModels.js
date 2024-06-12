const db = require('../database/db');

const Finance = {
    getAll: (callback) => {
        db.all('SELECT * FROM finances', [], (err, rows) => {
            callback(err, rows);
        });
    },
    create: (description, amount, date, callback) => {
        db.run('INSERT INTO finances (description, amount, date) VALUES (?, ?, ?)',
            [description, amount, date], function (err) {
                callback(err, this.lastID);
            });
    },
    delete: (id, callback) => {
        db.run('DELETE FROM finances WHERE id = ?', [id], (err) => {
            callback(err);
        });
    }
};

module.exports = Finance;
