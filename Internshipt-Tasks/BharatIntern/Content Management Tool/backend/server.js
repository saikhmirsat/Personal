const express = require('express');
const { Connection } = require('./config/db');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

const port = 8000;



// Routes
const blogRoutes = require('./routes/blog');

app.use('/api/blog', blogRoutes);

app.listen(port, async () => {
    try {
        await Connection
        console.log("db is connected")
    } catch (err) {
        console.log('db is not connected')
    }
    console.log(`Server is running on port ${port}`);
});
