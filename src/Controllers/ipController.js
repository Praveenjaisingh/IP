const ipService = require("../Services/ipService");


exports.getLoc = async (req,res,next)=>{

    try{
        const data = await ipService.getLoc(req.body);
        return res.status(200).json({
            status:true,
            message:"Location Fetched successfully",
            data: data
        })

    }
    catch(error){
       next(error);
    }

}