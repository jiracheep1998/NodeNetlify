require("dotenv").config();
const axios = require("axios");
const process = require("process");
const os = require('os');

exports.handler = async (event, context) => {

    
    const networkInterfaces = os.networkInterfaces();

    return {
        statusCode: 500,
        body: JSON.stringify(networkInterfaces),
      };
};

// module.exports.handler();
