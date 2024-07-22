const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const {URL_SERVICE_PAYMENT} = process.env;

const foodApi = apiAdapter(URL_SERVICE_PAYMENT);


module.exports = async(req, res) => {
    try {
        const {id} = req.params;
        const food = await foodApi.put(`/api/order/${id}`, req.body)
        return res.json(food.data)
    } catch (error) {
        catchError(error. res)
    }
}
