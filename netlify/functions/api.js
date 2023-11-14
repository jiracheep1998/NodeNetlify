require("dotenv").config();
const axios = require("axios");
const process = require("process");
const os = require('os');

exports.handler = async (event, context) => {

    
    axios.get('http://ifconfig.me/ip')
    .then(response => {
        return {
            statusCode: 500,
            body: response.data,
        };
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
    });

    
};

// module.exports.handler();
