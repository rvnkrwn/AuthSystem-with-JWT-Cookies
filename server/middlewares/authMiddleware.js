import { decodeAccessToken } from "../utils/jwtToken.js"

export default async (req, res, next) => {
    try {
        const { authorization } = await req.headers;
        if (!authorization) {
            return res.status(400).json({ message: "Bad Request" });
        }
        const token = authorization.split(" ")[1]
        if (!token) {
            return res.status(400).json({ message: "Bad Request" });
        }
        const decode = decodeAccessToken(token);
        if (!decode) {
            return res.status(401).json({ message: "Token Invalid or Expired" });
        }

        req.user = decode;
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}