const axios = require("axios");

class ipRepository {

    isPrivateIP(ip) {
        return (
            ip.startsWith("192.168.") ||
            ip.startsWith("10.") ||
            /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip) ||
            ip === "::1" ||
            ip === "127.0.0.1"
        );
    }

    async getLoc(data) {
        let { ip } = data;

        try {

            if (this.isPrivateIP(ip)) {
                return {
                    status: false,
                    message: "Private IP cannot be geolocated"
                };
            }

            const response = await axios.get(`http://ip-api.com/json/${ip}`);

            return response.data;

        } catch (error) {
            throw new Error("Failed to fetch location");
        }
    }
}

module.exports = new ipRepository();