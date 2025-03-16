const jwt = require("jsonwebtoken");
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;


class TokeService {
    generateToken(payload) {
        const accesstoken = jwt.sign(payload, accessTokenSecret, {
            expiresIn: "1h",
        });
        const refreshtoken = jwt.sign(payload, refreshTokenSecret, {
            expiresIn: "1y",
        });
        return { accesstoken, refreshtoken };
    }   //verify the token
        verifyToken(token) {
        return jwt.verify(token, accessTokenSecret || refreshTokenSecret);
        //if the token is valid return the payload else throw an error
        // return jwt.verify(token, accessTokenSecret || refreshTokenSecret, (err, decoded) => {
        //     if (err) throw err;
        //     return decoded;
        // });
    }   //generate the refresh token    
    generateRefreshToken(payload) {
        return jwt.sign(payload, refreshTokenSecret, {
            expiresIn: "1y",
        });

    
    }
    
}


module.exports = new TokeService();