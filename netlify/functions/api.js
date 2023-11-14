require("dotenv").config();
const axios = require("axios");
const process = require("process");

exports.handler = async (event, context) => {
    return {
        statusCode: 500,
        body: JSON.stringify({ 'test': 0 }),
      };
};

// module.exports.handler();
