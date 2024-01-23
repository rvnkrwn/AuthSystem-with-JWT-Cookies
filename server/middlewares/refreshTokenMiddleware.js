import { decodeRefreshToken } from "../utils/jwtToken.js"

export default async (req, res, next) => {
    try {
        const { refreshToken } = await req.cookies;
        if (!refreshToken) {
            return res.status(400).json({ message: "Bad Request" });
        }
        const decode = decodeRefreshToken(refreshToken);
        if(!decode) {
            return res.status(401).json({ message: "Token Invalid or Expired" });
        }

        req.user = decode;
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}