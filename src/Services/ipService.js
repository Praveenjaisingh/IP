const ipRepository = require("../Repositories/ipRepository");
const appError = require("../Helpers/appError");                                                                                              

class ipService{

    async getLoc(data) {
        const { ip } = data;

        if (!ip) {
            throw new appError("IP address is required");
        }

        return await ipRepository.getLoc({ ip });
    }

}
module.exports = new ipService();