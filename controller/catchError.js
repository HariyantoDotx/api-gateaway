module.exports = (error, res) => {
    console.log(error)
    if (error?.code === "ECONNREFUSED"){
        return res.status(500).json({
            status : "error",
            message : "service unavailabe",
        })
    }
    const data = error?.response?.data || {

        status : 'error',
        message :'something when wrong'
    }
    const status = error?.response?.status || 500
    
    return res.status(status).json(data);

}