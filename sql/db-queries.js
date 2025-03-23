const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'etelDB'
});

function selectAll() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM etelek;', (err, result, fields) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function selectID(tomb_selectUpdate) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM etelek WHERE id = ?;',tomb_selectUpdate, (err, result, fields) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function insert(tomb_insert)
{
    return new Promise((resolve, reject) =>
    {
        pool.query('INSERT INTO etelek(nev, kaloria, etkezesi_tipus, recept_link) VALUES (?)', [tomb_insert], (err, result) =>
        {
            if(err) return reject(err);
            resolve(result);
        });
    });
}
//felesleges function, de hátha kell
// function update(tomb_update)
// {
//     return new Promise((resolve, reject) =>
//     {
//         console.log(tomb_apdet);
//         pool.query("UPDATE etelek SET nev=?, kaloria=?, etkezesi_tipus=?, recept_link=? WHERE id=?", tomb_update, (err, result) =>
//         {
//             if(err) return reject(err);
//             resolve(result);
//         });
//     });
// }

function Torol(tomb_delete)
{
    return new Promise((resolve, reject) =>
    {
        pool.query('DELETE FROM etelek WHERE id = ?;', tomb_delete , (err, result) =>
        {
            if(err) return reject(err);
            resolve(result);
        });
    });
}



module.exports = {
    selectAll,
    insert,
    //update,
    Torol,
    selectID
};
//?Több function esetén vesszővel felsorolni a meghívható metódusokat. (pl.: selectAll, insertData)
