require("dotenv").config();
const axios = require("axios");
const process = require("process");
const os = require('os');

exports.handler = async (event, context) => {


    try {
        const response = await axios.get('http://ifconfig.me/ip');
        const ip = response.data;

        return {
            statusCode: 200,
            body: JSON.stringify({ ip }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }


};

// module.exports.handler();
