const apiAdapter = require ("../apiAdapter")
const catchError = require ("../catchError")

const {URL_SERVICE_USER} = process.env

const userApi = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
    try {
        const {id} = req.params
        const address = await userApi.put(`users/address/${id}` , req.body)
        return res.json(address.data)
    } catch (error) {
        catchError(error, res)
    }
}