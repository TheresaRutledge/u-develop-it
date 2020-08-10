const inputCheck = require('./utils/inputCheck');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const db = require('./db/database');


//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',apiRoutes);



// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
})

db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
});