import { Database } from "../Database/database.js"
import { generateToken } from "../utils/jwtToken.js";

const db = new Database()

export const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        if (!email && !password) {
            return res.status(400).json({ message: "Bad Request" });
        }

        const user = await db.login(email, password);
        const { refreshToken, accessToken } = generateToken({userId: user.id});
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });
        return res.status(200).json({ message: "Successfully loggedIn", user, accessToken })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const refreshAccessToken = async (req, res) => {
    try {
        const {userId} = req.user;
        const { accessToken } = generateToken({userId});
        return res.status(200).json({ message: "Successfully Refresh Token", accessToken })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const getProfile = async (req, res) => {
    try {
        const {userId} = req.user;
        const user = await db.getUserById(userId)
        if(!user) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('refreshToken')
        return res.status(200).json({ message: "Successfully loggedOut"})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}