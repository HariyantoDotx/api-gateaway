const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const {URL_SERVICE_FOOD} = process.env;

const foodApi = apiAdapter(URL_SERVICE_FOOD);


module.exports = async(req, res) => {
    try {
        const {id} = req.params;
        const food = await foodApi.put(`/api/foods/${id}`, req.body)
        return res.json(food.data)
    } catch (error) {
        catchError(error. res)
    }
}
