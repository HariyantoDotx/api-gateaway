const apiAdapter = require("../apiAdapter")
const catchError = require("../catchError")

const {URL_SERVICE_USER} = process.env

const userApi = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) =>{
    try {
        const user = await userApi.post("/users/address", req.body)
        return res.json(user.data)

    } catch (error) {
        catchError(error, res)
        
    }
}