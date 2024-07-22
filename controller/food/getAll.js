const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const {URL_SERVICE_FOOD} = process.env;

const foodApi = apiAdapter(URL_SERVICE_FOOD);


module.exports = async(req, res) => {
    try {
        const food = await foodApi.get(`/api/foods`)
        return res.json(food.data)
    } catch (error) {
        catchError(error. res)
    }
}
