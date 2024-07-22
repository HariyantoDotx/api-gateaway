const apiAdapter = require("../apiAdapter")
const catchError = require("../catchError")

const {
    URL_SERVICE_USER, URL_SERVICE_MEDIA
} = process.env

const userApi = apiAdapter(URL_SERVICE_USER)
const mediaApi = apiAdapter(URL_SERVICE_MEDIA)

module.exports = async (req, res) => {
    try {
        const { full_name, email, password} = req.body
        let data = {full_name, email, password}
        if(req.body.image !== undefined){
            const media = await mediaApi.post("/media", req.body)
            data.avatar = media.data.data.image.split("/").pop()
        }
        
        const user = await userApi.post("/users/register", data)
        return  res.json(user.data)

    } catch (error) {
        catchError(error, res)
        }
}