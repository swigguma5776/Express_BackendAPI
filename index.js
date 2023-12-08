import express from 'express';
import bodyParser from 'body-parser'; 


// internal imports
import usersRoutes from './routes/users.js'


const app = express();
const PORT = 5001;


app.use(bodyParser.json()); 


// Setting up our User Routes Endpoint
app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))