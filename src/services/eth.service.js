const axios = require('axios');

const CORE_ENGINE = process.env.CORE_ENGINE
class ETHService {
    static createWallet = async () => {
        try {
            let raw = await axios.get(CORE_ENGINE + '/api/address/ETH');
            console.log(raw.data)
            return raw.data;
        } catch (error) {
            return error
        }
    }
}

module.exports = ETHService