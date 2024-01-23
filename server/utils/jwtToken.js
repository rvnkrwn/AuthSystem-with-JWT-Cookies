import jwt from 'jsonwebtoken';

const jwtRefreshSecretKey = "c63/r8fVEDUTRMgVeb37L/Fq9rbPSApFYiCXjFCa";
const jwtAccessSecretKey = "53HnTF7Q+N/vHlmJYhkaehW0FAFQD91vMIlVnxlN";

const generateRefreshToken = (data) => {
    return jwt.sign(data, jwtRefreshSecretKey, {
        expiresIn: '4h'
    })
}

const generateAccessToken = (data) => {
    return jwt.sign(data, jwtAccessSecretKey, {
        expiresIn: '10m'
    })
}

export const generateToken = (data) => {
    const refreshToken = generateRefreshToken(data)
    const accessToken = generateAccessToken(data)
    return {refreshToken, accessToken}
}

export const decodeRefreshToken = (data) => {
    return jwt.verify(data, jwtRefreshSecretKey)
}

export const decodeAccessToken = (data) => {
    return jwt.verify(data, jwtAccessSecretKey)
}