const apiAdapter = require("../apiAdapter")
const catchError = require("../catchError")

const{
    URL_SERVICE_USER
} = process.env

const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) =>{
    try {
        const {id} = req.user.data
        const user = await api.get(`/users/${id}`)
        return res.json(user.data)
        
    } catch (error) {
        catchError(error, res)
    }
}