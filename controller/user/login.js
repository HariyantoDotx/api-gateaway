const apiAdapter = require("../apiAdapter")
const catchError = require("../catchError")
const jwt = require("jsonwebtoken")

const {
 URL_SERVICE_USER,
JWT_SECRET,
JWT_SECRET_REFRESH_TOKEN,
JWT_ACCESS_TOKEN_EXPIRED,
JWT_REFRESH_TOKEN_EXPIRED,
} = process.env

const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
    try {
        const user = await api.post("/users/login" , req.body)
       
        const{data} = user.data
        const token = jwt.sign({data}, JWT_SECRET, {
            expiresIn : JWT_ACCESS_TOKEN_EXPIRED
        })

        const refreshToken = jwt.sign ( {data}, JWT_SECRET_REFRESH_TOKEN, {
            expiresIn : JWT_REFRESH_TOKEN_EXPIRED
        })

        return res.json({
            status : "success",
            data : {
                token,
                refresh_token : refreshToken,
            }
        })


    } catch (error) {
        catchError(error, res)
    }
}