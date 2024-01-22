import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("implementation of auth system with jwt and cookies");
});

app.listen(PORT, () => {
    console.log(`Server running and up at http://localhost:${PORT}`);
});