const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const ip = '127.0.0.1';
const path = require('path');
const fs = require('fs');
const { CallTracker } = require('assert');
const multer = require("multer");
const { selectAll } = require('./sql/db-queries');
const { request } = require('http');
const upload = multer({dest : 'uploads/'})
app.use(express.json());
app.use(express.static('public'));
const db = require(path.join(__dirname + '/sql/db-queries.js'));



router.get('/', (request, response) =>
{
    response.sendFile(path.join(__dirname + '/public/html/index.html'));
});

async function readfileAsync(filepath)
{
    try
    {
        return await fs.promises.readFile(filepath, "utf-8");
    }
    catch(err)
    {
        console.log(err);
    }
}

app.get('/api/selectAll', (request, response) =>
    {
    db.selectAll()
        .then((data) => {
            response.json(data);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
});


app.post('/api/insert' , upload.single('file'), async (req, res) =>
{
    let tomb_insert = [];
    try
    {
        res.send(await db.inzert(tomb_insert));
    }
    catch(err)
    {
        console.log(err);
    }
    
})

app.post('/api/delete' , upload.single('file') ,async (req, res) =>
    
    {
    let tomb_delete = [];
    try
    {
        res.send(await db.dilit(tomb_delete));
    }
    catch(err)
    {
        console.log(err);
    }
        
})

app.post('/api/update' , upload.single('file') , async (req, res) =>
    {
    let tomb_update = [];
    try
    {
        res.send(await db.apdet(tomb_update));
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get('/api/selectID' , async (req, res) =>
    {
    try
    {
        res.send(await db.selectID([req.query.id]));
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get('/admin/elfogad', (request, response) =>
{
    //ahol elfogadjuk a kéréseket
    response.sendFile(path.join(__dirname + '/admin/admin.html'));
});


app.use('/', router);

app.listen(port, () => 
{
    console.log('Szerver ínbg sn: http://localhost:3000');
});