import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { getProfile, login, logout, refreshAccessToken } from './controllers/authControllers.js';
import refreshTokenMiddleware from './middlewares/refreshTokenMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
    res.send("implementation of auth system with jwt and cookies");
});

// login
app.post('/login', login);

// refresh accessToken by refreshToken
app.get('/refresh', refreshTokenMiddleware, refreshAccessToken);

// was loggedIn
app.get('/profile', authMiddleware, getProfile)

// logout
app.get('/logout', authMiddleware, logout)

app.listen(PORT, () => {
    console.log(`Server running and up at http://localhost:${PORT}`);
});