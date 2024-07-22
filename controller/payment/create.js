const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const { URL_SERVICE_PAYMENT } = process.env;

const paymentApi = apiAdapter(URL_SERVICE_PAYMENT);

module.exports = async (req, res) => {
  try {
    console.log({req})
    const order = await paymentApi.post("/api/order", req.body);
    return res.json(order.data);
  } catch (error) {
    catchError(error, res);
  }
};
