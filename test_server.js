const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('client'));


app.post('/api/addData', (req, res) => {
    
    const newData = req.body;

    fs.readFile('testdb.json', 'utf8', (err, data) => {
        //check if json is readable
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading the database file.');
        }

        //convert json data into obj and update it with new data
        const db = JSON.parse(data);
        db.push(newData);


        //write updated data back
        fs.writeFile('testdb.json', JSON.stringify(db, null, 2), (err) => {
            // check if json is writable
            if (err) {
                console.error(err);
                return res.status(500).send('Error writing to the database file.');
            }
            //positive response from server
            res.status(200).json({ message: 'Data added successfully' });
        });


    });
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});