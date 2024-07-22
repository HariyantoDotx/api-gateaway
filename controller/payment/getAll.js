const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const {URL_SERVICE_PAYMENT} = process.env;

const foodApi = apiAdapter(URL_SERVICE_PAYMENT);


module.exports = async(req, res) => {
    try {   
        const userId = req.user.data.id
        const isAdmin = req.user.data.rules = "admin"
        const params = {user_id : userId}
        const food = await foodApi.get(`/api/order`,{
            params : isAdmin? {} : params
        })
        return res.json(food.data)
    } catch (error) {
        catchError(error. res)
    }
}
