const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors =require('cors')

app.use(cors());

app.use(express.json())
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
        try {
            db = JSON.parse(data);
        } catch (parseErr) {
            console.error(parseErr);
            // Send JSON error message
            return res.status(500).json({ message: 'Error parsing the database file. Invalid JSON.' });
        }
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