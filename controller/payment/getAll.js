const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const { URL_SERVICE_PAYMENT } = process.env;

const foodApi = apiAdapter(URL_SERVICE_PAYMENT);

module.exports = async (req, res) => {
  try {
    const { status } = req.query;
    const params = { status };

    const userId = req.user.data.id;
    const isUser = (req.user.data.rules === "user");
    if (isUser) params.user_id = userId;
    const food = await foodApi.get(`/api/order`, {
      params,
    });
    return res.json(food.data);
  } catch (error) {
    catchError(error.res);
  }
};
