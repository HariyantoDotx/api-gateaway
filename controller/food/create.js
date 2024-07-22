const apiAdapter = require("../apiAdapter");
const catchError = require("../catchError");

const { URL_SERVICE_FOOD, URL_SERVICE_MEDIA } = process.env;

const foodApi = apiAdapter(URL_SERVICE_FOOD);
const mediaApi = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    if(req.body.image !== undefined){
      const media = await mediaApi.post("/media", req.body)
      req.body.picture = media.data.data.image.split('/').pop()
    } else {
      req.body.picture = 'default.jpg'
    }
    const food = await foodApi.post("/api/foods", req.body);
    return res.json(food.data);
  } catch (error) {
    catchError(error, res);
  }
};
